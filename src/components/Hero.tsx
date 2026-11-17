import React from 'react';
import { ArrowRight, CheckCircle2, Award, TrendingUp, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenPpdb: () => void;
  onExplorePrograms: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPpdb, onExplorePrograms }) => {
  return (
    <section id="beranda" className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-r from-[#fcfdfc] via-[#f2faf5] to-[#dbeef3]/70">
      {/* Soft decorative background ambient glow */}
      <div className="absolute top-0 right-0 w-[650px] h-[650px] bg-gradient-to-br from-[#c8e6c9]/50 via-[#dcedc8]/40 to-transparent rounded-full blur-3xl -z-10 pointer-events-none translate-x-1/4 -translate-y-1/4" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-100/30 rounded-full blur-2xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Subtitle & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide text-[#558b2f] uppercase">
              <Sparkles className="w-4 h-4 text-[#7cb342]" />
              <span>Sekolah Ramah Anak & Kurikulum Merdeka Mandiri</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-slate-900 tracking-tight leading-[1.12] text-balance">
              2.500+ SISWA <br />
              <span className="text-slate-900">TUMBUH BERSAMA KAMI</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
              Komitmen kami adalah menghadirkan pendidikan inklusif, penguatan adab Islami & budi pekerti, serta kesiapan teknologi masa depan yang bermakna untuk setiap anak.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenPpdb}
                className="px-6 py-3.5 text-sm font-bold text-white bg-[#7cb342] hover:bg-[#689f38] active:bg-[#558b2f] rounded-lg shadow-sm shadow-[#7cb342]/30 transition-all flex items-center gap-2 group whitespace-nowrap"
              >
                <span>Daftar PPDB Sekarang</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExplorePrograms}
                className="px-6 py-3.5 text-sm font-semibold text-[#558b2f] border border-[#7cb342]/70 hover:bg-[#7cb342]/10 rounded-lg transition-all whitespace-nowrap"
              >
                Pelajari Kurikulum
              </button>
            </div>

            {/* Quick Trust Highlights */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#7cb342]" />
                <span>Terakreditasi A (Unggul)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#7cb342]" />
                <span>Smart Bilingual Class</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#7cb342]" />
                <span>Lab STEM & Robotika</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with Both Siswa and Siswi Berhijab (No Photo Box, Seamless Cutout) */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end items-end">
            <div className="relative w-full max-w-lg lg:max-w-2xl flex justify-center items-end">
              
              {/* Organic Soft Mint Ambient Halo Backing (Replicating reference organic backdrop) */}
              <div className="absolute inset-0 m-auto w-[420px] h-[420px] sm:w-[500px] sm:h-[500px] bg-gradient-to-tr from-[#a7f3d0]/40 via-[#bbf7d0]/50 to-[#dcfce7]/60 rounded-full blur-3xl -z-10 pointer-events-none" />

              {/* Seamless Cutout Duo: Siswa & Siswi Berhijab (Enlarged, no background, pure blend) */}
              <div className="relative w-full flex justify-center select-none pt-4">
                <img
                  src="/images/smp_students_duo_cutout_1793759522237.jpg"
                  alt="Siswa dan Siswi Berhijab SD NEGERI JEMBER"
                  className="w-full max-w-[520px] sm:max-w-[580px] lg:max-w-[620px] h-auto max-h-[530px] sm:max-h-[570px] object-contain object-bottom pointer-events-none transform transition-transform duration-500 hover:scale-[1.01]"
                  style={{
                    mixBlendMode: 'multiply',
                    maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
                  }}
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating Card 1: Top-Left Coral Pill/Badge (Near Boy's Shoulder) */}
              <div className="absolute top-4 sm:top-8 -left-3 sm:-left-6 bg-gradient-to-br from-[#ff5252] to-[#f43f5e] text-white p-3 sm:p-3.5 rounded-2xl shadow-lg shadow-rose-500/25 border border-white/70 backdrop-blur-sm z-20">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-white/20 rounded-lg">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-rose-100">Akreditasi A</div>
                    <div className="text-sm font-extrabold flex items-center gap-1">
                      <span>98.6 / 100</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Card 2: Right Middle Donut Statistic Card (Near Hijab Girl's Shoulder) */}
              <div className="absolute top-24 sm:top-28 -right-3 sm:-right-6 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl shadow-xl shadow-slate-300/40 border border-slate-100 z-20 w-40 sm:w-44">
                <div className="text-[11px] font-semibold text-slate-500 mb-2">Statistik Kelulusan</div>
                <div className="flex items-center gap-3">
                  {/* Mini Donut Chart SVG */}
                  <div className="relative w-11 h-11 sm:w-12 sm:h-12 flex-shrink-0">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-slate-100"
                        strokeWidth="3.8"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-[#7cb342]"
                        strokeDasharray="75, 100"
                        strokeWidth="3.8"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-amber-400"
                        strokeDasharray="24, 100"
                        strokeDashoffset="-75"
                        strokeWidth="3.8"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center text-[10px] font-black text-slate-800">
                      99%
                    </div>
                  </div>
                  <div className="text-xs leading-tight">
                    <span className="font-bold text-slate-800 block">Favorit</span>
                    <span className="text-[10px] text-slate-500">SMA & SMK</span>
                  </div>
                </div>
              </div>

              {/* Floating Card 3: Bottom Left "Latest Scores" Card */}
              <div className="absolute -bottom-2 sm:-bottom-3 left-0 sm:left-4 bg-white/95 backdrop-blur-md p-3 sm:p-3.5 rounded-2xl shadow-xl shadow-slate-300/40 border border-slate-100 z-20 w-52 sm:w-60">
                <div className="flex items-center justify-between mb-1.5 pb-1 border-b border-slate-100">
                  <span className="text-[11px] font-bold text-slate-800 flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-[#7cb342]" />
                    Rapor Asesmen 2026
                  </span>
                  <span className="text-[10px] text-emerald-800 font-semibold bg-emerald-100 px-1.5 py-0.5 rounded">
                    Unggul
                  </span>
                </div>
                <div className="space-y-1 text-xs">
                  <div className="flex items-center justify-between text-slate-600">
                    <span className="font-medium truncate pr-2">Aisyah Putri A.</span>
                    <span className="font-bold text-slate-800 tabular-nums">96.8</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-600">
                    <span className="font-medium truncate pr-2">Farel Raditya P.</span>
                    <span className="font-bold text-slate-800 tabular-nums">94.2</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Four Key Metrics Green Block / Bar */}
        <div className="mt-16 sm:mt-20 bg-gradient-to-r from-[#4d7c0f] via-[#558b2f] to-[#689f38] text-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl shadow-emerald-950/15 border border-emerald-400/30 relative overflow-hidden">
          {/* Ambient light glow inside the bar */}
          <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -left-16 -top-16 w-64 h-64 bg-emerald-300/15 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-left lg:border-r lg:border-white/20 lg:pr-6">
              <div className="text-3xl sm:text-4xl lg:text-[42px] font-black text-white tracking-tight tabular-nums leading-none">
                1.250+
              </div>
              <div className="text-sm sm:text-base font-bold text-white mt-2 leading-snug">
                Siswa Aktif Berprestasi
              </div>
              <div className="text-xs sm:text-sm text-emerald-100/90 mt-0.5">
                Tingkat kepuasan 98.4%
              </div>
            </div>

            <div className="text-left lg:border-r lg:border-white/20 lg:pr-6">
              <div className="text-3xl sm:text-4xl lg:text-[42px] font-black text-white tracking-tight tabular-nums leading-none">
                99.4%
              </div>
              <div className="text-sm sm:text-base font-bold text-white mt-2 leading-snug">
                Lulusan SMA Favorit
              </div>
              <div className="text-xs sm:text-sm text-emerald-100/90 mt-0.5">
                SMAN Unggulan & Taruna
              </div>
            </div>

            <div className="text-left lg:border-r lg:border-white/20 lg:pr-6">
              <div className="text-3xl sm:text-4xl lg:text-[42px] font-black text-white tracking-tight tabular-nums leading-none">
                48+
              </div>
              <div className="text-sm sm:text-base font-bold text-white mt-2 leading-snug">
                Guru & Dosen Tamu
              </div>
              <div className="text-xs sm:text-sm text-emerald-100/90 mt-0.5">
                100% Bersertifikasi Pendidik
              </div>
            </div>

            <div className="text-left">
              <div className="text-3xl sm:text-4xl lg:text-[42px] font-black text-white tracking-tight tabular-nums leading-none">
                135+
              </div>
              <div className="text-sm sm:text-base font-bold text-white mt-2 leading-snug">
                Penghargaan & Juara
              </div>
              <div className="text-xs sm:text-sm text-emerald-100/90 mt-0.5">
                Tingkat Kota, Nasional & Global
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
