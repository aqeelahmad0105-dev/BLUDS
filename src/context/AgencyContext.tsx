import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  CaseStudy,
  Founder,
  Inquiry,
  InquiryNote,
  InquiryStatus,
  Service,
  SiteSettings,
  Testimonial
} from '../types';
import {
  initialCaseStudies,
  initialFounders,
  initialInquiries,
  initialServices,
  initialSiteSettings,
  initialTestimonials
} from '../data/defaultData';

interface Toast {
  id: string;
  type: 'success' | 'error' | 'info';
  title: string;
  message: string;
}

interface AgencyContextType {
  // Navigation
  currentRoute: string;
  navigate: (route: string) => void;

  // Data
  inquiries: Inquiry[];
  services: Service[];
  caseStudies: CaseStudy[];
  testimonials: Testimonial[];
  founders: Founder[];
  siteSettings: SiteSettings;

  // Admin Auth
  isAuthenticated: boolean;
  loginAdmin: (email: string, pass: string) => boolean;
  logoutAdmin: () => void;

  // Inquiries Actions
  addInquiry: (inquiry: Omit<Inquiry, 'id' | 'createdAt' | 'notes' | 'status'>) => string;
  updateInquiryStatus: (id: string, status: InquiryStatus) => void;
  addInquiryNote: (id: string, content: string, author?: string) => void;
  deleteInquiry: (id: string) => void;
  exportInquiriesToCSV: () => void;

  // Services Actions
  addService: (service: Omit<Service, 'id'>) => void;
  updateService: (id: string, updated: Partial<Service>) => void;
  deleteService: (id: string) => void;
  toggleServiceActive: (id: string) => void;

  // Case Studies Actions
  addCaseStudy: (study: Omit<CaseStudy, 'id'>) => void;
  updateCaseStudy: (id: string, updated: Partial<CaseStudy>) => void;
  deleteCaseStudy: (id: string) => void;
  toggleCaseStudyActive: (id: string) => void;

  // Testimonials Actions
  addTestimonial: (testimonial: Omit<Testimonial, 'id'>) => void;
  updateTestimonial: (id: string, updated: Partial<Testimonial>) => void;
  deleteTestimonial: (id: string) => void;

  // Founders Actions
  updateFounder: (id: string, updated: Partial<Founder>) => void;
  addFounder: (founder: Omit<Founder, 'id'>) => void;
  deleteFounder: (id: string) => void;

  // Settings Actions
  updateSiteSettings: (settings: Partial<SiteSettings>) => void;
  resetAllDataToDefault: () => void;
  seedDemoInquiries: () => void;

  // Notifications
  toasts: Toast[];
  showToast: (type: 'success' | 'error' | 'info', title: string, message: string) => void;
  removeToast: (id: string) => void;

  // Active modal helpers
  activeModalCaseStudy: CaseStudy | null;
  setActiveModalCaseStudy: (study: CaseStudy | null) => void;
  activeServiceDetails: Service | null;
  setActiveServiceDetails: (service: Service | null) => void;
}

const AgencyContext = createContext<AgencyContextType | undefined>(undefined);

const STORAGE_KEYS = {
  SETTINGS: 'bluds_site_settings_v2',
  SERVICES: 'bluds_services_v2',
  CASES: 'bluds_cases_v1',
  TESTIMONIALS: 'bluds_testimonials_v1',
  FOUNDERS: 'bluds_founders_v1',
  INQUIRIES: 'bluds_inquiries_v1',
  AUTH: 'bluds_admin_auth_v1',
};

export const AgencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Navigation & Browser History Sync
  const [currentRoute, setCurrentRoute] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  const navigate = (route: string) => {
    window.history.pushState({}, '', route);
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const onPopState = () => {
      setCurrentRoute(window.location.pathname || '/');
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  // Toasts
  const [toasts, setToasts] = useState<Toast[]>([]);
  const showToast = (type: 'success' | 'error' | 'info', title: string, message: string) => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 5);
    setToasts((prev) => [...prev, { id, type, title, message }]);
    setTimeout(() => {
      removeToast(id);
    }, 4500);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Admin Auth
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    try {
      return localStorage.getItem(STORAGE_KEYS.AUTH) === 'true';
    } catch {
      return false;
    }
  });

  const loginAdmin = (email: string, pass: string): boolean => {
    // Default admin credentials: admin@bludsagency.com / bluds2026 or admin / admin123
    const validEmails = ['admin@bludsagency.com', 'admin', 'founders@bludsagency.com', 'm.bluds2@gmail.com'];
    const validPasswords = ['admin123', 'bluds2026', 'admin', 'bluds2025!'];

    const normalizedEmail = email.trim().toLowerCase();
    const normalizedPass = pass.trim();

    if (validEmails.includes(normalizedEmail) && validPasswords.includes(normalizedPass)) {
      setIsAuthenticated(true);
      try {
        localStorage.setItem(STORAGE_KEYS.AUTH, 'true');
      } catch (e) {
        console.error(e);
      }
      showToast('success', 'Admin Authenticated', 'Welcome back to BLUDS Command Center.');
      return true;
    }
    showToast('error', 'Authentication Failed', 'Invalid administrator email or password.');
    return false;
  };

  const logoutAdmin = () => {
    setIsAuthenticated(false);
    try {
      localStorage.removeItem(STORAGE_KEYS.AUTH);
    } catch (e) {
      console.error(e);
    }
    showToast('info', 'Logged Out', 'Admin session terminated safely.');
    navigate('/admin/login');
  };

  // State initialization with localStorage fallback
  const [siteSettings, setSiteSettings] = useState<SiteSettings>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.SETTINGS);
      return saved ? JSON.parse(saved) : initialSiteSettings;
    } catch {
      return initialSiteSettings;
    }
  });

  const [services, setServices] = useState<Service[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.SERVICES);
      return saved ? JSON.parse(saved) : initialServices;
    } catch {
      return initialServices;
    }
  });

  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.CASES);
      return saved ? JSON.parse(saved) : initialCaseStudies;
    } catch {
      return initialCaseStudies;
    }
  });

  const [testimonials, setTestimonials] = useState<Testimonial[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.TESTIMONIALS);
      return saved ? JSON.parse(saved) : initialTestimonials;
    } catch {
      return initialTestimonials;
    }
  });

  const [founders, setFounders] = useState<Founder[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.FOUNDERS);
      return saved ? JSON.parse(saved) : initialFounders;
    } catch {
      return initialFounders;
    }
  });

  const [inquiries, setInquiries] = useState<Inquiry[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.INQUIRIES);
      return saved ? JSON.parse(saved) : initialInquiries;
    } catch {
      return initialInquiries;
    }
  });

  // Modals
  const [activeModalCaseStudy, setActiveModalCaseStudy] = useState<CaseStudy | null>(null);
  const [activeServiceDetails, setActiveServiceDetails] = useState<Service | null>(null);

  // Sync to local storage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(siteSettings));
    } catch (e) {
      console.error(e);
    }
  }, [siteSettings]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(services));
    } catch (e) {
      console.error(e);
    }
  }, [services]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.CASES, JSON.stringify(caseStudies));
    } catch (e) {
      console.error(e);
    }
  }, [caseStudies]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.TESTIMONIALS, JSON.stringify(testimonials));
    } catch (e) {
      console.error(e);
    }
  }, [testimonials]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.FOUNDERS, JSON.stringify(founders));
    } catch (e) {
      console.error(e);
    }
  }, [founders]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.INQUIRIES, JSON.stringify(inquiries));
    } catch (e) {
      console.error(e);
    }
  }, [inquiries]);

  // Actions: Inquiries
  const addInquiry = (inquiryData: Omit<Inquiry, 'id' | 'createdAt' | 'notes' | 'status'>): string => {
    const id = 'inq-' + Math.floor(1000 + Math.random() * 9000);
    const newInquiry: Inquiry = {
      ...inquiryData,
      id,
      status: 'new',
      createdAt: new Date().toISOString(),
      notes: [
        {
          id: 'note-' + Date.now(),
          author: 'System Lead Dispatcher',
          content: `Inquiry submitted via ${inquiryData.source}. Automatically routed to all 3 Founders.`,
          createdAt: new Date().toISOString(),
        }
      ],
    };

    setInquiries((prev) => [newInquiry, ...prev]);
    showToast('success', 'Inquiry Dispatched!', 'The 3 founders will analyze your architecture request within 24 hours.');
    return id;
  };

  const updateInquiryStatus = (id: string, status: InquiryStatus) => {
    setInquiries((prev) =>
      prev.map((inq) => (inq.id === id ? { ...inq, status } : inq))
    );
    showToast('info', 'Status Updated', `Inquiry #${id} moved to status: ${status.toUpperCase()}`);
  };

  const addInquiryNote = (id: string, content: string, author = 'Admin') => {
    const note: InquiryNote = {
      id: 'note-' + Date.now(),
      author,
      content,
      createdAt: new Date().toISOString(),
    };
    setInquiries((prev) =>
      prev.map((inq) =>
        inq.id === id ? { ...inq, notes: [...inq.notes, note] } : inq
      )
    );
    showToast('success', 'Note Logged', 'Internal team note added to inquiry.');
  };

  const deleteInquiry = (id: string) => {
    setInquiries((prev) => prev.filter((inq) => inq.id !== id));
    showToast('info', 'Inquiry Removed', `Inquiry #${id} was deleted.`);
  };

  const exportInquiriesToCSV = () => {
    if (inquiries.length === 0) {
      showToast('error', 'Export Failed', 'No inquiries available to export.');
      return;
    }
    const headers = ['ID', 'Client Name', 'Email', 'Company', 'Phone', 'Project Type', 'Budget', 'Timeline', 'Status', 'Date'];
    const rows = inquiries.map((i) => [
      i.id,
      `"${i.clientName.replace(/"/g, '""')}"`,
      `"${i.email}"`,
      `"${(i.company || '').replace(/"/g, '""')}"`,
      `"${(i.phone || '').replace(/"/g, '""')}"`,
      `"${i.projectType.replace(/"/g, '""')}"`,
      `"${i.budgetRange}"`,
      `"${i.timeline}"`,
      i.status,
      i.createdAt,
    ]);

    const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `bluds_agency_inquiries_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('success', 'Export Ready', 'Inquiries exported as CSV file.');
  };

  // Actions: Services
  const addService = (serviceData: Omit<Service, 'id'>) => {
    const id = 'srv-' + Date.now().toString().slice(-4);
    const newService: Service = { ...serviceData, id };
    setServices((prev) => [newService, ...prev]);
    showToast('success', 'Service Created', `"${newService.title}" is now published.`);
  };

  const updateService = (id: string, updated: Partial<Service>) => {
    setServices((prev) =>
      prev.map((s) => (s.id === id ? { ...s, ...updated } : s))
    );
    showToast('success', 'Service Updated', 'Changes applied to live website.');
  };

  const deleteService = (id: string) => {
    setServices((prev) => prev.filter((s) => s.id !== id));
    showToast('info', 'Service Deleted', 'Service removed from catalog.');
  };

  const toggleServiceActive = (id: string) => {
    setServices((prev) =>
      prev.map((s) => (s.id === id ? { ...s, active: !s.active } : s))
    );
  };

  // Actions: Case Studies
  const addCaseStudy = (studyData: Omit<CaseStudy, 'id'>) => {
    const id = 'case-' + Date.now().toString().slice(-4);
    const newCase: CaseStudy = { ...studyData, id };
    setCaseStudies((prev) => [newCase, ...prev]);
    showToast('success', 'Case Study Published', `"${newCase.title}" is live in portfolio.`);
  };

  const updateCaseStudy = (id: string, updated: Partial<CaseStudy>) => {
    setCaseStudies((prev) =>
      prev.map((c) => (c.id === id ? { ...c, ...updated } : c))
    );
    showToast('success', 'Case Study Updated', 'Portfolio refreshed.');
  };

  const deleteCaseStudy = (id: string) => {
    setCaseStudies((prev) => prev.filter((c) => c.id !== id));
    showToast('info', 'Case Study Deleted', 'Removed from portfolio.');
  };

  const toggleCaseStudyActive = (id: string) => {
    setCaseStudies((prev) =>
      prev.map((c) => (c.id === id ? { ...c, active: !c.active } : c))
    );
  };

  // Actions: Testimonials
  const addTestimonial = (data: Omit<Testimonial, 'id'>) => {
    const id = 'test-' + Date.now().toString().slice(-4);
    const newT: Testimonial = { ...data, id };
    setTestimonials((prev) => [newT, ...prev]);
    showToast('success', 'Testimonial Added', 'Client review published.');
  };

  const updateTestimonial = (id: string, updated: Partial<Testimonial>) => {
    setTestimonials((prev) =>
      prev.map((t) => (t.id === id ? { ...t, ...updated } : t))
    );
    showToast('success', 'Testimonial Updated', 'Client feedback updated.');
  };

  const deleteTestimonial = (id: string) => {
    setTestimonials((prev) => prev.filter((t) => t.id !== id));
    showToast('info', 'Testimonial Removed', 'Review deleted.');
  };

  // Actions: Founders
  const updateFounder = (id: string, updated: Partial<Founder>) => {
    setFounders((prev) =>
      prev.map((f) => (f.id === id ? { ...f, ...updated } : f))
    );
    showToast('success', 'Founder Profile Updated', 'Public bio and info updated.');
  };

  const addFounder = (founderData: Omit<Founder, 'id'>) => {
    const id = 'founder-' + Date.now().toString().slice(-4);
    setFounders((prev) => [...prev, { ...founderData, id }]);
    showToast('success', 'Founder Added', 'New leader profile published.');
  };

  const deleteFounder = (id: string) => {
    setFounders((prev) => prev.filter((f) => f.id !== id));
    showToast('info', 'Founder Removed', 'Profile deleted.');
  };

  // Actions: Settings
  const updateSiteSettings = (settings: Partial<SiteSettings>) => {
    setSiteSettings((prev) => ({
      ...prev,
      ...settings,
      announcement: { ...prev.announcement, ...(settings.announcement || {}) },
      operationalModel: { ...prev.operationalModel, ...(settings.operationalModel || {}) },
      contactInfo: { ...prev.contactInfo, ...(settings.contactInfo || {}) },
      socialLinks: { ...prev.socialLinks, ...(settings.socialLinks || {}) },
      metrics: { ...prev.metrics, ...(settings.metrics || {}) },
    }));
    showToast('success', 'Agency Settings Saved', 'Live site adjustments deployed.');
  };

  const resetAllDataToDefault = () => {
    setSiteSettings(initialSiteSettings);
    setServices(initialServices);
    setCaseStudies(initialCaseStudies);
    setTestimonials(initialTestimonials);
    setFounders(initialFounders);
    setInquiries(initialInquiries);
    localStorage.clear();
    showToast('info', 'System Reset', 'All agency data restored to default preset.');
  };

  const seedDemoInquiries = () => {
    setInquiries(initialInquiries);
    showToast('success', 'Inquiries Seeded', 'Sample inquiries loaded for evaluation.');
  };

  return (
    <AgencyContext.Provider
      value={{
        currentRoute,
        navigate,
        inquiries,
        services,
        caseStudies,
        testimonials,
        founders,
        siteSettings,
        isAuthenticated,
        loginAdmin,
        logoutAdmin,
        addInquiry,
        updateInquiryStatus,
        addInquiryNote,
        deleteInquiry,
        exportInquiriesToCSV,
        addService,
        updateService,
        deleteService,
        toggleServiceActive,
        addCaseStudy,
        updateCaseStudy,
        deleteCaseStudy,
        toggleCaseStudyActive,
        addTestimonial,
        updateTestimonial,
        deleteTestimonial,
        updateFounder,
        addFounder,
        deleteFounder,
        updateSiteSettings,
        resetAllDataToDefault,
        seedDemoInquiries,
        toasts,
        showToast,
        removeToast,
        activeModalCaseStudy,
        setActiveModalCaseStudy,
        activeServiceDetails,
        setActiveServiceDetails,
      }}
    >
      {children}
    </AgencyContext.Provider>
  );
};

export const useAgency = (): AgencyContextType => {
  const context = useContext(AgencyContext);
  if (!context) {
    throw new Error('useAgency must be used within an AgencyProvider');
  }
  return context;
};

