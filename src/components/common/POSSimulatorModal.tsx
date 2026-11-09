import React, { useState } from 'react';
import { 
  Barcode, 
  Printer, 
  Trash2, 
  CheckCircle2, 
  Plus, 
  X, 
  Store, 
  MessageSquare,
  Sparkles,
  Volume2
} from 'lucide-react';

interface CartItem {
  id: string;
  name: string;
  sku: string;
  price: number;
  qty: number;
}

interface POSSimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const POSSimulatorModal: React.FC<POSSimulatorModalProps> = ({ isOpen, onClose }) => {
  const sampleProducts = [
    { id: 'p1', name: 'Olper’s Milk 1L Pack', sku: '896400012345', price: 290 },
    { id: 'p2', name: 'Super Basmati Rice 5kg', sku: '896400098765', price: 1750 },
    { id: 'p3', name: 'Cotton Crew T-Shirt (L)', sku: '896400054321', price: 2200 },
    { id: 'p4', name: 'Nestle Mineral Water 1.5L', sku: '896400011223', price: 130 },
    { id: 'p5', name: 'Shan Biryani Masala Double', sku: '896400033445', price: 160 },
  ];

  const [cart, setCart] = useState<CartItem[]>([
    { id: 'p1', name: 'Olper’s Milk 1L Pack', sku: '896400012345', price: 290, qty: 2 },
    { id: 'p2', name: 'Super Basmati Rice 5kg', sku: '896400098765', price: 1750, qty: 1 },
  ]);

  const [lastScanned, setLastScanned] = useState<string | null>('Super Basmati Rice 5kg');
  const [printed, setPrinted] = useState(false);

  // Play synthetic POS Scanner beep using Web Audio API
  const playBeep = () => {
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(1800, audioCtx.currentTime); // high pitch barcode beep
      gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.08);
    } catch {
      // Audio fallback
    }
  };

  const handleScanProduct = (prod: typeof sampleProducts[0]) => {
    playBeep();
    setPrinted(false);
    setLastScanned(prod.name);
    setCart((prev) => {
      const existing = prev.find((item) => item.id === prod.id);
      if (existing) {
        return prev.map((item) =>
          item.id === prod.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...prod, qty: 1 }];
    });
  };

  const handleClear = () => {
    setCart([]);
    setLastScanned(null);
    setPrinted(false);
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + tax;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div onClick={onClose} className="fixed inset-0 bg-black/90 backdrop-blur-md transition-opacity" />

      {/* Main Container */}
      <div className="relative w-full max-w-4xl bg-[#0c0c0c] border border-[#262626] rounded-2xl overflow-hidden z-10 shadow-2xl flex flex-col text-white max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[#1f1f1f] bg-[#121212]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600/30 border border-blue-500/50 flex items-center justify-center text-blue-400">
              <Store className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-base text-white tracking-tight">
                  BLUDS POS Barcode Simulator
                </h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800">
                  Sub-2s Checkout
                </span>
              </div>
              <p className="text-[11px] text-neutral-400">
                Experience our real retail supermarket cashier billing in your browser
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Interior Two-Column Register View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-5 sm:p-6 overflow-y-auto">
          
          {/* Left: Barcode Scanner & Product Catalog */}
          <div className="lg:col-span-7 space-y-4">
            {/* Simulated Barcode Scanner Reader */}
            <div className="p-4 rounded-xl bg-[#111111] border border-[#222222] space-y-3">
              <div className="flex items-center justify-between text-xs text-neutral-400">
                <span className="flex items-center gap-1.5 font-medium text-neutral-200">
                  <Barcode className="w-4 h-4 text-blue-400" />
                  <span>Virtual Barcode Scanner</span>
                </span>
                <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Audio Beep Active</span>
                </span>
              </div>

              {lastScanned ? (
                <div className="p-3 rounded-lg bg-blue-950/40 border border-blue-800/40 text-xs text-blue-200 flex items-center justify-between animate-fade-in">
                  <span>✦ Scanned: <strong>{lastScanned}</strong></span>
                  <span className="text-[11px] font-mono text-emerald-400">0.05s Latency</span>
                </div>
              ) : (
                <div className="p-3 rounded-lg bg-[#141414] border border-[#222222] text-xs text-neutral-500 text-center font-mono">
                  Tap any product below to trigger the 0.05s barcode scanner
                </div>
              )}

              {/* Sample Product Buttons to Scan */}
              <div className="space-y-1.5 pt-1">
                <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider block">
                  Click to scan sample items:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {sampleProducts.map((prod) => (
                    <button
                      key={prod.id}
                      type="button"
                      onClick={() => handleScanProduct(prod)}
                      className="p-2.5 rounded-lg bg-[#141414] hover:bg-[#1a1a1a] border border-[#262626] hover:border-blue-500/50 text-left transition-colors flex items-center justify-between group"
                    >
                      <div className="overflow-hidden">
                        <div className="text-xs font-semibold text-white group-hover:text-blue-400 truncate">
                          {prod.name}
                        </div>
                        <div className="text-[10px] text-neutral-500 font-mono">
                          SKU: {prod.sku}
                        </div>
                      </div>
                      <div className="text-right shrink-0 ml-2">
                        <span className="text-xs font-mono font-bold text-white">
                          Rs. {prod.price}
                        </span>
                        <span className="block text-[10px] text-blue-400 group-hover:underline">
                          + Scan
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Hardware Compatibility Highlights */}
            <div className="p-4 rounded-xl bg-[#111111] border border-[#222222] space-y-2 text-xs text-neutral-300">
              <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block">
                Works With Your Existing Shop Hardware:
              </span>
              <div className="grid grid-cols-2 gap-2">
                <div className="p-2 rounded-lg bg-[#141414] border border-[#1f1f1f] text-[11px]">
                  ✓ 80mm & 58mm Thermal Printers
                </div>
                <div className="p-2 rounded-lg bg-[#141414] border border-[#1f1f1f] text-[11px]">
                  ✓ USB & Bluetooth Handheld Scanners
                </div>
                <div className="p-2 rounded-lg bg-[#141414] border border-[#1f1f1f] text-[11px]">
                  ✓ Electronic Cash Drawers
                </div>
                <div className="p-2 rounded-lg bg-[#141414] border border-[#1f1f1f] text-[11px]">
                  ✓ Works Offline during Internet Cuts
                </div>
              </div>
            </div>

          </div>

          {/* Right: Thermal Receipt Paper Preview */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            {/* Thermal Receipt Roll Frame */}
            <div className="rounded-xl bg-white text-black p-5 font-mono shadow-2xl relative border-t-8 border-neutral-300 space-y-3">
              
              {/* Receipt Header */}
              <div className="text-center border-b border-dashed border-neutral-400 pb-3 space-y-0.5">
                <div className="font-extrabold text-sm tracking-tight uppercase">
                  LUXEMART SUPERSTORE
                </div>
                <div className="text-[10px] text-neutral-600">
                  Main Boulevard, Gulberg III, Lahore
                </div>
                <div className="text-[10px] text-neutral-600">
                  Tel: 0309-9489168 • BLUDS POS Engine
                </div>
                <div className="text-[10px] text-neutral-500 pt-1">
                  Cashier: Hamza • Shift: #04 • Bill #{Math.floor(1000 + Math.random() * 9000)}
                </div>
              </div>

              {/* Items List */}
              <div className="space-y-1.5 text-xs min-h-[120px] max-h-[180px] overflow-y-auto">
                {cart.length === 0 ? (
                  <div className="py-8 text-center text-neutral-400 text-[11px]">
                    No items scanned yet.<br />Tap any product on the left to scan!
                  </div>
                ) : (
                  cart.map((item) => (
                    <div key={item.id} className="flex justify-between items-start text-[11px] leading-tight">
                      <div className="flex-1 pr-2">
                        <div className="font-semibold">{item.name}</div>
                        <div className="text-[10px] text-neutral-500">
                          {item.qty} x Rs. {item.price}
                        </div>
                      </div>
                      <div className="font-bold shrink-0">
                        Rs. {(item.qty * item.price).toLocaleString()}
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Totals Breakdown */}
              <div className="border-t border-dashed border-neutral-400 pt-2 space-y-1 text-xs">
                <div className="flex justify-between text-neutral-600 text-[11px]">
                  <span>Subtotal:</span>
                  <span>Rs. {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-neutral-600 text-[11px]">
                  <span>PST / Tax (5%):</span>
                  <span>Rs. {tax.toLocaleString()}</span>
                </div>
                <div className="flex justify-between font-extrabold text-sm pt-1 border-t border-neutral-300">
                  <span>TOTAL BILL:</span>
                  <span>Rs. {total.toLocaleString()}</span>
                </div>
              </div>

              {/* Footer barcode graphic */}
              <div className="text-center pt-2 border-t border-dashed border-neutral-400 text-[10px] text-neutral-500 space-y-1">
                <div className="tracking-widest font-bold">|||||| |||| |||||||| |||||</div>
                <div>Thank you for shopping with us!</div>
              </div>

            </div>

            {/* Receipt Actions */}
            <div className="pt-4 flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  playBeep();
                  setPrinted(true);
                }}
                disabled={cart.length === 0}
                className="flex-1 py-2.5 px-3 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-medium text-xs transition-colors flex items-center justify-center gap-1.5 shadow"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>{printed ? 'Receipt Printed ✓' : 'Print Test Bill'}</span>
              </button>

              <button
                type="button"
                onClick={handleClear}
                className="py-2.5 px-3 rounded-lg bg-[#141414] hover:bg-[#1a1a1a] border border-[#262626] text-neutral-400 hover:text-white text-xs transition-colors flex items-center gap-1"
                title="Clear current register"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear</span>
              </button>
            </div>

          </div>

        </div>

        {/* Modal Bottom Call to Action */}
        <div className="p-4 sm:p-5 border-t border-[#1f1f1f] bg-[#121212] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="text-neutral-400 text-center sm:text-left">
            Want this POS billing software set up at your shop or supermarket?
            <span className="text-white font-medium block sm:inline sm:ml-1">
              Rs. 20,000 one-time setup • Rs. 3,000/mo cloud sync.
            </span>
          </div>

          <a
            href={`https://wa.me/923099489168?text=${encodeURIComponent(
              'Hello Aqeel, I tried your live POS barcode simulator on the BLUDS website and want to get this billing software installed at my shop.'
            )}`}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-black font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 shadow"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-black" />
            <span>Install POS at My Shop (WhatsApp: 03099489168)</span>
          </a>
        </div>

      </div>
    </div>
  );
};
