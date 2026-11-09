import React, { useState } from 'react';
import { useAgency } from '../../context/AgencyContext';
import { Lock, Mail, Key, ShieldCheck, ArrowRight, ArrowLeft } from 'lucide-react';
import { Logo } from '../common/Logo';

export const AdminLogin: React.FC = () => {
  const { loginAdmin, navigate, isAuthenticated } = useAgency();

  const [email, setEmail] = useState('admin@bludsagency.com');
  const [password, setPassword] = useState('bluds2026');
  const [errorMsg, setErrorMsg] = useState('');

  React.useEffect(() => {
    if (isAuthenticated) {
      navigate('/admin');
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    const success = loginAdmin(email, password);
    if (success) {
      navigate('/admin');
    } else {
      setErrorMsg('Invalid administrator credentials. Please check your email and password.');
    }
  };

  const fillQuickDemo = () => {
    setEmail('admin@bludsagency.com');
    setPassword('bluds2026');
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        
        {/* Back to Site Button */}
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors mb-6"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-blue-400" />
          <span>Return to BLUDS Public Site</span>
        </button>

        {/* Card */}
        <div className="p-8 rounded-xl bg-[#0c0c0c] border border-[#222222] space-y-6">
          
          {/* Header */}
          <div className="text-center space-y-3">
            <div className="flex justify-center">
              <Logo size="lg" />
            </div>
            <div>
              <span className="text-[11px] font-mono text-neutral-400">
                Founder Authentication
              </span>
              <h2 className="text-xl font-bold tracking-tight text-white mt-1">
                BLUDS Portal Login
              </h2>
              <p className="text-xs text-neutral-400 mt-0.5">
                Executive & Lead Engineer Access
              </p>
            </div>
          </div>

          {errorMsg && (
            <div className="p-3 rounded-lg bg-rose-950/40 border border-rose-800 text-rose-300 text-xs font-mono">
              {errorMsg}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                Admin Email ID
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@bludsagency.com"
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-[#141414] border border-[#262626] text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 font-mono transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                Master Security Key
              </label>
              <div className="relative">
                <Key className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-[#141414] border border-[#262626] text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 font-mono transition-colors"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs transition-colors flex items-center justify-center gap-2 mt-2"
            >
              <span>Authenticate & Enter</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>

          {/* Demo Pre-fill Pill */}
          <div className="p-3 rounded-lg bg-[#111111] border border-[#222222] text-center space-y-1.5">
            <div className="text-[11px] font-mono text-neutral-400">
              Evaluation Credentials
            </div>
            <div className="text-[10px] font-mono text-neutral-300">
              Email: <span className="text-blue-400 font-medium">admin@bludsagency.com</span> | Pass: <span className="text-blue-400 font-medium">bluds2026</span>
            </div>
            <button
              type="button"
              onClick={fillQuickDemo}
              className="text-[10px] font-mono text-blue-400 hover:underline"
            >
              Click to Auto-fill Demo Credentials
            </button>
          </div>

          <div className="pt-1 flex items-center justify-center gap-2 text-[10px] font-mono text-neutral-500">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
            <span>Encrypted Founder Session</span>
          </div>

        </div>

      </div>
    </div>
  );
};
