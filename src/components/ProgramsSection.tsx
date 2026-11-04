import React, { useState } from 'react';
import { PROGRAMS } from '../data/schoolData';
import { Program } from '../types';
import { Star, Users, ArrowRight, BookOpen, Check, X, Clock, Calendar, Globe2, Bot, BookMarked, Trophy } from 'lucide-react';

interface ProgramsSectionProps {
  onSelectProgramForPpdb: (programTitle: string) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onSelectProgramForPpdb }) => {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  const getProgramIcon = (id: string, className = "w-6 h-6") => {
    switch (id) {
      case 'prog-1':
        return <Globe2 className={className} />;
      case 'prog-2':
        return <Bot className={className} />;
      case 'prog-3':
        return <BookMarked className={className} />;
      case 'prog-4':
        return <Trophy className={className} />;
      default:
        return <BookOpen className={className} />;
    }
  };

  return (
    <section id="program" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#558b2f]">
              Pilar Kurikulum Merdeka
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Program Unggulan Berstandar Masa Depan
            </h2>
            <p className="text-slate-600 max-w-2xl text-sm sm:text-base">
              Kami merancang kurikulum komprehensif yang memadukan kedalaman sains terapan, kecakapan bahasa internasional, serta pengokohan akhlak mulia.
            </p>
          </div>
          <div className="shrink-0">
            <span className="text-xs text-slate-500 font-medium">
              4 Program Terintegrasi · Sistem Kelas Kecil (Maks. 32 Siswa/Kelas)
            </span>
          </div>
        </div>

        {/* 4 Cards Grid - Replicating reference cards top layout with custom icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROGRAMS.map((prog, index) => (
            <div
              key={prog.id}
              className="group bg-slate-50/70 hover:bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-[#7cb342]/50 shadow-sm hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top card row: Solid Green Icon Box + Star Rating (Matching reference layout) */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7cb342] to-[#558b2f] text-white shadow-md shadow-[#7cb342]/30 flex items-center justify-center group-hover:scale-108 group-hover:shadow-lg group-hover:shadow-[#558b2f]/35 transition-all duration-300">
                    {getProgramIcon(prog.id, "w-7 h-7 text-white stroke-[2.2]")}
                  </div>
                  <div className="flex items-center gap-1 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/60">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                    <span className="text-xs font-bold text-amber-900 tabular-nums">{prog.rating}</span>
                  </div>
                </div>

                {/* Category label */}
                <span className="text-[11px] font-bold text-[#558b2f] tracking-wide block mb-1">
                  {prog.category}
                </span>

                {/* Number & Title */}
                <div className="mb-2">
                  <span className="text-xs font-mono font-bold text-slate-400">0{index + 1}.</span>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#558b2f] transition-colors leading-snug">
                    {prog.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 line-clamp-3 mb-4 leading-relaxed">
                  {prog.description}
                </p>

                {/* Students Enrolled count (Like '15 Sales' in reference) */}
                <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-6">
                  <Users className="w-3.5 h-3.5 text-slate-400" />
                  <span className="tabular-nums font-medium">{prog.studentsCount} Siswa Terdaftar</span>
                </div>
              </div>

              {/* Bottom Card Action (Like 'Learn More >' in reference) */}
              <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProgram(prog)}
                  className="text-xs font-bold text-[#558b2f] hover:text-[#33691e] flex items-center gap-1 group-hover:gap-2 transition-all cursor-pointer"
                >
                  <span>Pelajari Rincian</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onSelectProgramForPpdb(prog.title)}
                  className="text-[11px] font-semibold text-slate-500 hover:text-slate-900 transition-colors"
                >
                  Pilih Jalur
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Informational Callout Bar */}
        <div className="mt-12 bg-emerald-50/70 border border-emerald-200/70 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#7cb342] text-white flex items-center justify-center shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">
                Konsultasi Peminatan & Uji Minat Bakat Siswa
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Bingung memilih antara kelas Bilingual atau Riset Robotik? Tim Bimbingan Konseling (BK) kami siap mendampingi sesi konsultasi online gratis bersama psikolog pendidikan.
              </p>
            </div>
          </div>
          <button
            onClick={() => onSelectProgramForPpdb('Kelas Bilingual & Persiapan Cambridge')}
            className="shrink-0 px-5 py-2.5 text-xs font-bold text-white bg-[#558b2f] hover:bg-[#33691e] rounded-lg transition-colors shadow-sm"
          >
            Jadwalkan Konsultasi
          </button>
        </div>

      </div>

      {/* Program Detail Modal */}
      {selectedProgram && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3.5">
                <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#7cb342] to-[#558b2f] text-white shadow-md shadow-[#7cb342]/25 flex items-center justify-center shrink-0">
                  {getProgramIcon(selectedProgram.id, "w-6 h-6 text-white stroke-[2.2]")}
                </div>
                <div>
                  <span className="text-xs font-bold text-[#558b2f] uppercase tracking-wide">
                    {selectedProgram.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-0.5">
                    {selectedProgram.title}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setSelectedProgram(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors shrink-0"
                aria-label="Tutup modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-4 space-y-4">
              <p className="text-sm text-slate-600 leading-relaxed">
                {selectedProgram.description}
              </p>

              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Keunggulan & Capaian Belajar:
                </h4>
                <ul className="space-y-2">
                  {selectedProgram.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-[#558b2f] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl space-y-2 border border-slate-100 text-xs">
                <div className="flex items-center gap-2 text-slate-700">
                  <Clock className="w-4 h-4 text-[#7cb342]" />
                  <span className="font-semibold">Jadwal:</span> {selectedProgram.schedule}
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Calendar className="w-4 h-4 text-[#7cb342]" />
                  <span className="font-semibold">Pengampu:</span> {selectedProgram.guruPembimbing}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedProgram(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
              >
                Tutup
              </button>
              <button
                onClick={() => {
                  const title = selectedProgram.title;
                  setSelectedProgram(null);
                  onSelectProgramForPpdb(title);
                }}
                className="px-5 py-2 text-xs font-bold text-white bg-[#7cb342] hover:bg-[#689f38] rounded-lg shadow-sm"
              >
                Daftar Program Ini di PPDB
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
