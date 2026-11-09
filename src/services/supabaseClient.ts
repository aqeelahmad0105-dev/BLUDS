import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Inquiry, InquiryNote, InquiryStatus, SiteCloudSyncConfig } from '../types';

let cachedClient: SupabaseClient | null = null;
let lastUsedUrl = '';
let lastUsedKey = '';

/**
 * Copy-paste SQL schema for founders to run in Supabase SQL Editor
 */
export const SUPABASE_SQL_SCHEMA = `-- 1. Create Inquiries Table in Supabase
CREATE TABLE IF NOT EXISTS inquiries (
  id TEXT PRIMARY KEY,
  "clientName" TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  "projectType" TEXT NOT NULL,
  "budgetRange" TEXT NOT NULL,
  timeline TEXT NOT NULL,
  message TEXT NOT NULL,
  source TEXT DEFAULT 'contact_form',
  status TEXT DEFAULT 'new',
  priority TEXT DEFAULT 'high',
  "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
  notes JSONB DEFAULT '[]'::jsonb,
  "estimatedScope" TEXT
);

-- 2. Enable Row Level Security (RLS)
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

-- 3. Policy: Allow visitors on bluds.vercel.app to insert new inquiries
CREATE POLICY "Allow public insert" ON inquiries 
FOR INSERT TO anon WITH CHECK (true);

-- 4. Policy: Allow founders to read, update status, and manage inquiries
CREATE POLICY "Allow founders manage" ON inquiries 
FOR ALL TO anon USING (true);`;

/**
 * Returns true if valid Supabase credentials exist in config or environment variables
 */
export function isSupabaseConfigured(config?: SiteCloudSyncConfig): boolean {
  const env = (import.meta as any).env || {};
  const url = config?.supabaseUrl?.trim() || (env.VITE_SUPABASE_URL as string)?.trim() || '';
  const key = config?.supabaseAnonKey?.trim() || (env.VITE_SUPABASE_ANON_KEY as string)?.trim() || '';
  return Boolean(url && key && url.startsWith('http'));
}

/**
 * Retrieves or instantiates the Supabase client
 */
export function getSupabaseClient(config?: SiteCloudSyncConfig): SupabaseClient | null {
  const env = (import.meta as any).env || {};
  const url = config?.supabaseUrl?.trim() || (env.VITE_SUPABASE_URL as string)?.trim() || '';
  const key = config?.supabaseAnonKey?.trim() || (env.VITE_SUPABASE_ANON_KEY as string)?.trim() || '';

  if (!url || !key || !url.startsWith('http')) {
    return null;
  }

  if (cachedClient && lastUsedUrl === url && lastUsedKey === key) {
    return cachedClient;
  }

  try {
    cachedClient = createClient(url, key, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
      realtime: {
        params: {
          eventsPerSecond: 10,
        },
      },
    });
    lastUsedUrl = url;
    lastUsedKey = key;
    return cachedClient;
  } catch (err) {
    console.warn('Failed to initialize Supabase client:', err);
    return null;
  }
}

/**
 * Tests connection to a Supabase project URL and Anon key
 */
export async function testSupabaseConnection(
  url: string,
  anonKey: string
): Promise<{ success: boolean; message: string; rowCount?: number }> {
  if (!url || !anonKey) {
    return { success: false, message: 'Please provide both Supabase URL and Anon Public Key.' };
  }

  try {
    const client = createClient(url.trim(), anonKey.trim(), {
      auth: { persistSession: false },
    });

    const { data, count, error } = await client
      .from('inquiries')
      .select('id', { count: 'exact', head: true });

    if (error) {
      if (error.code === '42P01') {
        return {
          success: false,
          message: 'Connected to Supabase, but "inquiries" table does not exist yet. Please run the SQL schema script provided below.',
        };
      }
      return { success: false, message: `Supabase Error: ${error.message}` };
    }

    return {
      success: true,
      message: 'Successfully connected to Supabase database! Realtime synchronization is active.',
      rowCount: count ?? 0,
    };
  } catch (err: any) {
    return { success: false, message: `Connection failed: ${err.message || 'Unknown network error'}` };
  }
}

/**
 * Fetches all inquiries from Supabase cloud database
 */
export async function fetchCloudInquiries(config?: SiteCloudSyncConfig): Promise<Inquiry[] | null> {
  const client = getSupabaseClient(config);
  if (!client) return null;

  try {
    const { data, error } = await client
      .from('inquiries')
      .select('*')
      .order('createdAt', { ascending: false });

    if (error) {
      console.warn('Failed to fetch inquiries from cloud:', error.message);
      return null;
    }

    // Map database fields safely
    return (data || []).map((row: any) => ({
      id: row.id,
      clientName: row.clientName,
      email: row.email,
      phone: row.phone || undefined,
      company: row.company || undefined,
      projectType: row.projectType,
      budgetRange: row.budgetRange,
      timeline: row.timeline,
      message: row.message,
      source: row.source || 'contact_form',
      status: (row.status as InquiryStatus) || 'new',
      priority: row.priority || 'high',
      createdAt: row.createdAt,
      notes: Array.isArray(row.notes) ? row.notes : [],
      estimatedScope: row.estimatedScope || undefined,
    }));
  } catch (err) {
    console.warn('Supabase fetch exception:', err);
    return null;
  }
}

/**
 * Inserts a new inquiry into Supabase
 */
export async function insertCloudInquiry(
  inquiry: Inquiry,
  config?: SiteCloudSyncConfig
): Promise<boolean> {
  const client = getSupabaseClient(config);
  if (!client) return false;

  try {
    const { error } = await client.from('inquiries').insert([
      {
        id: inquiry.id,
        clientName: inquiry.clientName,
        email: inquiry.email,
        phone: inquiry.phone || null,
        company: inquiry.company || null,
        projectType: inquiry.projectType,
        budgetRange: inquiry.budgetRange,
        timeline: inquiry.timeline,
        message: inquiry.message,
        source: inquiry.source,
        status: inquiry.status,
        priority: inquiry.priority,
        createdAt: inquiry.createdAt,
        notes: inquiry.notes || [],
        estimatedScope: inquiry.estimatedScope || null,
      },
    ]);

    if (error) {
      console.warn('Failed to insert inquiry to cloud:', error.message);
      return false;
    }

    return true;
  } catch (err) {
    console.warn('Supabase insert exception:', err);
    return false;
  }
}

/**
 * Updates an inquiry status in Supabase
 */
export async function updateCloudInquiryStatus(
  id: string,
  status: InquiryStatus,
  config?: SiteCloudSyncConfig
): Promise<boolean> {
  const client = getSupabaseClient(config);
  if (!client) return false;

  try {
    const { error } = await client
      .from('inquiries')
      .update({ status })
      .eq('id', id);

    if (error) {
      console.warn('Failed to update status in cloud:', error.message);
      return false;
    }

    return true;
  } catch (err) {
    console.warn('Supabase update status exception:', err);
    return false;
  }
}

/**
 * Adds a note to an inquiry in Supabase
 */
export async function addCloudInquiryNote(
  id: string,
  newNotes: InquiryNote[],
  config?: SiteCloudSyncConfig
): Promise<boolean> {
  const client = getSupabaseClient(config);
  if (!client) return false;

  try {
    const { error } = await client
      .from('inquiries')
      .update({ notes: newNotes })
      .eq('id', id);

    if (error) {
      console.warn('Failed to update note in cloud:', error.message);
      return false;
    }

    return true;
  } catch (err) {
    console.warn('Supabase note update exception:', err);
    return false;
  }
}

/**
 * Deletes an inquiry from Supabase
 */
export async function deleteCloudInquiry(
  id: string,
  config?: SiteCloudSyncConfig
): Promise<boolean> {
  const client = getSupabaseClient(config);
  if (!client) return false;

  try {
    const { error } = await client
      .from('inquiries')
      .delete()
      .eq('id', id);

    if (error) {
      console.warn('Failed to delete inquiry from cloud:', error.message);
      return false;
    }

    return true;
  } catch (err) {
    console.warn('Supabase delete exception:', err);
    return false;
  }
}

