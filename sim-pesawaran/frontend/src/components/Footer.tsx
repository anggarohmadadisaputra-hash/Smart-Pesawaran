import React from 'react';

export function AppFooter() {
  return (
    <footer className="w-full border-t border-slate-200 bg-white py-6 px-4 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-4 text-center">
        {/* Logos: Pesawaran (Kiri), Teknokrat (Kanan) */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <img
              src="/assets/branding/pesawaran.svg"
              alt="Logo Resmi Kabupaten Pesawaran"
              className="h-11 w-auto object-contain hover:scale-105 transition-transform"
            />
            <div className="text-left hidden sm:block">
              <p className="text-xs font-bold text-slate-800 leading-tight">PEMERINTAH KABUPATEN</p>
              <p className="text-xs font-black text-[#123B5D] tracking-wide">PESAWARAN</p>
            </div>
          </div>

          <div className="h-8 w-px bg-slate-300"></div>

          <div className="flex items-center gap-2">
            <img
              src="/assets/branding/teknokrat.svg"
              alt="Logo Resmi Universitas Teknokrat Indonesia"
              className="h-11 w-auto object-contain hover:scale-105 transition-transform"
            />
            <div className="text-left hidden sm:block">
              <p className="text-xs font-bold text-slate-800 leading-tight">UNIVERSITAS TEKNOKRAT</p>
              <p className="text-xs font-black text-[#1685B9] tracking-wide">INDONESIA</p>
            </div>
          </div>
        </div>

        {/* Identity & Academic Collaboration note */}
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            SIM-PESAWARAN &bull; Smart Infrastructure Monitoring
          </p>
          <p className="text-xs text-slate-400">
            Kolaborasi Riset & Pengabdian Masyarakat: Dinas PUPR Kabupaten Pesawaran &times; Universitas Teknokrat Indonesia
          </p>
        </div>

        {/* Mandatory Exact Copyright Text */}
        <p className="text-xs font-medium text-slate-600 bg-slate-100/80 px-4 py-1.5 rounded-full border border-slate-200">
          Copyright©2026 by Angga Rohmad Adi Saputra dan Dr. Erliyan Redy Susanto, M.Kom
        </p>
      </div>
    </footer>
  );
}

export default AppFooter;
