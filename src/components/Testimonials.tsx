import React from 'react';
import { TESTIMONIALS } from '../data/schoolData';
import { Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Matching Reference "Practice Advice / Every Client Matters" */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#558b2f]">
            Suara Orang Tua & Jejak Alumni
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Setiap Siswa Berharga & Bertumbuh Nyata
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Dukungan penuh dari orang tua murid dan kesuksesan alumni kami di jenjang SMA favorit adalah bukti nyata kualitas pendidikan holistik SMP Nusantara Unggul.
          </p>
        </div>

        {/* Testimonials 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-slate-50/70 hover:bg-white rounded-2xl p-7 border border-slate-200/80 hover:border-[#7cb342]/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* 5-Star Rating (Matching reference yellow stars) */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-500" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-6 italic">
                  "{t.kutipan}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-200/60 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7cb342] to-[#558b2f] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  {t.nama.charAt(0)}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{t.nama}</h4>
                  <p className="text-[11px] text-slate-500">{t.peran}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
