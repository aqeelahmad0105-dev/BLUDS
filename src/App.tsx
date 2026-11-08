import React, { useEffect } from 'react';
import { AgencyProvider, useAgency } from './context/AgencyContext';
import { ClientLandingPage } from './components/client/ClientLandingPage';
import { AdminLogin } from './components/admin/AdminLogin';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { ToastContainer } from './components/common/ToastContainer';
import { ErrorBoundary } from './components/common/ErrorBoundary';

const AppContent: React.FC = () => {
  const { currentRoute, isAuthenticated, navigate } = useAgency();

  // Keyboard shortcut: Ctrl + Shift + A to quickly enter secret Admin portal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
        e.preventDefault();
        if (currentRoute.startsWith('/admin')) {
          navigate('/');
        } else {
          navigate('/admin');
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentRoute, navigate]);

  // Route Handling
  if (currentRoute.startsWith('/admin')) {
    if (!isAuthenticated) {
      return (
        <div className="min-h-screen bg-black text-white antialiased">
          <AdminLogin />
          <ToastContainer />
        </div>
      );
    }
    return (
      <div className="min-h-screen bg-black text-white antialiased">
        <AdminDashboard />
        <ToastContainer />
      </div>
    );
  }

  // Public Landing Page
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <ClientLandingPage />
      <ToastContainer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <AgencyProvider>
        <AppContent />
      </AgencyProvider>
    </ErrorBoundary>
  );
};

export default App;
