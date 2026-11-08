import React, { useState } from 'react';
import { useAgency } from '../../context/AgencyContext';
import { 
  CaseStudy, 
  Founder, 
  Inquiry, 
  InquiryStatus, 
  Service, 
  Testimonial 
} from '../../types';
import { 
  LayoutDashboard, 
  Inbox, 
  Layers, 
  Briefcase, 
  MessageSquareQuote, 
  Users2, 
  Settings, 
  LogOut, 
  ExternalLink, 
  Plus, 
  Search, 
  CheckCircle2, 
  Trash2, 
  Edit3, 
  Mail, 
  Phone, 
  Download, 
  RefreshCw, 
  Eye, 
  EyeOff, 
  X, 
  Save, 
  Building2,
  TrendingUp,
  Upload,
  Image as ImageIcon
} from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const {
    navigate,
    logoutAdmin,
    inquiries,
    updateInquiryStatus,
    addInquiryNote,
    deleteInquiry,
    exportInquiriesToCSV,
    addInquiry,
    services,
    addService,
    updateService,
    deleteService,
    toggleServiceActive,
    caseStudies,
    addCaseStudy,
    updateCaseStudy,
    deleteCaseStudy,
    toggleCaseStudyActive,
    testimonials,
    addTestimonial,
    updateTestimonial,
    deleteTestimonial,
    founders,
    updateFounder,
    addFounder,
    deleteFounder,
    siteSettings,
    updateSiteSettings,
    resetAllDataToDefault,
    seedDemoInquiries
  } = useAgency();

  // Active Tab
  const [activeTab, setActiveTab] = useState<'overview' | 'inquiries' | 'services' | 'cases' | 'testimonials' | 'founders' | 'settings'>('founders');

  // Inquiry management filters
  const [inquirySearch, setInquirySearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
  const [newNoteText, setNewNoteText] = useState('');
  const [manualInquiryModal, setManualInquiryModal] = useState(false);

  // Manual inquiry form state
  const [manualName, setManualName] = useState('');
  const [manualEmail, setManualEmail] = useState('');
  const [manualPhone, setManualPhone] = useState('');
  const [manualCompany, setManualCompany] = useState('');
  const [manualService, setManualService] = useState('Custom Enterprise Software & SaaS');
  const [manualBudget, setManualBudget] = useState('$25,000 - $50,000');
  const [manualTimeline, setManualTimeline] = useState('Within 2 Months');
  const [manualMessage, setManualMessage] = useState('');

  // Service Edit/Create Modal
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [isCreatingService, setIsCreatingService] = useState(false);
  const [serviceForm, setServiceForm] = useState<Partial<Service>>({});

  // Case Study Edit/Create Modal
  const [editingCase, setEditingCase] = useState<CaseStudy | null>(null);
  const [isCreatingCase, setIsCreatingCase] = useState(false);
  const [caseForm, setCaseForm] = useState<Partial<CaseStudy>>({});

  // Testimonial Edit/Create Modal
  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null);
  const [isCreatingTestimonial, setIsCreatingTestimonial] = useState(false);
  const [testimonialForm, setTestimonialForm] = useState<Partial<Testimonial>>({});

  // Founder Edit/Create Modal
  const [editingFounder, setEditingFounder] = useState<Founder | null>(null);
  const [isCreatingFounder, setIsCreatingFounder] = useState(false);
  const [founderForm, setFounderForm] = useState<Partial<Founder>>({
    name: '',
    role: '',
    focus: '',
    bio: '',
    expertise: [],
    avatarUrl: '',
    socials: { linkedin: '', github: '', twitter: '', email: '' },
    location: '',
    onlineStatusBadge: '',
    active: true,
  });
  const [expertiseString, setExpertiseString] = useState('');

  // Site Settings Form
  const [settingsForm, setSettingsForm] = useState(siteSettings);

  React.useEffect(() => {
    setSettingsForm(siteSettings);
  }, [siteSettings]);

  // Derived metrics
  const totalInquiries = inquiries.length;
  const newInquiries = inquiries.filter((i) => i.status === 'new').length;
  const closedInquiries = inquiries.filter((i) => i.status === 'won').length;
  const conversionRate = totalInquiries > 0 ? Math.round((closedInquiries / totalInquiries) * 100) : 0;

  // Filtered Inquiries
  const filteredInquiries = inquiries.filter((inq) => {
    const matchesSearch =
      inq.clientName.toLowerCase().includes(inquirySearch.toLowerCase()) ||
      inq.email.toLowerCase().includes(inquirySearch.toLowerCase()) ||
      (inq.company && inq.company.toLowerCase().includes(inquirySearch.toLowerCase())) ||
      inq.projectType.toLowerCase().includes(inquirySearch.toLowerCase());
    const matchesStatus = statusFilter === 'all' || inq.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: InquiryStatus) => {
    switch (status) {
      case 'new':
        return <span className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-blue-950/40 text-blue-400 border border-blue-900/40">New</span>;
      case 'reviewed':
        return <span className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-indigo-950/40 text-indigo-400 border border-indigo-900/40">Reviewed</span>;
      case 'contacted':
        return <span className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-amber-950/40 text-amber-400 border border-amber-900/40">Contacted</span>;
      case 'proposal_sent':
        return <span className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-purple-950/40 text-purple-400 border border-purple-900/40">Proposal Sent</span>;
      case 'won':
        return <span className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-emerald-950/40 text-emerald-400 border border-emerald-900/40">Won</span>;
      case 'closed':
        return <span className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-neutral-900 text-neutral-400 border border-neutral-800">Closed</span>;
    }
  };

  const handleAddNote = () => {
    if (!selectedInquiry || !newNoteText.trim()) return;
    addInquiryNote(selectedInquiry.id, newNoteText.trim(), 'Ghulam (CTO)');
    setNewNoteText('');
    const updated = inquiries.find((i) => i.id === selectedInquiry.id);
    if (updated) setSelectedInquiry(updated);
  };

  const handleManualInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!manualName.trim() || !manualEmail.trim()) return;
    addInquiry({
      clientName: manualName.trim(),
      email: manualEmail.trim(),
      phone: manualPhone.trim() || undefined,
      company: manualCompany.trim() || undefined,
      projectType: manualService,
      budgetRange: manualBudget,
      timeline: manualTimeline,
      message: manualMessage.trim() || 'Manual lead logged by admin.',
      source: 'manual_admin',
      priority: 'high',
      estimatedScope: 'Manually entered lead.',
    });
    setManualInquiryModal(false);
    setManualName('');
    setManualEmail('');
    setManualPhone('');
    setManualCompany('');
    setManualMessage('');
  };

  // Open Founder Edit Modal
  const openEditFounder = (founder: Founder) => {
    setEditingFounder(founder);
    setIsCreatingFounder(false);
    setFounderForm({ ...founder });
    setExpertiseString(founder.expertise.join(', '));
  };

  const openCreateFounder = () => {
    setEditingFounder(null);
    setIsCreatingFounder(true);
    setFounderForm({
      name: '',
      role: 'Co-Founder & Partner',
      focus: 'Distributed Systems & Architecture',
      bio: '',
      expertise: ['Cloud Architecture', 'TypeScript', 'Agile Delivery'],
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
      socials: { linkedin: '', github: '', twitter: '', email: '' },
      location: 'Remote Lead / Future Onsite Studio',
      onlineStatusBadge: 'Available for Architecture Reviews',
      active: true,
    });
    setExpertiseString('Cloud Architecture, TypeScript, Agile Delivery');
  };

  // Handle Image File Upload (Base64 conversion)
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      setFounderForm((prev) => ({ ...prev, avatarUrl: base64String }));
    };
    reader.readAsDataURL(file);
  };

  // Save Founder changes
  const handleSaveFounder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!founderForm.name || !founderForm.role) return;

    const expertiseList = expertiseString
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);

    if (isCreatingFounder) {
      addFounder({
        name: founderForm.name || '',
        role: founderForm.role || '',
        focus: founderForm.focus || '',
        bio: founderForm.bio || '',
        expertise: expertiseList,
        avatarUrl: founderForm.avatarUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
        socials: founderForm.socials || {},
        location: founderForm.location || 'Remote Lead',
        onlineStatusBadge: founderForm.onlineStatusBadge || 'Active',
        active: true,
      });
    } else if (editingFounder) {
      updateFounder(editingFounder.id, {
        ...founderForm,
        expertise: expertiseList,
      });
    }

    setEditingFounder(null);
    setIsCreatingFounder(false);
  };

  const handleSaveService = (e: React.FormEvent) => {
    e.preventDefault();
    if (!serviceForm.title || !serviceForm.shortDescription) return;

    if (isCreatingService) {
      addService({
        title: serviceForm.title || '',
        tagline: serviceForm.tagline || '',
        iconName: serviceForm.iconName || 'Code2',
        badge: serviceForm.badge || 'EXPANDED',
        shortDescription: serviceForm.shortDescription || '',
        fullDescription: serviceForm.fullDescription || '',
        deliverables: Array.isArray(serviceForm.deliverables) ? serviceForm.deliverables : ['Architecture blueprint', 'Staging deployment', 'Continuous SLA'],
        techStack: Array.isArray(serviceForm.techStack) ? serviceForm.techStack : ['React', 'Node.js', 'PostgreSQL'],
        startingPrice: serviceForm.startingPrice || 'From $5,000 / sprint',
        active: true,
        featured: false,
      });
    } else if (editingService) {
      updateService(editingService.id, serviceForm);
    }

    setEditingService(null);
    setIsCreatingService(false);
    setServiceForm({});
  };

  const handleSaveCaseStudy = (e: React.FormEvent) => {
    e.preventDefault();
    if (!caseForm.title || !caseForm.client) return;

    if (isCreatingCase) {
      addCaseStudy({
        title: caseForm.title || '',
        client: caseForm.client || '',
        category: caseForm.category || 'Cloud & SaaS',
        summary: caseForm.summary || '',
        challenge: caseForm.challenge || '',
        solution: caseForm.solution || '',
        heroImage: caseForm.heroImage || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
        tags: Array.isArray(caseForm.tags) ? caseForm.tags : ['Cloud', 'High-Load'],
        metrics: Array.isArray(caseForm.metrics) ? caseForm.metrics : [{ label: 'Performance', value: '+200%' }],
        techStack: Array.isArray(caseForm.techStack) ? caseForm.techStack : ['Next.js', 'PostgreSQL'],
        liveUrl: caseForm.liveUrl,
        featured: true,
        active: true,
      });
    } else if (editingCase) {
      updateCaseStudy(editingCase.id, caseForm);
    }

    setEditingCase(null);
    setIsCreatingCase(false);
    setCaseForm({});
  };

  const handleSaveTestimonial = (e: React.FormEvent) => {
    e.preventDefault();
    if (!testimonialForm.clientName || !testimonialForm.quote) return;

    if (isCreatingTestimonial) {
      addTestimonial({
        clientName: testimonialForm.clientName || '',
        role: testimonialForm.role || 'CTO',
        company: testimonialForm.company || 'Enterprise Partner',
        location: testimonialForm.location || 'Global',
        rating: testimonialForm.rating || 5,
        quote: testimonialForm.quote || '',
        avatarUrl: testimonialForm.avatarUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
        projectDelivered: testimonialForm.projectDelivered || 'Enterprise Architecture',
        active: true,
      });
    } else if (editingTestimonial) {
      updateTestimonial(editingTestimonial.id, testimonialForm);
    }

    setEditingTestimonial(null);
    setIsCreatingTestimonial(false);
    setTestimonialForm({});
  };

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    updateSiteSettings(settingsForm);
  };

  return (
    <div className="min-h-screen bg-black text-neutral-200 flex flex-col font-sans">
      
      {/* Top Admin Navigation Bar */}
      <header className="bg-[#0c0c0c] border-b border-[#222222] px-4 sm:px-6 py-3.5 sticky top-0 z-30 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
            B
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-base text-white tracking-tight">
                BLUDS Agency
              </span>
              <span className="px-2 py-0.5 rounded text-[11px] font-mono text-neutral-400 bg-[#141414] border border-[#262626]">
                Admin Portal
              </span>
            </div>
            <div className="text-[11px] text-neutral-400">
              Founders Management
            </div>
          </div>
        </div>

        {/* Header Right Actions */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => navigate('/')}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141414] hover:bg-neutral-800 text-xs text-neutral-300 hover:text-white border border-[#262626] transition-colors"
          >
            <span>View Public Site</span>
            <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
          </button>

          <button
            onClick={resetAllDataToDefault}
            title="Reset to default preset data"
            className="p-2 rounded-lg bg-[#141414] hover:bg-neutral-800 text-neutral-400 hover:text-white border border-[#262626] transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
          </button>

          <button
            onClick={logoutAdmin}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-950/40 hover:bg-rose-900/40 text-rose-300 border border-rose-800 text-xs font-medium transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </header>

      {/* Main Body */}
      <div className="flex-1 flex flex-col md:flex-row">
        
        {/* Sidebar Tabs */}
        <aside className="w-full md:w-64 bg-[#0c0c0c] border-r border-[#222222] p-4 shrink-0 flex md:flex-col gap-1 overflow-x-auto">
          <div className="hidden md:block text-[11px] font-mono text-neutral-500 px-3 py-1.5">
            Operations & Team
          </div>

          <button
            onClick={() => setActiveTab('founders')}
            className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
              activeTab === 'founders'
                ? 'bg-blue-600 text-white'
                : 'text-neutral-400 hover:text-white hover:bg-[#141414]'
            }`}
          >
            <Users2 className="w-4 h-4 shrink-0" />
            <span>The 3 Founders & Pics</span>
          </button>

          <button
            onClick={() => setActiveTab('inquiries')}
            className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
              activeTab === 'inquiries'
                ? 'bg-blue-600 text-white'
                : 'text-neutral-400 hover:text-white hover:bg-[#141414]'
            }`}
          >
            <span className="flex items-center gap-2.5">
              <Inbox className="w-4 h-4 shrink-0" />
              <span>Client Queries & RFPs</span>
            </span>
            {newInquiries > 0 && (
              <span className="px-1.5 py-0.2 rounded-full text-[10px] font-mono bg-white text-black font-semibold">
                {newInquiries}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('overview')}
            className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
              activeTab === 'overview'
                ? 'bg-blue-600 text-white'
                : 'text-neutral-400 hover:text-white hover:bg-[#141414]'
            }`}
          >
            <LayoutDashboard className="w-4 h-4 shrink-0" />
            <span>Overview & KPIs</span>
          </button>

          <div className="hidden md:block text-[11px] font-mono text-neutral-500 px-3 pt-4 pb-1.5">
            Website Adjustments
          </div>

          <button
            onClick={() => setActiveTab('services')}
            className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
              activeTab === 'services'
                ? 'bg-blue-600 text-white'
                : 'text-neutral-400 hover:text-white hover:bg-[#141414]'
            }`}
          >
            <Layers className="w-4 h-4 shrink-0" />
            <span>Services Catalog</span>
          </button>

          <button
            onClick={() => setActiveTab('cases')}
            className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
              activeTab === 'cases'
                ? 'bg-blue-600 text-white'
                : 'text-neutral-400 hover:text-white hover:bg-[#141414]'
            }`}
          >
            <Briefcase className="w-4 h-4 shrink-0" />
            <span>Case Studies Portfolio</span>
          </button>

          <button
            onClick={() => setActiveTab('testimonials')}
            className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
              activeTab === 'testimonials'
                ? 'bg-blue-600 text-white'
                : 'text-neutral-400 hover:text-white hover:bg-[#141414]'
            }`}
          >
            <MessageSquareQuote className="w-4 h-4 shrink-0" />
            <span>Client Testimonials</span>
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
              activeTab === 'settings'
                ? 'bg-blue-600 text-white'
                : 'text-neutral-400 hover:text-white hover:bg-[#141414]'
            }`}
          >
            <Settings className="w-4 h-4 shrink-0" />
            <span>Site Settings & Banner</span>
          </button>

          <div className="hidden md:block mt-auto pt-6 border-t border-[#1f1f1f] text-[11px] font-mono text-neutral-500">
            <div>BLUDS Executive System</div>
            <div className="text-blue-400">Online & Onsite 2026</div>
          </div>
        </aside>

        {/* Content Area */}
        <main className="flex-1 p-4 sm:p-8 overflow-y-auto max-w-7xl">
          
          {/* ============================================================== */}
          {/* TAB: THE 3 FOUNDERS & PICTURES SETTINGS                        */}
          {/* ============================================================== */}
          {activeTab === 'founders' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Founders & Leadership Management
                  </h2>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Edit founder photos, names, roles, bios, expertise, and status badges
                  </p>
                </div>
                <button
                  onClick={openCreateFounder}
                  className="px-3.5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs transition-colors flex items-center gap-1.5 self-start sm:self-auto"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Founder Profile</span>
                </button>
              </div>

              {/* Founder Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {founders.map((founder, idx) => (
                  <div
                    key={founder.id}
                    className="p-5 rounded-xl bg-[#0c0c0c] border border-[#222222] hover:border-neutral-700 transition-colors flex flex-col justify-between"
                  >
                    <div>
                      {/* Avatar preview */}
                      <div className="relative mb-4 flex items-center justify-between">
                        <div className="w-16 h-16 rounded-xl overflow-hidden border border-[#262626] bg-[#141414]">
                          <img
                            src={founder.avatarUrl}
                            alt={founder.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="text-[11px] font-mono text-neutral-400 bg-[#141414] px-2 py-0.5 rounded border border-[#262626]">
                          Founder 0{idx + 1}
                        </span>
                      </div>

                      {/* Info */}
                      <div className="mb-2">
                        <h3 className="text-base font-semibold text-white">
                          {founder.name}
                        </h3>
                        <div className="text-xs text-blue-400 font-medium mt-0.5">
                          {founder.role}
                        </div>
                      </div>

                      <div className="text-xs text-neutral-300 mb-2">
                        Focus: <span className="text-white">{founder.focus}</span>
                      </div>

                      <p className="text-xs text-neutral-400 line-clamp-3 leading-relaxed mb-4">
                        {founder.bio}
                      </p>

                      {/* Expertise */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {founder.expertise.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#141414] border border-[#262626] text-neutral-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Actions */}
                    <div className="pt-3 border-t border-[#1c1c1c] flex items-center justify-between">
                      <div className="text-[11px] font-mono text-emerald-400">
                        {founder.onlineStatusBadge}
                      </div>

                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => openEditFounder(founder)}
                          className="px-2.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium flex items-center gap-1.5 transition-colors"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                          <span>Edit</span>
                        </button>
                        {founders.length > 1 && (
                          <button
                            onClick={() => deleteFounder(founder.id)}
                            className="p-1.5 rounded-lg text-neutral-500 hover:text-rose-400 hover:bg-rose-950/30 transition-colors"
                            title="Delete founder"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* TAB: INQUIRIES & QUOTES MANAGEMENT                             */}
          {/* ============================================================== */}
          {activeTab === 'inquiries' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Client Inquiries & Project RFPs
                  </h2>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Manage incoming briefs from the Contact Form and Scope Estimator
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setManualInquiryModal(true)}
                    className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs transition-colors flex items-center gap-1.5"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Log Lead</span>
                  </button>

                  <button
                    onClick={exportInquiriesToCSV}
                    className="px-3 py-1.5 rounded-lg bg-[#141414] hover:bg-neutral-800 border border-[#262626] text-xs font-mono text-neutral-300 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>CSV</span>
                  </button>

                  <button
                    onClick={seedDemoInquiries}
                    title="Load sample inquiries"
                    className="p-1.5 rounded-lg bg-[#141414] hover:bg-neutral-800 border border-[#262626] text-xs text-blue-400"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Filters & Search */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                <div className="sm:col-span-8 relative">
                  <Search className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search client name, email, company, or service..."
                    value={inquirySearch}
                    onChange={(e) => setInquirySearch(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-lg bg-[#141414] border border-[#262626] text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="sm:col-span-4">
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-[#141414] border border-[#262626] text-xs text-neutral-300 focus:outline-none focus:border-blue-500"
                  >
                    <option value="all">All Inquiries ({inquiries.length})</option>
                    <option value="new">New Inquiries ({inquiries.filter(i => i.status === 'new').length})</option>
                    <option value="reviewed">Under Architecture Review</option>
                    <option value="contacted">Contacted</option>
                    <option value="proposal_sent">Proposal Sent</option>
                    <option value="won">Won / Signed Retainer</option>
                    <option value="closed">Closed / Archived</option>
                  </select>
                </div>
              </div>

              {/* Inquiries Table */}
              <div className="rounded-xl bg-[#0c0c0c] border border-[#222222] overflow-hidden">
                {filteredInquiries.length === 0 ? (
                  <div className="p-10 text-center text-neutral-500 font-mono text-xs">
                    No inquiries found matching your filters.
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="bg-[#121212] border-b border-[#222222] text-neutral-400 font-mono">
                          <th className="py-3 px-4">Client / Company</th>
                          <th className="py-3 px-4">Project & Scope</th>
                          <th className="py-3 px-4">Budget & Time</th>
                          <th className="py-3 px-4">Source</th>
                          <th className="py-3 px-4">Status</th>
                          <th className="py-3 px-4 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#1c1c1c]">
                        {filteredInquiries.map((inq) => (
                          <tr
                            key={inq.id}
                            className="hover:bg-[#111111] transition-colors cursor-pointer"
                            onClick={() => setSelectedInquiry(inq)}
                          >
                            <td className="py-3 px-4">
                              <div className="font-semibold text-white">
                                {inq.clientName}
                              </div>
                              <div className="text-[11px] font-mono text-blue-400">{inq.email}</div>
                              {inq.company && (
                                <div className="text-[10px] text-neutral-400">{inq.company}</div>
                              )}
                            </td>

                            <td className="py-3 px-4 max-w-xs">
                              <div className="font-medium text-neutral-200 truncate">{inq.projectType}</div>
                              <div className="text-[11px] text-neutral-400 truncate mt-0.5">{inq.message}</div>
                            </td>

                            <td className="py-3 px-4 whitespace-nowrap">
                              <div className="font-mono text-emerald-400 font-medium">{inq.budgetRange}</div>
                              <div className="text-[10px] font-mono text-neutral-400">{inq.timeline}</div>
                            </td>

                            <td className="py-3 px-4 whitespace-nowrap">
                              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#141414] border border-[#262626] text-neutral-400">
                                {inq.source === 'cost_estimator' ? 'Estimator' : inq.source === 'contact_form' ? 'Web Form' : 'Manual'}
                              </span>
                            </td>

                            <td className="py-3 px-4 whitespace-nowrap">
                              {getStatusBadge(inq.status)}
                            </td>

                            <td className="py-3 px-4 text-right whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                              <div className="flex items-center justify-end gap-1.5">
                                <button
                                  onClick={() => setSelectedInquiry(inq)}
                                  className="px-2.5 py-1 rounded bg-[#141414] hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors text-[11px] font-mono"
                                >
                                  Brief
                                </button>
                                <button
                                  onClick={() => deleteInquiry(inq.id)}
                                  className="p-1 rounded text-neutral-500 hover:text-rose-400 transition-colors"
                                  title="Delete inquiry"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* TAB: EXECUTIVE OVERVIEW                                        */}
          {/* ============================================================== */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Executive Overview & Performance Metrics
                </h2>
                <p className="text-xs text-neutral-400 mt-0.5">
                  High-level performance metrics of BLUDS Agency operations
                </p>
              </div>

              {/* KPI Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-[#0c0c0c] border border-[#222222]">
                  <div className="flex items-center justify-between text-xs font-mono text-blue-400">
                    <span>Total Intake</span>
                    <Inbox className="w-4 h-4" />
                  </div>
                  <div className="text-2xl font-bold text-white mt-2">
                    {totalInquiries}
                  </div>
                  <div className="text-[11px] text-neutral-400 font-mono mt-0.5">
                    {newInquiries} requiring founder response
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#0c0c0c] border border-[#222222]">
                  <div className="flex items-center justify-between text-xs font-mono text-blue-400">
                    <span>Conversion Rate</span>
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div className="text-2xl font-bold text-white mt-2">
                    {conversionRate}%
                  </div>
                  <div className="text-[11px] text-neutral-400 font-mono mt-0.5">
                    RFP discovery to engagement
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#0c0c0c] border border-[#222222]">
                  <div className="flex items-center justify-between text-xs font-mono text-blue-400">
                    <span>Active Services</span>
                    <Layers className="w-4 h-4" />
                  </div>
                  <div className="text-2xl font-bold text-white mt-2">
                    {services.filter(s => s.active).length} / {services.length}
                  </div>
                  <div className="text-[11px] text-neutral-400 font-mono mt-0.5">
                    Published in client catalog
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#0c0c0c] border border-[#222222]">
                  <div className="flex items-center justify-between text-xs font-mono text-blue-400">
                    <span>Expansion Status</span>
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div className="text-base font-semibold text-white mt-2">
                    Online First
                  </div>
                  <div className="text-[11px] text-neutral-400 font-mono mt-0.5">
                    Physical Studio: 2026 Target
                  </div>
                </div>
              </div>

              {/* Pipeline Analytics */}
              <div className="p-5 rounded-xl bg-[#0c0c0c] border border-[#222222] space-y-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      RFP Pipeline & Monthly Demand Distribution
                    </h3>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      Client acquisition across global timezones
                    </p>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono text-neutral-400 bg-[#141414] border border-[#262626]">
                    2026 Trajectory
                  </span>
                </div>

                {/* Clean Bar Chart */}
                <div className="h-40 flex items-end justify-between gap-3 pt-4 border-b border-[#1c1c1c] pb-2">
                  {[
                    { month: 'Jun', count: 12, height: '40%' },
                    { month: 'Jul', count: 18, height: '55%' },
                    { month: 'Aug', count: 24, height: '70%' },
                    { month: 'Sep', count: 31, height: '85%' },
                    { month: 'Oct', count: 39, height: '92%' },
                    { month: 'Nov', count: 48, height: '100%' },
                  ].map((bar, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                      <span className="text-[10px] font-mono text-neutral-400">
                        {bar.count}
                      </span>
                      <div
                        style={{ height: bar.height }}
                        className="w-full max-w-[40px] rounded bg-blue-600 hover:bg-blue-500 transition-colors"
                      />
                      <span className="text-[11px] font-mono text-neutral-400">
                        {bar.month}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Service Breakdown */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-[#111111] border border-[#222222]">
                    <span className="text-neutral-500 block text-[10px] font-mono">Top Demand</span>
                    <div className="font-semibold text-white mt-0.5">Enterprise Cloud & SaaS (42%)</div>
                  </div>
                  <div className="p-3 rounded-lg bg-[#111111] border border-[#222222]">
                    <span className="text-neutral-500 block text-[10px] font-mono">Growth Sector</span>
                    <div className="font-semibold text-white mt-0.5">Autonomous AI & Agents (36%)</div>
                  </div>
                  <div className="p-3 rounded-lg bg-[#111111] border border-[#222222]">
                    <span className="text-neutral-500 block text-[10px] font-mono">Average Deal Size</span>
                    <div className="font-semibold text-emerald-400 mt-0.5">$38,500 / Retainer</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* TAB: SERVICES CATALOG MANAGEMENT                               */}
          {/* ============================================================== */}
          {activeTab === 'services' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Services Catalog Management
                  </h2>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Add, edit, or adjust services presented on the public agency website
                  </p>
                </div>
                <button
                  onClick={() => {
                    setIsCreatingService(true);
                    setServiceForm({
                      title: '',
                      tagline: '',
                      iconName: 'Code2',
                      badge: 'Core Pillar',
                      shortDescription: '',
                      fullDescription: '',
                      deliverables: ['Milestone Blueprint', 'Full-stack code', 'Automated tests'],
                      techStack: ['React', 'TypeScript', 'Node.js'],
                      startingPrice: 'From $5,000 / sprint',
                      active: true,
                    });
                  }}
                  className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs transition-colors flex items-center gap-1.5"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Service</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className="p-5 rounded-xl bg-[#0c0c0c] border border-[#222222] hover:border-neutral-700 transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#141414] border border-[#262626] text-neutral-300">
                          {service.badge}
                        </span>
                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => toggleServiceActive(service.id)}
                            className={`p-1.5 rounded-lg text-xs transition-colors ${
                              service.active ? 'text-emerald-400' : 'text-neutral-500'
                            }`}
                          >
                            {service.active ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                          </button>
                          <button
                            onClick={() => {
                              setEditingService(service);
                              setServiceForm(service);
                            }}
                            className="p-1.5 rounded-lg bg-[#141414] hover:bg-neutral-800 text-neutral-300"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => deleteService(service.id)}
                            className="p-1.5 rounded-lg text-neutral-500 hover:text-rose-400"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      <h3 className="text-base font-semibold text-white mb-1">
                        {service.title}
                      </h3>
                      <p className="text-xs text-neutral-400 mb-2">{service.tagline}</p>
                      <p className="text-xs text-neutral-300 line-clamp-2 mb-4 leading-relaxed">
                        {service.shortDescription}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#1c1c1c] flex items-center justify-between text-xs font-mono text-neutral-400">
                      <span>{service.startingPrice}</span>
                      <span className={service.active ? 'text-emerald-400' : 'text-neutral-500'}>
                        {service.active ? 'Active' : 'Hidden'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* TAB: CASE STUDIES & PORTFOLIO                                  */}
          {/* ============================================================== */}
          {activeTab === 'cases' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Case Studies & Portfolio
                  </h2>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Showcase client architectures, metrics, and technical blueprints
                  </p>
                </div>
                <button
                  onClick={() => {
                    setIsCreatingCase(true);
                    setCaseForm({
                      title: '',
                      client: '',
                      category: 'Cloud & SaaS',
                      summary: '',
                      challenge: '',
                      solution: '',
                      heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
                      tags: ['SaaS', 'High-Load'],
                      metrics: [
                        { label: 'Latency', value: '-85%' },
                        { label: 'Uptime', value: '99.99%' },
                        { label: 'Volume', value: '$10M+' }
                      ],
                      techStack: ['Next.js', 'PostgreSQL', 'AWS'],
                      active: true,
                    });
                  }}
                  className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs transition-colors flex items-center gap-1.5"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Publish Case Study</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {caseStudies.map((item) => (
                  <div
                    key={item.id}
                    className="p-5 rounded-xl bg-[#0c0c0c] border border-[#222222] hover:border-neutral-700 transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#141414] text-blue-400 border border-[#262626]">
                          {item.category}
                        </span>
                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => toggleCaseStudyActive(item.id)}
                            className={`p-1.5 rounded-lg text-xs transition-colors ${
                              item.active ? 'text-emerald-400' : 'text-neutral-500'
                            }`}
                          >
                            {item.active ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                          </button>
                          <button
                            onClick={() => {
                              setEditingCase(item);
                              setCaseForm(item);
                            }}
                            className="p-1.5 rounded-lg bg-[#141414] hover:bg-neutral-800 text-neutral-300"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => deleteCaseStudy(item.id)}
                            className="p-1.5 rounded-lg text-neutral-500 hover:text-rose-400"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      <h3 className="text-base font-semibold text-white mb-1">
                        {item.title}
                      </h3>
                      <div className="text-xs text-neutral-400 mb-2">
                        Client: <strong className="text-white">{item.client}</strong>
                      </div>
                      <p className="text-xs text-neutral-300 line-clamp-2 leading-relaxed mb-4">
                        {item.summary}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#1c1c1c] flex items-center justify-between text-xs font-mono text-neutral-400">
                      <span>{item.techStack.slice(0, 2).join(', ')}</span>
                      <span className={item.active ? 'text-emerald-400' : 'text-neutral-500'}>
                        {item.active ? 'Active' : 'Hidden'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* TAB: TESTIMONIALS                                              */}
          {/* ============================================================== */}
          {activeTab === 'testimonials' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Client Testimonials
                  </h2>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Manage client reviews and executive endorsements
                  </p>
                </div>
                <button
                  onClick={() => {
                    setIsCreatingTestimonial(true);
                    setTestimonialForm({
                      clientName: '',
                      role: 'Chief Technology Officer',
                      company: '',
                      location: 'USA',
                      rating: 5,
                      quote: '',
                      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
                      projectDelivered: 'Full-Stack Architecture',
                      active: true,
                    });
                  }}
                  className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs transition-colors flex items-center gap-1.5"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Testimonial</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {testimonials.map((test) => (
                  <div key={test.id} className="p-5 rounded-xl bg-[#0c0c0c] border border-[#222222] flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-amber-400 text-xs">
                          {'★'.repeat(test.rating)}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => {
                              setEditingTestimonial(test);
                              setTestimonialForm(test);
                            }}
                            className="p-1.5 rounded-lg bg-[#141414] hover:bg-neutral-800 text-neutral-300"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => deleteTestimonial(test.id)}
                            className="p-1.5 rounded-lg text-neutral-500 hover:text-rose-400"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                        "{test.quote}"
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#1c1c1c] flex items-center gap-3">
                      <img src={test.avatarUrl} alt={test.clientName} className="w-8 h-8 rounded-full object-cover border border-[#262626]" />
                      <div>
                        <div className="text-xs font-semibold text-white">{test.clientName}</div>
                        <div className="text-[11px] text-neutral-400">{test.role}, <span className="text-blue-400">{test.company}</span></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* TAB: SITE SETTINGS & ANNOUNCEMENT BANNER                       */}
          {/* ============================================================== */}
          {activeTab === 'settings' && (
            <div className="space-y-6 max-w-4xl">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Agency Settings & Live Adjustments
                </h2>
                <p className="text-xs text-neutral-400 mt-0.5">
                  Update announcement banner, operating model, phone, email, and statistics
                </p>
              </div>

              <form onSubmit={handleSaveSettings} className="space-y-5">
                
                {/* 1. Announcement Banner */}
                <div className="p-5 rounded-xl bg-[#0c0c0c] border border-[#222222] space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-semibold text-white">
                        Top Announcement Banner
                      </h3>
                      <p className="text-xs text-neutral-400 mt-0.5">
                        Displays across the top of all public client pages
                      </p>
                    </div>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settingsForm.announcement.enabled}
                        onChange={(e) =>
                          setSettingsForm({
                            ...settingsForm,
                            announcement: { ...settingsForm.announcement, enabled: e.target.checked },
                          })
                        }
                        className="rounded border-neutral-700 text-blue-600 focus:ring-0"
                      />
                      <span className="text-xs text-neutral-300">Banner Active</span>
                    </label>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1">
                        Pill Tag
                      </label>
                      <input
                        type="text"
                        value={settingsForm.announcement.tag}
                        onChange={(e) =>
                          setSettingsForm({
                            ...settingsForm,
                            announcement: { ...settingsForm.announcement, tag: e.target.value },
                          })
                        }
                        className="w-full px-3 py-2 rounded-lg bg-[#141414] border border-[#262626] text-xs text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1">
                        Button Action Text
                      </label>
                      <input
                        type="text"
                        value={settingsForm.announcement.actionText}
                        onChange={(e) =>
                          setSettingsForm({
                            ...settingsForm,
                            announcement: { ...settingsForm.announcement, actionText: e.target.value },
                          })
                        }
                        className="w-full px-3 py-2 rounded-lg bg-[#141414] border border-[#262626] text-xs text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">
                      Banner Announcement Message
                    </label>
                    <input
                      type="text"
                      value={settingsForm.announcement.text}
                      onChange={(e) =>
                        setSettingsForm({
                          ...settingsForm,
                          announcement: { ...settingsForm.announcement, text: e.target.value },
                        })
                      }
                      className="w-full px-3 py-2 rounded-lg bg-[#141414] border border-[#262626] text-xs text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                {/* 2. Operational Model */}
                <div className="p-5 rounded-xl bg-[#0c0c0c] border border-[#222222] space-y-4">
                  <h3 className="text-sm font-semibold text-white">
                    Startup Growth Model (Online to Onsite Expansion)
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1">
                        Current Phase Title
                      </label>
                      <input
                        type="text"
                        value={settingsForm.operationalModel.currentPhase}
                        onChange={(e) =>
                          setSettingsForm({
                            ...settingsForm,
                            operationalModel: { ...settingsForm.operationalModel, currentPhase: e.target.value },
                          })
                        }
                        className="w-full px-3 py-2 rounded-lg bg-[#141414] border border-[#262626] text-xs text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1">
                        Future Onsite Milestone
                      </label>
                      <input
                        type="text"
                        value={settingsForm.operationalModel.nextMilestone}
                        onChange={(e) =>
                          setSettingsForm({
                            ...settingsForm,
                            operationalModel: { ...settingsForm.operationalModel, nextMilestone: e.target.value },
                          })
                        }
                        className="w-full px-3 py-2 rounded-lg bg-[#141414] border border-[#262626] text-xs text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>

                {/* 3. Direct Contact Details */}
                <div className="p-5 rounded-xl bg-[#0c0c0c] border border-[#222222] space-y-4">
                  <h3 className="text-sm font-semibold text-white">
                    Official Contact Channels
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1">
                        Founders Email
                      </label>
                      <input
                        type="email"
                        value={settingsForm.contactInfo.email}
                        onChange={(e) =>
                          setSettingsForm({
                            ...settingsForm,
                            contactInfo: { ...settingsForm.contactInfo, email: e.target.value },
                          })
                        }
                        className="w-full px-3 py-2 rounded-lg bg-[#141414] border border-[#262626] text-xs text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="text"
                        value={settingsForm.contactInfo.phone}
                        onChange={(e) =>
                          setSettingsForm({
                            ...settingsForm,
                            contactInfo: { ...settingsForm.contactInfo, phone: e.target.value },
                          })
                        }
                        className="w-full px-3 py-2 rounded-lg bg-[#141414] border border-[#262626] text-xs text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Save button */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs transition-colors flex items-center gap-1.5"
                  >
                    <Save className="w-4 h-4" />
                    <span>Save Settings</span>
                  </button>
                </div>
              </form>
            </div>
          )}

        </main>
      </div>

      {/* ============================================================== */}
      {/* MODAL: EDIT / CREATE FOUNDER PROFILE                           */}
      {/* ============================================================== */}
      {(isCreatingFounder || editingFounder) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div onClick={() => { setIsCreatingFounder(false); setEditingFounder(null); }} className="fixed inset-0 bg-black/85 transition-opacity" />
          <div className="relative w-full max-w-2xl bg-[#0c0c0c] border border-[#262626] rounded-xl p-6 sm:p-7 z-10 space-y-5 max-h-[90vh] overflow-y-auto text-white">
            
            <div className="flex items-center justify-between border-b border-[#1f1f1f] pb-3">
              <div>
                <span className="text-[11px] font-mono text-neutral-400">
                  Founder Profile
                </span>
                <h3 className="text-lg font-bold text-white mt-0.5">
                  {isCreatingFounder ? 'Add New Co-Founder' : `Edit: ${editingFounder?.name}`}
                </h3>
              </div>
              <button
                onClick={() => { setIsCreatingFounder(false); setEditingFounder(null); }}
                className="text-neutral-400 hover:text-white p-1 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveFounder} className="space-y-4 text-xs">
              
              {/* Picture Upload / URL Preview Section */}
              <div className="p-4 rounded-lg bg-[#111111] border border-[#222222] space-y-3">
                <span className="block font-medium text-neutral-200 text-xs">
                  Founder Headshot Photo
                </span>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  {/* Photo Preview */}
                  <div className="w-20 h-20 rounded-xl overflow-hidden border border-[#262626] bg-black shrink-0">
                    {founderForm.avatarUrl ? (
                      <img
                        src={founderForm.avatarUrl}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-neutral-500">
                        <ImageIcon className="w-6 h-6" />
                      </div>
                    )}
                  </div>

                  <div className="flex-1 space-y-2 w-full">
                    <div>
                      <label className="block text-[11px] text-neutral-400 mb-1">
                        Image URL
                      </label>
                      <input
                        type="text"
                        value={founderForm.avatarUrl || ''}
                        onChange={(e) => setFounderForm({ ...founderForm, avatarUrl: e.target.value })}
                        placeholder="https://... image link"
                        className="w-full px-3 py-1.5 rounded-lg bg-[#141414] border border-[#262626] text-white font-mono text-xs focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141414] hover:bg-neutral-800 border border-[#262626] text-neutral-200 cursor-pointer transition-colors text-xs">
                        <Upload className="w-3.5 h-3.5 text-blue-400" />
                        <span>Upload From Computer</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                        />
                      </label>
                      <span className="text-[10px] text-neutral-500 ml-2">PNG, JPG, WebP</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Name & Role */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-medium text-neutral-300 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={founderForm.name || ''}
                    onChange={(e) => setFounderForm({ ...founderForm, name: e.target.value })}
                    placeholder="e.g. Ghulam"
                    className="w-full px-3 py-2 rounded-lg bg-[#141414] border border-[#262626] text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block font-medium text-neutral-300 mb-1">Official Role *</label>
                  <input
                    type="text"
                    required
                    value={founderForm.role || ''}
                    onChange={(e) => setFounderForm({ ...founderForm, role: e.target.value })}
                    placeholder="e.g. Co-Founder & CTO"
                    className="w-full px-3 py-2 rounded-lg bg-[#141414] border border-[#262626] text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Core Focus & Status */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-medium text-neutral-300 mb-1">Technical Focus</label>
                  <input
                    type="text"
                    value={founderForm.focus || ''}
                    onChange={(e) => setFounderForm({ ...founderForm, focus: e.target.value })}
                    placeholder="e.g. Distributed Systems & Cloud Architecture"
                    className="w-full px-3 py-2 rounded-lg bg-[#141414] border border-[#262626] text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block font-medium text-neutral-300 mb-1">Status Badge</label>
                  <input
                    type="text"
                    value={founderForm.onlineStatusBadge || ''}
                    onChange={(e) => setFounderForm({ ...founderForm, onlineStatusBadge: e.target.value })}
                    placeholder="e.g. Available for Architecture Reviews"
                    className="w-full px-3 py-2 rounded-lg bg-[#141414] border border-[#262626] text-neutral-300 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Public Bio */}
              <div>
                <label className="block font-medium text-neutral-300 mb-1">Professional Bio</label>
                <textarea
                  rows={3}
                  value={founderForm.bio || ''}
                  onChange={(e) => setFounderForm({ ...founderForm, bio: e.target.value })}
                  placeholder="Detailing their architectural background..."
                  className="w-full px-3 py-2 rounded-lg bg-[#141414] border border-[#262626] text-white focus:outline-none focus:border-blue-500 resize-none leading-relaxed"
                />
              </div>

              {/* Skills */}
              <div>
                <label className="block font-medium text-neutral-300 mb-1">
                  Skills (comma-separated)
                </label>
                <input
                  type="text"
                  value={expertiseString}
                  onChange={(e) => setExpertiseString(e.target.value)}
                  placeholder="Cloud Architecture, Next.js, Kubernetes"
                  className="w-full px-3 py-2 rounded-lg bg-[#141414] border border-[#262626] text-white focus:outline-none focus:border-blue-500 font-mono"
                />
              </div>

              {/* Social Links */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-neutral-400 mb-1">LinkedIn URL</label>
                  <input
                    type="text"
                    value={founderForm.socials?.linkedin || ''}
                    onChange={(e) =>
                      setFounderForm({
                        ...founderForm,
                        socials: { ...founderForm.socials, linkedin: e.target.value },
                      })
                    }
                    placeholder="https://linkedin.com/in/..."
                    className="w-full px-2.5 py-1.5 rounded-lg bg-[#141414] border border-[#262626] text-white text-xs"
                  />
                </div>

                <div>
                  <label className="block text-neutral-400 mb-1">GitHub URL</label>
                  <input
                    type="text"
                    value={founderForm.socials?.github || ''}
                    onChange={(e) =>
                      setFounderForm({
                        ...founderForm,
                        socials: { ...founderForm.socials, github: e.target.value },
                      })
                    }
                    placeholder="https://github.com/..."
                    className="w-full px-2.5 py-1.5 rounded-lg bg-[#141414] border border-[#262626] text-white text-xs"
                  />
                </div>

                <div>
                  <label className="block text-neutral-400 mb-1">Twitter / X URL</label>
                  <input
                    type="text"
                    value={founderForm.socials?.twitter || ''}
                    onChange={(e) =>
                      setFounderForm({
                        ...founderForm,
                        socials: { ...founderForm.socials, twitter: e.target.value },
                      })
                    }
                    placeholder="https://x.com/..."
                    className="w-full px-2.5 py-1.5 rounded-lg bg-[#141414] border border-[#262626] text-white text-xs"
                  />
                </div>
              </div>

              {/* Footer Save */}
              <div className="flex items-center justify-end gap-2 pt-3 border-t border-[#1f1f1f]">
                <button
                  type="button"
                  onClick={() => { setIsCreatingFounder(false); setEditingFounder(null); }}
                  className="px-3.5 py-1.5 rounded-lg bg-[#141414] text-neutral-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs flex items-center gap-1.5"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>Save Profile</span>
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* MODAL: INQUIRY DETAIL & REPLY DRAWER                            */}
      {/* ============================================================== */}
      {selectedInquiry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div onClick={() => setSelectedInquiry(null)} className="fixed inset-0 bg-black/85 transition-opacity" />
          <div className="relative w-full max-w-2xl bg-[#0c0c0c] border border-[#262626] rounded-xl overflow-hidden z-10 max-h-[90vh] flex flex-col text-white">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-[#1f1f1f] bg-[#121212]">
              <div>
                <span className="text-[10px] font-mono text-blue-400 font-medium">
                  Inquiry #{selectedInquiry.id}
                </span>
                <h3 className="text-base font-semibold text-white">
                  {selectedInquiry.clientName}
                </h3>
              </div>
              <button
                onClick={() => setSelectedInquiry(null)}
                className="p-1 rounded-lg text-neutral-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="overflow-y-auto p-5 sm:p-6 space-y-5">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="p-2.5 rounded-lg bg-[#111111] border border-[#222222]">
                  <span className="text-neutral-500 block text-[10px] font-mono">Status</span>
                  <select
                    value={selectedInquiry.status}
                    onChange={(e) => {
                      updateInquiryStatus(selectedInquiry.id, e.target.value as InquiryStatus);
                      setSelectedInquiry({ ...selectedInquiry, status: e.target.value as InquiryStatus });
                    }}
                    className="mt-1 bg-transparent text-blue-400 font-medium focus:outline-none"
                  >
                    <option value="new" className="bg-[#0c0c0c]">New</option>
                    <option value="reviewed" className="bg-[#0c0c0c]">Reviewed</option>
                    <option value="contacted" className="bg-[#0c0c0c]">Contacted</option>
                    <option value="proposal_sent" className="bg-[#0c0c0c]">Proposal Sent</option>
                    <option value="won" className="bg-[#0c0c0c]">Won / Closed</option>
                    <option value="closed" className="bg-[#0c0c0c]">Archived</option>
                  </select>
                </div>

                <div className="p-2.5 rounded-lg bg-[#111111] border border-[#222222]">
                  <span className="text-neutral-500 block text-[10px] font-mono">Budget</span>
                  <span className="font-mono text-emerald-400 font-medium">{selectedInquiry.budgetRange}</span>
                </div>

                <div className="p-2.5 rounded-lg bg-[#111111] border border-[#222222]">
                  <span className="text-neutral-500 block text-[10px] font-mono">Timeline</span>
                  <span className="font-mono text-white">{selectedInquiry.timeline}</span>
                </div>

                <div className="p-2.5 rounded-lg bg-[#111111] border border-[#222222]">
                  <span className="text-neutral-500 block text-[10px] font-mono">Source</span>
                  <span className="font-mono text-neutral-300">{selectedInquiry.source}</span>
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-[#111111] border border-[#222222] space-y-1 text-xs">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-blue-400" />
                  <a href={`mailto:${selectedInquiry.email}?subject=RE: BLUDS Agency Discovery`} className="text-blue-400 hover:underline font-mono">
                    {selectedInquiry.email}
                  </a>
                </div>
                {selectedInquiry.phone && (
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-blue-400" />
                    <span className="font-mono text-neutral-300">{selectedInquiry.phone}</span>
                  </div>
                )}
                {selectedInquiry.company && (
                  <div className="text-neutral-400">
                    Company: <strong className="text-white">{selectedInquiry.company}</strong>
                  </div>
                )}
              </div>

              <div>
                <h4 className="text-xs font-mono font-medium text-neutral-400 mb-1.5">
                  Client Project Scope & Vision
                </h4>
                <div className="p-3.5 rounded-lg bg-[#111111] border border-[#222222] text-xs text-neutral-200 leading-relaxed whitespace-pre-wrap">
                  {selectedInquiry.message}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono font-medium text-blue-400 mb-1.5">
                  Internal Collaboration Notes ({selectedInquiry.notes.length})
                </h4>
                <div className="space-y-2 mb-2.5">
                  {selectedInquiry.notes.map((note) => (
                    <div key={note.id} className="p-2.5 rounded-lg bg-[#111111] border border-[#222222] text-xs">
                      <div className="flex items-center justify-between text-[10px] text-neutral-400 font-mono mb-1">
                        <span className="font-medium text-blue-400">{note.author}</span>
                        <span>{new Date(note.createdAt).toLocaleDateString()}</span>
                      </div>
                      <p className="text-neutral-200">{note.content}</p>
                    </div>
                  ))}
                </div>

                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Log internal note..."
                    value={newNoteText}
                    onChange={(e) => setNewNoteText(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleAddNote()}
                    className="flex-1 px-3 py-1.5 rounded-lg bg-[#141414] border border-[#262626] text-xs text-white focus:outline-none focus:border-blue-500"
                  />
                  <button
                    onClick={handleAddNote}
                    className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-[#1f1f1f] bg-[#121212] flex items-center justify-between">
              <button
                onClick={() => {
                  deleteInquiry(selectedInquiry.id);
                  setSelectedInquiry(null);
                }}
                className="text-xs text-rose-400 hover:text-rose-300 flex items-center gap-1"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Delete Lead</span>
              </button>

              <a
                href={`mailto:${selectedInquiry.email}?subject=BLUDS Agency Discovery: Project Proposal for ${encodeURIComponent(selectedInquiry.clientName)}`}
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Reply to Client</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* MODAL: MANUAL INQUIRY CREATION                                 */}
      {/* ============================================================== */}
      {manualInquiryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div onClick={() => setManualInquiryModal(false)} className="fixed inset-0 bg-black/85 transition-opacity" />
          <div className="relative w-full max-w-lg bg-[#0c0c0c] border border-[#262626] rounded-xl p-6 z-10 space-y-4 text-white">
            <div className="flex items-center justify-between border-b border-[#1f1f1f] pb-3">
              <h3 className="text-base font-semibold text-white">Log Manual Client Lead</h3>
              <button onClick={() => setManualInquiryModal(false)} className="text-neutral-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleManualInquirySubmit} className="space-y-3.5 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-neutral-400 mb-1">Client Name *</label>
                  <input
                    type="text"
                    required
                    value={manualName}
                    onChange={(e) => setManualName(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg bg-[#141414] border border-[#262626] text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-neutral-400 mb-1">Email *</label>
                  <input
                    type="email"
                    required
                    value={manualEmail}
                    onChange={(e) => setManualEmail(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg bg-[#141414] border border-[#262626] text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-neutral-400 mb-1">Company</label>
                  <input
                    type="text"
                    value={manualCompany}
                    onChange={(e) => setManualCompany(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg bg-[#141414] border border-[#262626] text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-neutral-400 mb-1">Phone</label>
                  <input
                    type="text"
                    value={manualPhone}
                    onChange={(e) => setManualPhone(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg bg-[#141414] border border-[#262626] text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-neutral-400 mb-1">Service</label>
                <select
                  value={manualService}
                  onChange={(e) => setManualService(e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg bg-[#141414] border border-[#262626] text-white focus:outline-none focus:border-blue-500"
                >
                  {services.map((s) => (
                    <option key={s.id} value={s.title}>{s.title}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-neutral-400 mb-1">Project Message</label>
                <textarea
                  rows={3}
                  value={manualMessage}
                  onChange={(e) => setManualMessage(e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg bg-[#141414] border border-[#262626] text-white resize-none focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setManualInquiryModal(false)}
                  className="px-3 py-1.5 rounded-lg bg-[#141414] text-xs text-neutral-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs"
                >
                  Save Lead
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* MODAL: EDIT / CREATE SERVICE                                   */}
      {/* ============================================================== */}
      {(isCreatingService || editingService) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div onClick={() => { setIsCreatingService(false); setEditingService(null); }} className="fixed inset-0 bg-black/85 transition-opacity" />
          <div className="relative w-full max-w-xl bg-[#0c0c0c] border border-[#262626] rounded-xl p-6 z-10 space-y-4 max-h-[90vh] overflow-y-auto text-white">
            <div className="flex items-center justify-between border-b border-[#1f1f1f] pb-3">
              <h3 className="text-base font-semibold text-white">
                {isCreatingService ? 'Add New Service to Catalog' : `Edit: ${editingService?.title}`}
              </h3>
              <button onClick={() => { setIsCreatingService(false); setEditingService(null); }} className="text-neutral-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveService} className="space-y-3.5 text-xs">
              <div>
                <label className="block text-neutral-400 mb-1">Service Title *</label>
                <input
                  type="text"
                  required
                  value={serviceForm.title || ''}
                  onChange={(e) => setServiceForm({ ...serviceForm, title: e.target.value })}
                  className="w-full px-3 py-1.5 rounded-lg bg-[#141414] border border-[#262626] text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-neutral-400 mb-1">Tagline</label>
                <input
                  type="text"
                  value={serviceForm.tagline || ''}
                  onChange={(e) => setServiceForm({ ...serviceForm, tagline: e.target.value })}
                  className="w-full px-3 py-1.5 rounded-lg bg-[#141414] border border-[#262626] text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-neutral-400 mb-1">Badge Tag</label>
                  <input
                    type="text"
                    value={serviceForm.badge || ''}
                    onChange={(e) => setServiceForm({ ...serviceForm, badge: e.target.value })}
                    className="w-full px-3 py-1.5 rounded-lg bg-[#141414] border border-[#262626] text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-neutral-400 mb-1">Starting Price Hint</label>
                  <input
                    type="text"
                    value={serviceForm.startingPrice || ''}
                    onChange={(e) => setServiceForm({ ...serviceForm, startingPrice: e.target.value })}
                    className="w-full px-3 py-1.5 rounded-lg bg-[#141414] border border-[#262626] text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-neutral-400 mb-1">Short Description *</label>
                <textarea
                  rows={3}
                  required
                  value={serviceForm.shortDescription || ''}
                  onChange={(e) => setServiceForm({ ...serviceForm, shortDescription: e.target.value })}
                  className="w-full px-3 py-1.5 rounded-lg bg-[#141414] border border-[#262626] text-white resize-none focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => { setIsCreatingService(false); setEditingService(null); }}
                  className="px-3 py-1.5 rounded-lg bg-[#141414] text-neutral-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium"
                >
                  Save Service
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* MODAL: EDIT / CREATE CASE STUDY                                */}
      {/* ============================================================== */}
      {(isCreatingCase || editingCase) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div onClick={() => { setIsCreatingCase(false); setEditingCase(null); }} className="fixed inset-0 bg-black/85 transition-opacity" />
          <div className="relative w-full max-w-xl bg-[#0c0c0c] border border-[#262626] rounded-xl p-6 z-10 space-y-4 max-h-[90vh] overflow-y-auto text-white">
            <div className="flex items-center justify-between border-b border-[#1f1f1f] pb-3">
              <h3 className="text-base font-semibold text-white">
                {isCreatingCase ? 'Publish New Case Study' : `Edit: ${editingCase?.title}`}
              </h3>
              <button onClick={() => { setIsCreatingCase(false); setEditingCase(null); }} className="text-neutral-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveCaseStudy} className="space-y-3.5 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-neutral-400 mb-1">Project Title *</label>
                  <input
                    type="text"
                    required
                    value={caseForm.title || ''}
                    onChange={(e) => setCaseForm({ ...caseForm, title: e.target.value })}
                    className="w-full px-3 py-1.5 rounded-lg bg-[#141414] border border-[#262626] text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-neutral-400 mb-1">Client Name *</label>
                  <input
                    type="text"
                    required
                    value={caseForm.client || ''}
                    onChange={(e) => setCaseForm({ ...caseForm, client: e.target.value })}
                    className="w-full px-3 py-1.5 rounded-lg bg-[#141414] border border-[#262626] text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-neutral-400 mb-1">Hero Image URL</label>
                <input
                  type="text"
                  value={caseForm.heroImage || ''}
                  onChange={(e) => setCaseForm({ ...caseForm, heroImage: e.target.value })}
                  className="w-full px-3 py-1.5 rounded-lg bg-[#141414] border border-[#262626] text-white font-mono focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-neutral-400 mb-1">Summary</label>
                <textarea
                  rows={2}
                  value={caseForm.summary || ''}
                  onChange={(e) => setCaseForm({ ...caseForm, summary: e.target.value })}
                  className="w-full px-3 py-1.5 rounded-lg bg-[#141414] border border-[#262626] text-white resize-none focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => { setIsCreatingCase(false); setEditingCase(null); }}
                  className="px-3 py-1.5 rounded-lg bg-[#141414] text-neutral-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium"
                >
                  Save Case Study
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
