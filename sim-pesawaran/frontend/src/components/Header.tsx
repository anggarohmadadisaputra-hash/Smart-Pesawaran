import React from 'react';
import { UserRole } from '../types';
import { ShieldCheck, Search, Bell } from 'lucide-react';

interface HeaderProps {
  currentRole: UserRole;
  onRoleChange: (role: UserRole) => void;
  onOpenTracking: () => void;
}

export const AppHeader: React.FC<HeaderProps> = ({ currentRole, onRoleChange, onOpenTracking }) => {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Left: Branding & Logos (Pesawaran Kiri, Teknokrat Kanan) */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2.5">
              <img
                src="/assets/branding/pesawaran.svg"
                alt="Logo Pemkab Pesawaran"
                className="h-12 w-auto object-contain drop-shadow"
              />
              <div>
                <p className="text-[10px] uppercase font-bold tracking-wider text-slate-500">Pemerintah Kabupaten</p>
                <h1 className="text-base font-extrabold text-[#123B5D] leading-none tracking-tight">PESAWARAN</h1>
                <p className="text-[10px] font-semibold text-[#1685B9]">Dinas Pekerjaan Umum & Penataan Ruang</p>
              </div>
            </div>

            <div className="h-9 w-px bg-slate-300 mx-1 hidden md:block"></div>

            <div className="hidden md:flex items-center gap-2.5">
              <img
                src="/assets/branding/teknokrat.svg"
                alt="Logo Universitas Teknokrat Indonesia"
                className="h-12 w-auto object-contain drop-shadow"
              />
              <div>
                <p className="text-[10px] uppercase font-bold tracking-wider text-slate-500">Mitra Akademik</p>
                <p className="text-xs font-black text-[#123B5D] leading-none">UNIVERSITAS TEKNOKRAT</p>
                <p className="text-[10px] font-bold text-amber-600">INDONESIA &bull; Sang Juara</p>
              </div>
            </div>
          </div>

          {/* Right: Role Switcher & Actions */}
          <div className="flex items-center gap-3">
            <div className="bg-slate-100 p-1 rounded-xl border border-slate-200 flex items-center">
              <span className="text-[11px] font-semibold text-slate-500 px-2 flex items-center gap-1 hidden lg:inline-flex">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1685B9]" /> Role:
              </span>
              <select
                value={currentRole}
                onChange={(e) => onRoleChange(e.target.value as UserRole)}
                className="text-xs font-semibold bg-white text-[#123B5D] border border-slate-300 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#1685B9]"
              >
                <option value="administrator">🛡️ Administrator (PUPR)</option>
                <option value="opd">🏢 OPD / Verifikator</option>
                <option value="petugas_lapangan">👷 Petugas Lapangan</option>
                <option value="masyarakat">👥 Masyarakat (Publik)</option>
              </select>
            </div>

            <button
              onClick={onOpenTracking}
              className="px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-bold rounded-lg border border-emerald-200 flex items-center gap-1.5 transition"
            >
              <Search className="w-3.5 h-3.5" /> Lacak Tiket
            </button>

            <button className="relative p-2 text-slate-500 hover:text-slate-800 rounded-lg hover:bg-slate-100 transition">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};
export default AppHeader;
