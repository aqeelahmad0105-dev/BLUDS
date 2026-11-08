import React, { useState } from 'react';
import { useAgency } from '../../context/AgencyContext';
import {
  ArrowRight,
  Shield,
  Server,
  Cpu,
  Smartphone,
  Layers,
  CheckCircle2,
  Lock,
  ArrowUpRight
} from 'lucide-react';
import { HeroScene3D } from './HeroScene3D';

export const HeroSection: React.FC = () => {
  const { siteSettings } = useAgency();
  const [activeArchitecture, setActiveArchitecture] = useState<'cloud' | 'ai' | 'mobile' | 'enterprise'>('cloud');

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const architectureConfigs = {
    cloud: {
      title: 'High-Concurrency Cloud Architecture',
      spec: 'Multi-Region Kubernetes • Sub-40ms P99 Latency',
      metrics: [
        { label: 'Throughput', value: '450k req/min' },
        { label: 'Global Latency', value: '38ms P99' },
        { label: 'Uptime SLA', value: '99.998%' },
        { label: 'Failover', value: 'Sub-second' },
      ],
      nodes: [
        { name: 'Cloudflare Edge', role: 'DDoS Defense & Global Caching', status: 'Online' },
        { name: 'Next.js 14 App Cluster', role: 'Edge-Rendered SSR Hydration', status: 'Optimal' },
        { name: 'Go Microservices', role: 'Stateful Concurrency Logic', status: 'Healthy' },
        { name: 'PostgreSQL & pgvector', role: 'ACID Storage & Vector Embeddings', status: 'Synced' },
      ],
    },
    ai: {
      title: 'Enterprise AI & Autonomous LLM Systems',
      spec: 'Private Vector Pipeline • Zero Data Retention Safeguards',
      metrics: [
        { label: 'Inference Latency', value: '< 240ms' },
        { label: 'Extraction Accuracy', value: '99.7%' },
        { label: 'Vector Similarity', value: 'Cosine 0.94' },
        { label: 'Compliance', value: 'SOC2 / HIPAA' },
      ],
      nodes: [
        { name: 'Multimodal Ingestion', role: 'PDFs, OCR & Real-time Streams', status: 'Online' },
        { name: 'Semantic Routing Agent', role: 'Intent & Task Dispatch', status: 'Active' },
        { name: 'Vector Knowledge Store', role: 'Pinecone / pgvector Clustered', status: 'Synced' },
        { name: 'Autonomous Action Engine', role: 'ERP & Database Mutation', status: 'Guarded' },
      ],
    },
    mobile: {
      title: 'Cross-Platform Mobile Engineering',
      spec: 'Flutter & React Native • 120 FPS Native Hardware Performance',
      metrics: [
        { label: 'Frame Rendering', value: '120 FPS' },
        { label: 'App Store Rating', value: '4.9 ★' },
        { label: 'Offline Sync', value: 'Sub-second SQLite' },
        { label: 'Crash-Free Rate', value: '99.94%' },
      ],
      nodes: [
        { name: 'Native iOS & Android Builds', role: 'Single-Codebase Efficiency', status: 'Compiled' },
        { name: 'Biometric Enclave', role: 'FaceID & Biometric Tokens', status: 'Secured' },
        { name: 'Offline Storage Sync', role: 'Conflict-Free SQLite Engine', status: 'Active' },
        { name: 'Stripe & Mobile Pay', role: 'Native In-App Checkout', status: 'Verified' },
      ],
    },
    enterprise: {
      title: 'Enterprise Legacy Modernization',
      spec: 'Monolith to Distributed Microservices Architecture',
      metrics: [
        { label: 'Cloud Efficiency', value: '-48% Infra Spend' },
        { label: 'Deployment Frequency', value: 'Daily via CI/CD' },
        { label: 'Test Coverage', value: '94% Automated' },
        { label: 'Code Handover', value: '100% Client IP' },
      ],
      nodes: [
        { name: 'API Gateway Router', role: 'Strangler Fig Migration Pattern', status: 'Routing' },
        { name: 'Kafka Event Backbone', role: 'Zero-Loss Message Queues', status: 'Durable' },
        { name: 'Automated CI/CD Actions', role: 'Blue-Green Staging Deploys', status: 'Passing' },
        { name: 'Founder Technical Sprints', role: 'Direct Architectural Oversight', status: 'Active' },
      ],
    },
  };

  const currentArch = architectureConfigs[activeArchitecture];

  return (
    <section id="top" className="pt-16 pb-20 md:pt-24 md:pb-28 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content */}
        <div className="max-w-3xl mx-auto text-center space-y-6">
          
          {/* Subtle Status Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111111] border border-[#262626] text-xs text-neutral-300">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span>Founded by 3 Engineers • Global Online Delivery</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            High-Performance Software Engineering for{' '}
            <span className="text-blue-500">
              Modern Enterprises
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-neutral-400 font-normal leading-relaxed">
            BLUDS is a software house founded by three technical partners. We build scalable cloud platforms, bespoke AI automation, and high-concurrency systems with direct senior engineering oversight on every sprint.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => scrollTo('#contact')}
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-colors flex items-center justify-center gap-2"
            >
              <span>Schedule Architecture Discovery</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => scrollTo('#estimator')}
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#111111] hover:bg-[#1a1a1a] text-neutral-200 border border-[#262626] hover:border-neutral-700 font-medium text-sm transition-colors flex items-center justify-center gap-2"
            >
              <span>Project Cost Estimator</span>
            </button>
          </div>

          {/* Value Props */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400 font-mono">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
              <span>Direct Founder Supervision</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
              <span>Bi-Weekly Agile Sprints</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-blue-500" />
              <span>100% Client IP Ownership</span>
            </div>
          </div>
        </div>

        {/* Clean, Functional Architecture Visualizer (No code snippets, no bloated neon) */}
        <div className="mt-14 max-w-5xl mx-auto">
          <div className="rounded-xl bg-[#0c0c0c] border border-[#222222] overflow-hidden">
            
            {/* Header with Switcher Tabs */}
            <div className="bg-[#121212] px-4 py-3 border-b border-[#222222] flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs font-medium text-neutral-300">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Production Architecture Topology</span>
              </div>

              {/* Category Selectors */}
              <div className="flex items-center gap-1 overflow-x-auto pb-1 md:pb-0">
                {[
                  { id: 'cloud', label: 'Cloud Architecture', icon: Server },
                  { id: 'ai', label: 'AI & LLMs', icon: Cpu },
                  { id: 'mobile', label: 'Mobile Apps', icon: Smartphone },
                  { id: 'enterprise', label: 'Enterprise Systems', icon: Layers },
                ].map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeArchitecture === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveArchitecture(tab.id as any)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs transition-colors whitespace-nowrap font-medium ${
                        isActive
                          ? 'bg-blue-600 text-white'
                          : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Architecture Interior */}
            <div className="p-6 sm:p-8 space-y-6">
              
              {/* Title & Specs */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#1f1f1f]">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                    {currentArch.title}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    {currentArch.spec}
                  </p>
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-2.5 py-1 rounded self-start sm:self-auto">
                  SLA Verified 99.99%
                </span>
              </div>

              {/* Main 3D Model + Topology Pipeline Split */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Interactive 3D WebGL Model Showcase */}
                <div className="lg:col-span-5 h-[320px] sm:h-[380px] rounded-xl bg-[#080808] border border-[#222222] overflow-hidden relative">
                  <HeroScene3D activeMode={activeArchitecture} />
                </div>

                {/* Topology Nodes Pipeline & Metrics */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentArch.nodes.map((node, index) => (
                      <div
                        key={index}
                        className="p-3.5 rounded-lg bg-[#111111] border border-[#222222] flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-1.5 text-xs">
                            <span className="text-neutral-500 font-mono">0{index + 1}</span>
                            <span className="text-emerald-400 text-[11px] font-mono">{node.status}</span>
                          </div>
                          <div className="text-sm font-semibold text-white">
                            {node.name}
                          </div>
                          <div className="text-xs text-neutral-400 mt-0.5">
                            {node.role}
                          </div>
                        </div>

                        <div className="mt-3 pt-2.5 border-t border-[#1f1f1f] flex items-center justify-between text-[11px] font-mono text-neutral-500">
                          <span>Encrypted Pipeline</span>
                          <Lock className="w-3 h-3 text-neutral-400" />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Performance Metrics Bar */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                    {currentArch.metrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-lg bg-[#111111] border border-[#222222] text-center"
                      >
                        <div className="text-base sm:text-lg font-bold text-white">
                          {metric.value}
                        </div>
                        <div className="text-[11px] text-neutral-400 mt-0.5 font-mono">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Bar */}
            <div className="px-6 py-3 bg-[#111111] border-t border-[#1f1f1f] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-neutral-400">
              <span>Operating Model: {siteSettings.operationalModel.currentPhase}</span>
              <button
                onClick={() => scrollTo('#contact')}
                className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1 transition-colors"
              >
                <span>Request Custom Technical Blueprint</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
