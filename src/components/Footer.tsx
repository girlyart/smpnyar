import React from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import { GraduationCap, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#7cb342] flex items-center justify-center text-white">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-lg font-bold text-white tracking-tight block">
                  {SCHOOL_INFO.name}
                </span>
                <span className="text-xs text-emerald-400 font-medium">
                  NPSN: {SCHOOL_INFO.npsn} · {SCHOOL_INFO.akreditasi}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Mewujudkan lingkungan pendidikan inklusif, pembinaan akhlak mulia, dan keunggulan sains teknologi bagi generasi penerus bangsa.
            </p>

            <div className="text-xs text-slate-400 space-y-1">
              <div>{SCHOOL_INFO.alamat}</div>
              <div>Telp: {SCHOOL_INFO.telepon} | WA: {SCHOOL_INFO.whatsapp}</div>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#beranda" className="hover:text-white transition-colors">Beranda Sekolah</a>
              </li>
              <li>
                <a href="#program" className="hover:text-white transition-colors">Program Kurikulum</a>
              </li>
              <li>
                <a href="#guru" className="hover:text-white transition-colors">Dewan Guru</a>
              </li>
              <li>
                <a href="#ppdb" className="hover:text-white transition-colors">Pendaftaran PPDB 2026</a>
              </li>
              <li>
                <a href="#ekskul" className="hover:text-white transition-colors">Ekstrakurikuler & Prestasi</a>
              </li>
              <li>
                <a href="#fasilitas" className="hover:text-white transition-colors">Fasilitas Sekolah</a>
              </li>
              <li>
                <a href="#agenda" className="hover:text-white transition-colors">Agenda & Berita</a>
              </li>
            </ul>
          </div>

          {/* Academic Portal & Downloads (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Layanan Digital
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#ppdb" className="hover:text-white transition-colors">Pelacak Status PPDB</a>
              </li>
              <li>
                <a href="#agenda" className="hover:text-white transition-colors">Kalender Pendidikan 2026/2027</a>
              </li>
              <li>
                <a href="#kontak" className="hover:text-white transition-colors">Helpdesk & Layanan Konseling</a>
              </li>
              <li>
                <a href="#kontak" className="hover:text-white transition-colors">Tata Tertib & Buku Saku Siswa</a>
              </li>
            </ul>
          </div>

          {/* Back to top & Info (2 cols) */}
          <div className="lg:col-span-2 flex flex-col justify-between items-start lg:items-end">
            <button
              onClick={scrollToTop}
              className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>Ke Atas</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
            <div className="text-[11px] text-slate-500 mt-6 lg:mt-0 text-left lg:text-right">
              Kepala Sekolah:<br />
              <strong className="text-slate-300">{SCHOOL_INFO.kepalaSekolah}</strong>
            </div>
          </div>

        </div>

        {/* Quiet Copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} {SCHOOL_INFO.name}. Hak Cipta Dilindungi Undang-Undang.</p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Privasi</span>
            <span>·</span>
            <span>Ketentuan Layanan</span>
            <span>·</span>
            <span>Sitemap</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
