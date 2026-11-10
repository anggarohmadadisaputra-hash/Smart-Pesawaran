import React, { useState } from 'react';
import AppHeader from './components/Header';
import AppFooter from './components/Footer';
import { UserRole } from './types';
import {
  LayoutDashboard,
  Map,
  Layers,
  Megaphone,
  CheckSquare,
  ClipboardList,
  Wrench,
  BarChart3,
  FileText,
  Users
} from 'lucide-react';

export function App() {
  const [currentRole, setCurrentRole] = useState<UserRole>('administrator');
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen flex flex-col bg-[#F1F4F8] text-slate-800 antialiased font-sans">
      
      {/* Simulation Alert Banner */}
      <div className="bg-[#123B5D] text-white px-4 py-2 text-xs flex flex-wrap items-center justify-between border-b border-blue-900 shadow-sm">
        <div className="flex items-center gap-2">
          <span className="bg-[#E5A33A] text-slate-900 font-extrabold px-2 py-0.5 rounded text-[10px] tracking-wider uppercase">
            DATA SIMULASI
          </span>
          <span className="font-medium text-slate-200">
            SIM-PESAWARAN &bull; Smart Infrastructure Monitoring Kab. Pesawaran &times; Universitas Teknokrat Indonesia
          </span>
        </div>
        <div className="flex items-center gap-3 text-[11px] text-slate-300">
          <span>Tahun: <strong>2026</strong></span>
          <span>&bull;</span>
          <span className="text-emerald-400 font-semibold flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Sistem Aktif
          </span>
        </div>
      </div>

      {/* Main Header */}
      <AppHeader
        currentRole={currentRole}
        onRoleChange={(role) => setCurrentRole(role)}
        onOpenTracking={() => setActiveTab('tracking')}
      />

      {/* Secondary Subnav */}
      <div className="bg-[#123B5D] text-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-2 overflow-x-auto py-2 scrollbar-none text-xs font-semibold">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
              { id: 'gis', label: 'Peta GIS Spasial', icon: Map },
              { id: 'assets', label: 'Data Infrastruktur', icon: Layers },
              { id: 'aduan', label: 'Lapor Kerusakan', icon: Megaphone },
              { id: 'verifikasi', label: 'Verifikasi & SPK', icon: CheckSquare },
              { id: 'inspeksi', label: 'Inspeksi Lapangan', icon: ClipboardList },
              { id: 'pemeliharaan', label: 'Monitoring Perbaikan', icon: Wrench },
              { id: 'statistik', label: 'Statistik & Kondisi', icon: BarChart3 },
              { id: 'ekspor', label: 'Ekspor Laporan', icon: FileText },
              { id: 'pengguna', label: 'Pengguna & Audit', icon: Users },
            ].map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-3 py-1.5 rounded-md flex items-center gap-1.5 transition ${
                    isActive ? 'bg-[#1685B9] text-white' : 'hover:bg-white/10 text-slate-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 space-y-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-black text-[#123B5D]">
            Modul Aktif: {activeTab.toUpperCase()} (Role: {currentRole})
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Untuk pengalaman visual interaktif penuh yang langsung dapat dibuka tanpa kompilasi server, buka file <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-blue-700">index.html</code> di root proyek melalui VS Code atau peramban favorit Anda.
          </p>
        </div>
      </main>

      {/* Mandatory Exact Footer */}
      <AppFooter />
    </div>
  );
}

export default App;
