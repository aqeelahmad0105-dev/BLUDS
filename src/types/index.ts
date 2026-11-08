export type InquiryStatus = 'new' | 'reviewed' | 'contacted' | 'proposal_sent' | 'won' | 'closed';

export interface InquiryNote {
  id: string;
  author: string;
  content: string;
  createdAt: string;
}

export interface Inquiry {
  id: string;
  clientName: string;
  email: string;
  phone?: string;
  company?: string;
  projectType: string;
  budgetRange: string;
  timeline: string;
  message: string;
  source: 'contact_form' | 'cost_estimator' | 'manual_admin';
  status: InquiryStatus;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  createdAt: string;
  notes: InquiryNote[];
  estimatedScope?: string;
}

export interface Service {
  id: string;
  title: string;
  tagline: string;
  iconName: string; // Lucide icon name
  badge: string;
  shortDescription: string;
  fullDescription: string;
  deliverables: string[];
  techStack: string[];
  startingPrice?: string;
  active: boolean;
  featured: boolean;
}

export interface CaseStudyMetric {
  label: string;
  value: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: 'Cloud & SaaS' | 'AI & LLM' | 'FinTech' | 'Mobile' | 'Enterprise' | 'Web3';
  summary: string;
  challenge: string;
  solution: string;
  heroImage: string;
  tags: string[];
  metrics: CaseStudyMetric[];
  techStack: string[];
  liveUrl?: string;
  featured: boolean;
  active: boolean;
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  company: string;
  location: string;
  rating: number; // 1 to 5
  quote: string;
  avatarUrl: string;
  projectDelivered: string;
  active: boolean;
}

export interface Founder {
  id: string;
  name: string;
  role: string;
  focus: string;
  bio: string;
  expertise: string[];
  avatarUrl: string;
  socials: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    email?: string;
  };
  location: string;
  onlineStatusBadge: string;
  active: boolean;
}

export interface SiteSettings {
  agencyName: string;
  tagline: string;
  shortPitch: string;
  announcement: {
    enabled: boolean;
    text: string;
    tag: string;
    actionText: string;
    actionTarget: string;
  };
  operationalModel: {
    currentPhase: string;
    phaseBadge: string;
    description: string;
    nextMilestone: string;
  };
  contactInfo: {
    email: string;
    phone: string;
    whatsapp?: string;
    leadContact?: string;
    headquarters: string;
    physicalStudioNote: string;
    businessHours: string;
    calendlyLink: string;
  };
  socialLinks: {
    github: string;
    linkedin: string;
    twitter: string;
    discord: string;
  };
  metrics: {
    projectsShipped: string;
    clientSatisfactionRate: string;
    averageDeliveryWeeks: string;
    uptimeSLA: string;
  };
}

export interface EstimatorChoice {
  projectType: string;
  scale: string;
  timeline: string;
  aiFeatures: boolean;
  devOpsIncluded: boolean;
  dedicatedSLA: boolean;
}

