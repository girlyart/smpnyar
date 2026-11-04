import React, { useState } from 'react';
import { EXTRACURRICULARS } from '../data/schoolData';
import { Extracurricular } from '../types';
import { Trophy, Clock, MapPin, User, Check, Sparkles } from 'lucide-react';

export const Extracurriculars: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<string>('Semua');
  const [enrolledEkskul, setEnrolledEkskul] = useState<string | null>(null);

  const categories = ['Semua', 'Sains & Teknologi', 'Olahraga', 'Seni & Budaya', 'Kepanduan', 'Bahasa'];

  const filteredList = filterCategory === 'Semua'
    ? EXTRACURRICULARS
    : EXTRACURRICULARS.filter((e) => e.category === filterCategory);

  return (
    <section id="ekskul" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#558b2f]">
              Pengembangan Karakter & Minat Bakat
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Ekstrakurikuler Pilihan & Pembinaan Prestasi
            </h2>
            <p className="text-slate-600 max-w-2xl text-sm sm:text-base">
              Setiap siswa wajib memilih 1 ekskul kepanduan (Pramuka) dan dapat mengambil hingga 2 ekskul peminatan minat bakat untuk diasah menjadi juara.
            </p>
          </div>

          {/* Category Filter Buttons (Functional segmented control) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-200/70 rounded-xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  filterCategory === cat
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Extracurricular Cards Grid with Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredList.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:shadow-xl hover:shadow-emerald-950/5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Extracurricular Photo Banner */}
                <div className="relative w-full h-48 sm:h-52 rounded-xl overflow-hidden mb-4 bg-slate-100 shadow-inner">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Category overlay badge */}
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-md border border-white/20">
                    {item.category}
                  </div>
                  {/* Members count badge */}
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md text-slate-800 text-[10px] font-bold px-2 py-0.5 rounded-md shadow-sm">
                    {item.members} Anggota
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#558b2f] transition-colors mb-2 leading-snug">
                  {item.name}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-2">
                  {item.description}
                </p>

                {/* Practical Details */}
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs space-y-1.5 mb-4">
                  <div className="flex items-center gap-2 text-slate-600">
                    <User className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>Pembina: <strong>{item.mentor}</strong></span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>Jadwal: {item.day}, {item.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>Lokasi: {item.location}</span>
                  </div>
                </div>

                {/* Achievements List */}
                <div className="space-y-1.5 mb-4">
                  <span className="text-[11px] font-bold text-slate-700 flex items-center gap-1">
                    <Trophy className="w-3.5 h-3.5 text-amber-500" />
                    Prestasi Terbaru:
                  </span>
                  {item.achievements.map((ach, idx) => (
                    <div key={idx} className="text-[11px] text-slate-600 flex items-start gap-1.5 pl-1">
                      <span className="text-[#7cb342] font-bold">✓</span>
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-3 border-t border-slate-100">
                {enrolledEkskul === item.id ? (
                  <div className="py-2 text-center text-xs font-bold text-emerald-800 bg-emerald-100 rounded-lg flex items-center justify-center gap-1.5">
                    <Check className="w-4 h-4 text-[#7cb342]" />
                    <span>Terdaftar di Ekskul Ini</span>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      setEnrolledEkskul(item.id);
                      setTimeout(() => setEnrolledEkskul(null), 4000);
                    }}
                    className="w-full py-2 text-xs font-bold text-slate-700 hover:text-white bg-slate-100 hover:bg-[#7cb342] rounded-lg transition-colors"
                  >
                    Daftar Sebagai Anggota Ekskul
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
