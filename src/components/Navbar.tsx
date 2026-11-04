import React, { useState } from 'react';
import { GraduationCap, Menu, X, PhoneCall } from 'lucide-react';

interface NavbarProps {
  onOpenPpdb: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPpdb }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element with emblem) */}
        <a href="#" className="flex items-center gap-3 shrink-0 group">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#7cb342] to-[#558b2f] flex items-center justify-center text-white shadow-sm shadow-[#7cb342]/20 group-hover:scale-105 transition-transform">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 whitespace-nowrap">
              SMP Nusantara Unggul
            </span>
            <span className="text-[11px] font-medium text-emerald-800 tracking-wide uppercase">
              Akreditasi A Unggul · Jakarta Selatan
            </span>
          </div>
        </a>

        {/* Zone 2: Clean nav links with single-line labels */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-7 text-sm font-medium text-slate-600">
          <a href="#beranda" className="hover:text-[#558b2f] transition-colors whitespace-nowrap shrink-0">
            Beranda
          </a>
          <a href="#program" className="hover:text-[#558b2f] transition-colors whitespace-nowrap shrink-0">
            Program
          </a>
          <a href="#guru" className="hover:text-[#558b2f] transition-colors whitespace-nowrap shrink-0 font-semibold text-slate-800">
            Dewan Guru
          </a>
          <a href="#ppdb" className="hover:text-[#558b2f] transition-colors whitespace-nowrap shrink-0">
            PPDB Online
          </a>
          <a href="#ekskul" className="hover:text-[#558b2f] transition-colors whitespace-nowrap shrink-0">
            Ekstrakurikuler
          </a>
          <a href="#fasilitas" className="hover:text-[#558b2f] transition-colors whitespace-nowrap shrink-0">
            Fasilitas
          </a>
          <a href="#agenda" className="hover:text-[#558b2f] transition-colors whitespace-nowrap shrink-0">
            Agenda
          </a>
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenPpdb}
            className="px-5 py-2.5 text-xs font-bold text-white bg-[#7cb342] hover:bg-[#689f38] active:bg-[#558b2f] rounded-lg shadow-sm shadow-[#7cb342]/30 transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer"
          >
            Daftar PPDB 2026
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenPpdb}
            className="px-3 py-1.5 text-xs font-semibold text-white bg-[#7cb342] hover:bg-[#689f38] rounded-md whitespace-nowrap cursor-pointer"
          >
            PPDB 2026
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-600 hover:text-slate-900 focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3">
          <div className="grid gap-2 text-sm font-medium text-slate-700">
            <a
              href="#beranda"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-md hover:bg-slate-100"
            >
              Beranda
            </a>
            <a
              href="#program"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-md hover:bg-slate-100"
            >
              Program & Kurikulum
            </a>
            <a
              href="#guru"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-md hover:bg-slate-100 font-semibold text-[#558b2f]"
            >
              Dewan Guru
            </a>
            <a
              href="#ppdb"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-md hover:bg-slate-100"
            >
              PPDB Online
            </a>
            <a
              href="#ekskul"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-md hover:bg-slate-100"
            >
              Ekstrakurikuler
            </a>
            <a
              href="#fasilitas"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-md hover:bg-slate-100"
            >
              Fasilitas Kampus
            </a>
            <a
              href="#agenda"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-md hover:bg-slate-100"
            >
              Agenda & Berita
            </a>
            <a
              href="#kontak"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-md hover:bg-slate-100"
            >
              Kontak & Lokasi
            </a>
          </div>
          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPpdb();
              }}
              className="w-full py-2.5 text-center text-xs font-semibold text-white bg-[#7cb342] hover:bg-[#689f38] rounded-lg"
            >
              Daftar PPDB 2026/2027
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
