import React, { useState } from 'react';
import { SCHOOL_NEWS } from '../data/schoolData';
import { SchoolNews } from '../types';
import { Calendar, Bell, ArrowRight, X, Clock, UserCheck } from 'lucide-react';

export const AgendaNews: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<SchoolNews | null>(null);

  const academicCalendar = [
    { date: '10 Nov', year: '2026', title: 'Peringatan Hari Pahlawan & Upacara Bendera Khidmat', category: 'Kesiswaan' },
    { date: '25 Nov', year: '2026', title: 'Peringatan Hari Guru Nasional & Apresiasi Pendidik', category: 'Akademik' },
    { date: '01 Des', year: '2026', title: 'Penilaian Akhir Semester (PAS) Ganjil Mandiri', category: 'Ujian' },
    { date: '15 Des', year: '2026', title: 'Pembagian Lembar e-Rapor & Konsultasi Orang Tua', category: 'Rapor' }
  ];

  return (
    <section id="agenda" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: School News & Announcements (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#558b2f]">
                Kabar Terkini
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Berita & Pengumuman Sekolah
              </h2>
            </div>

            <div className="space-y-4">
              {SCHOOL_NEWS.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-5 rounded-2xl border border-slate-200/80 hover:border-[#7cb342]/50 shadow-xs hover:shadow-md transition-all cursor-pointer group"
                  onClick={() => setSelectedArticle(item)}
                >
                  <div className="flex items-center gap-2.5 text-xs text-slate-500 mb-2">
                    <span className="font-bold text-[#558b2f] bg-emerald-50 px-2 py-0.5 rounded text-[11px]">
                      {item.category}
                    </span>
                    <span>·</span>
                    <span>{item.date}</span>
                    <span>·</span>
                    <span>{item.readTime}</span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#558b2f] transition-colors leading-snug mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {item.excerpt}
                  </p>

                  <div className="mt-3 flex items-center gap-1 text-xs font-bold text-[#558b2f] group-hover:gap-1.5 transition-all">
                    <span>Baca Selengkapnya</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Kalender Akademik (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#558b2f]">
                Jadwal Belajar
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Agenda Akademik Terdekat
              </h2>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs space-y-4">
              {academicCalendar.map((event, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 pb-4 border-b border-slate-100 last:border-0 last:pb-0"
                >
                  <div className="w-14 h-14 rounded-xl bg-emerald-50 border border-emerald-200/60 flex flex-col items-center justify-center text-center shrink-0">
                    <span className="text-xs font-extrabold text-[#558b2f] leading-none">
                      {event.date}
                    </span>
                    <span className="text-[10px] text-slate-500 font-medium mt-1">
                      {event.year}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      {event.category}
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5 leading-snug">
                      {event.title}
                    </h4>
                  </div>
                </div>
              ))}

              <div className="pt-2">
                <a
                  href="#kontak"
                  className="w-full py-2.5 text-center text-xs font-bold text-[#558b2f] bg-emerald-50/70 hover:bg-emerald-100/70 rounded-xl block transition-colors"
                >
                  Unduh Kalender Akademik Semester Ganjil (PDF)
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[85vh] overflow-y-auto">
            <div className="flex items-start justify-between pb-4 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold text-[#558b2f] bg-emerald-50 px-2 py-0.5 rounded">
                  {selectedArticle.category}
                </span>
                <span className="text-xs text-slate-400 ml-2">{selectedArticle.date}</span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-2">
                  {selectedArticle.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedArticle(null)}
                className="p-1 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-4 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3">
              <p>{selectedArticle.content}</p>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-500">
                Penulis: <strong>{selectedArticle.author}</strong> · Bagian Hubungan Masyarakat SMP Nusantara Unggul
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 rounded-lg"
              >
                Tutup Berita
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
