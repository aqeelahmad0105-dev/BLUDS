import React, { useState } from 'react';
import { 
  Code2, 
  Terminal, 
  Cpu, 
  Smartphone, 
  Cloud, 
  Database, 
  CheckCircle2, 
  ShieldCheck
} from 'lucide-react';

interface TechItem {
  name: string;
  role: string;
  benchmark: string;
  description: string;
  leadFounder: string;
}

export const TechMatrixSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('frontend');

  const categories = [
    { id: 'frontend', label: 'Frontend & Web', icon: Code2 },
    { id: 'backend', label: 'Backend & APIs', icon: Terminal },
    { id: 'ai', label: 'AI & LLMs', icon: Cpu },
    { id: 'mobile', label: 'Mobile Apps', icon: Smartphone },
    { id: 'cloud', label: 'Cloud & DevOps', icon: Cloud },
    { id: 'data', label: 'Data & Streaming', icon: Database },
  ];

  const stacksData: Record<string, TechItem[]> = {
    frontend: [
      {
        name: 'Next.js 14 & React 19',
        role: 'Server Components & Edge SSR',
        benchmark: '< 0.4s First Contentful Paint',
        description: 'Server-rendered web applications with instant client hydration and automated asset optimization.',
        leadFounder: 'Ghulam (CTO)',
      },
      {
        name: 'TypeScript Strict',
        role: 'Enterprise Type Safety',
        benchmark: '100% Compile-Time Verification',
        description: 'End-to-end typed codebases from database schemas up to React component props, preventing runtime errors.',
        leadFounder: 'Ghulam (CTO)',
      },
      {
        name: 'Tailwind CSS',
        role: 'Design System & Component Library',
        benchmark: 'Zero Unused CSS Payload',
        description: 'Modular design systems with accessible components, crisp dark mode, and responsive layouts.',
        leadFounder: 'Daniyal (Head of AI & Experience)',
      },
      {
        name: 'Three.js & WebGL',
        role: 'Interactive 3D Visualizations',
        benchmark: 'Smooth 60 FPS Rendering',
        description: 'Custom 3D product visualizers and interactive topology models engineered for low memory consumption.',
        leadFounder: 'Daniyal (Head of AI & Experience)',
      },
    ],
    backend: [
      {
        name: 'Node.js & Go Microservices',
        role: 'High-Concurrency Business Logic',
        benchmark: '< 45ms P99 API Response',
        description: 'Stateless microservices handling high concurrent loads with minimal resource consumption.',
        leadFounder: 'Ghulam (CTO)',
      },
      {
        name: 'GraphQL & RESTful APIs',
        role: 'Structured API Contracts',
        benchmark: 'Zero Over-Fetching',
        description: 'Modular schemas, query caching, and OpenAPI/Swagger documentation for team integration.',
        leadFounder: 'Hamza (CPO)',
      },
      {
        name: 'WebSockets & WebRTC',
        role: 'Real-Time Bi-Directional Streaming',
        benchmark: '< 80ms Latency',
        description: 'Real-time collaborative tools, financial tickers, and encrypted peer-to-peer data streams.',
        leadFounder: 'Ghulam (CTO)',
      },
      {
        name: 'Python FastAPI',
        role: 'AI Ingestion & Processing',
        benchmark: 'Async Non-Blocking',
        description: 'Asynchronous APIs designed to process machine learning workloads and document parsing.',
        leadFounder: 'Daniyal (Head of AI & Experience)',
      },
    ],
    ai: [
      {
        name: 'OpenAI, Claude & Gemini',
        role: 'Multimodal LLM Integration',
        benchmark: 'Structured JSON Outputs',
        description: 'Custom prompt pipelines capable of multi-step business reasoning with strict schema enforcement.',
        leadFounder: 'Daniyal (Head of AI & Experience)',
      },
      {
        name: 'LangChain & Autonomous Agents',
        role: 'Multi-Agent Execution Networks',
        benchmark: 'Self-Correcting Execution',
        description: 'Autonomous workflows where specialized worker agents collaborate, review outputs, and handle edge cases.',
        leadFounder: 'Daniyal (Head of AI & Experience)',
      },
      {
        name: 'Pinecone & pgvector',
        role: 'Vector Embeddings & Semantic Search',
        benchmark: '< 30ms Vector Matching',
        description: 'Private enterprise knowledge retrieval with hybrid keyword + semantic search over document stores.',
        leadFounder: 'Daniyal (Head of AI & Experience)',
      },
      {
        name: 'Self-Hosted Local LLMs',
        role: 'Air-Gapped Private Infrastructure',
        benchmark: 'Zero External Data Leakage',
        description: 'Open-weights models deployed directly inside client VPCs for high-security compliance requirements.',
        leadFounder: 'Ghulam (CTO)',
      },
    ],
    mobile: [
      {
        name: 'Flutter (iOS & Android)',
        role: 'Single-Codebase Native Apps',
        benchmark: '120 FPS Native Compilation',
        description: 'Cross-platform mobile applications with native compilation to ARM binary on iOS and Android.',
        leadFounder: 'Hamza (CPO)',
      },
      {
        name: 'React Native & Expo',
        role: 'Universal TypeScript Applications',
        benchmark: 'Shared Web & Mobile Logic',
        description: 'Fast product development sharing business logic between mobile apps and web portals.',
        leadFounder: 'Ghulam (CTO)',
      },
      {
        name: 'Offline-First SQLite Sync',
        role: 'Zero-Network Operational Readiness',
        benchmark: 'Instant Local Writes',
        description: 'Background conflict resolution allowing users to work seamlessly in low-connectivity environments.',
        leadFounder: 'Hamza (CPO)',
      },
      {
        name: 'In-App Billing & Stripe',
        role: 'Subscription Management',
        benchmark: 'Apple Pay & Google Pay Native',
        description: 'Localized pricing, receipt verification, and fraud prevention for mobile commerce.',
        leadFounder: 'Hamza (CPO)',
      },
    ],
    cloud: [
      {
        name: 'AWS & Google Cloud',
        role: 'Auto-Scaling Infrastructure',
        benchmark: '99.99% Global Uptime SLA',
        description: 'Multi-zone serverless architectures, container clusters, and global CDN edge routing.',
        leadFounder: 'Ghulam (CTO)',
      },
      {
        name: 'Terraform & IaC',
        role: 'Declarative Cloud Management',
        benchmark: 'Deterministic Staging Clones',
        description: '100% of cloud resources defined in code repositories with automated drift detection.',
        leadFounder: 'Ghulam (CTO)',
      },
      {
        name: 'Docker & Kubernetes',
        role: 'Container Orchestration',
        benchmark: 'Self-Healing Pods',
        description: 'Automated horizontal scaling, rolling updates, and blue-green deployments with zero downtime.',
        leadFounder: 'Ghulam (CTO)',
      },
      {
        name: 'SOC2 & HIPAA Hardening',
        role: 'Security & Compliance Controls',
        benchmark: 'AES-256 Encryption Standard',
        description: 'Role-based access control, automated audit logging, penetration defense, and data protection.',
        leadFounder: 'Hamza (CPO)',
      },
    ],
    data: [
      {
        name: 'PostgreSQL & Supabase',
        role: 'Relational ACID Data Store',
        benchmark: '100k+ Transactions / Minute',
        description: 'Row-level security, connection pooling with PgBouncer, and automated continuous replication.',
        leadFounder: 'Ghulam (CTO)',
      },
      {
        name: 'Redis In-Memory Store',
        role: 'Sub-Millisecond Key-Value Cache',
        benchmark: '< 2ms Read / Write Latency',
        description: 'Session management, API rate limiting, real-time queues, and pub/sub message brokers.',
        leadFounder: 'Ghulam (CTO)',
      },
      {
        name: 'Apache Kafka & RabbitMQ',
        role: 'Event-Driven Message Streaming',
        benchmark: 'Zero-Message-Loss Durability',
        description: 'Decoupled event pipelines for transaction logging, audit trails, and multi-tenant webhook queues.',
        leadFounder: 'Ghulam (CTO)',
      },
      {
        name: 'ClickHouse & Time-Series Analytics',
        role: 'Real-Time Columnar Engine',
        benchmark: 'Sub-Second Analytical Queries',
        description: 'Columnar storage engines powering real-time client analytics, attribution, and telemetry.',
        leadFounder: 'Ghulam (CTO)',
      },
    ],
  };

  const currentItems = stacksData[activeTab] || stacksData.frontend;

  return (
    <section id="technology" className="py-20 bg-black text-white border-t border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-medium text-blue-500 uppercase tracking-wider block mb-2">
              Technology Stack
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Architectural Standards & Benchmarks
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-3">
              We select battle-tested, modern technologies engineered for maximum throughput, low latencies, and rapid sprint delivery.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-neutral-300 bg-[#0c0c0c] border border-[#222222] px-3.5 py-2 rounded-lg self-start md:self-auto">
            <ShieldCheck className="w-4 h-4 text-blue-500" />
            <span>Zero Vendor Lock-In • 100% IP Handover</span>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-8">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-colors border ${
                  isActive
                    ? 'bg-blue-600 text-white border-blue-500'
                    : 'bg-[#0c0c0c] text-neutral-400 border-[#222222] hover:text-white hover:border-neutral-700'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentItems.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-[#0c0c0c] border border-[#222222] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <h3 className="text-base font-semibold text-white">
                      {item.name}
                    </h3>
                    <div className="text-xs text-neutral-400 mt-0.5">
                      {item.role}
                    </div>
                  </div>

                  <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-[#141414] text-neutral-300 border border-[#262626] shrink-0">
                    {item.benchmark}
                  </span>
                </div>

                <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#1c1c1c] flex items-center justify-between text-xs font-mono text-neutral-500">
                <span>Lead: <strong className="text-neutral-300">{item.leadFounder}</strong></span>
                <span className="text-blue-400 flex items-center gap-1">
                  <span>Verified</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
