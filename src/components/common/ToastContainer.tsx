import React from 'react';
import { useAgency } from '../../context/AgencyContext';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useAgency();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2.5 max-w-sm w-full px-4 pointer-events-none">
      {toasts.map((toast) => {
        let icon = <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />;
        let borderClass = 'border-emerald-600/40';
        if (toast.type === 'error') {
          icon = <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />;
          borderClass = 'border-rose-600/40';
        } else if (toast.type === 'info') {
          icon = <Info className="w-4 h-4 text-blue-400 shrink-0" />;
          borderClass = 'border-blue-600/40';
        }

        return (
          <div
            key={toast.id}
            className={`pointer-events-auto flex items-start gap-2.5 p-3.5 rounded-lg bg-[#111111] border ${borderClass} text-white`}
          >
            {icon}
            <div className="flex-1">
              <h4 className="text-xs font-semibold text-white">{toast.title}</h4>
              <p className="text-[11px] text-neutral-300 mt-0.5 leading-relaxed">{toast.message}</p>
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-neutral-400 hover:text-white p-0.5"
              aria-label="Dismiss notification"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        );
      })}
    </div>
  );
};
