import React, { useState } from 'react';
import { Building2, Laptop, BookOpen, Trophy, CheckCircle, ArrowRight } from 'lucide-react';

export const CampusFacilities: React.FC = () => {
  const [activeFacility, setActiveFacility] = useState(0);

  const facilities = [
    {
      id: 'gedung-kampus',
      name: 'Gedung Sekolah Ramah Anak & Lapangan Olahraga',
      category: 'Infrastruktur Kampus',
      image: '/images/smp_school_campus_1793758792227.jpg',
      badge: 'Green Building Certified',
      description: 'Kampus seluas 1,8 hektar berkonsep taman tropis asri, dilengkapi lapangan multifungsi berstandar FIBA (basket, futsal, bulutangkis), amphitheater luar ruang, dan sistem keamanan CCTV 24 jam terpadu.',
      specs: [
        'Lapangan Basket & Futsal Berstandar Nasional',
        'Area Terbuka Hijau & Gazebo Diskusi Siswa',
        'Sirkulasi Udara Alami Ramah Lingkungan',
        'Aksesibilitas Ramah Disabilitas di Setiap Lantai'
      ]
    },
    {
      id: 'lab-robotik',
      name: 'Pusat Laboratorium Sains & Robotika Cerdas',
      category: 'Teknologi & Riset',
      image: '/images/smp_robotics_lab_1793758792146.jpg',
      badge: 'STEM Certified Lab',
      description: 'Ruang inkubator inovasi tempat siswa bereksplorasi dengan lengan mekanik robotik, mikrokontroler, modul Internet of Things (IoT), workstation komputer bertenaga tinggi, dan stasiun 3D printing.',
      specs: [
        '30 Workstation Komputer Riset Siswa',
        'Perangkat Kit Robotika Canggih & Sensor Cerdas',
        'Stasiun Cetak 3D & Pemrograman Visual',
        'Fasilitas Riset Olimpiade Sains Siswa (OPSI)'
      ]
    },
    {
      id: 'kelas-interaktif',
      name: 'Smart Classroom & Ruang Pembelajaran Kolaboratif',
      category: 'Ruang Kelas Digital',
      image: '/images/smp_bilingual_classroom_1793758792138.jpg',
      badge: 'Interactive Digital Board',
      description: 'Ruang kelas berpendingin udara yang mengutamakan interaktivitas siswa dengan meja formasi diskusi fleksibel, layar sentuh digital interaktif 75 inci, koneksi fiber optic super cepat, dan pencahayaan ergonomis.',
      specs: [
        'Interactive Flat Panel Smart Board 75"',
        'Meja Ergonomis Formasi Kolaboratif',
        'Akses e-Learning & Digital Library Tablet',
        'Kapasitas Maksimal 32 Siswa per Rombel'
      ]
    }
  ];

  const current = facilities[activeFacility];

  return (
    <section id="fasilitas" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#558b2f]">
            Sarana & Prasarana
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Fasilitas Modern untuk Tumbuh Kembang Optimal
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Kami meyakini bahwa lingkungan fisik yang aman, nyaman, dan kaya teknologi merupakan katalisator utama kreativitas serta pencapaian prestasi siswa.
          </p>
        </div>

        {/* Tab Selector Buttons */}
        <div className="flex flex-wrap gap-2 mb-8">
          {facilities.map((fac, idx) => (
            <button
              key={fac.id}
              onClick={() => setActiveFacility(idx)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeFacility === idx
                  ? 'bg-[#7cb342] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900'
              }`}
            >
              {idx === 0 && <Building2 className="w-4 h-4" />}
              {idx === 1 && <Laptop className="w-4 h-4" />}
              {idx === 2 && <BookOpen className="w-4 h-4" />}
              <span>{fac.name.split('&')[0]}</span>
            </button>
          ))}
        </div>

        {/* Active Facility Showcase Bento Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-50/70 rounded-3xl p-6 sm:p-8 border border-slate-200/80">
          
          {/* Visual Showcase (7 cols) */}
          <div className="lg:col-span-7 relative group overflow-hidden rounded-2xl shadow-lg border-2 border-white">
            <img
              src={current.image}
              alt={current.name}
              className="w-full h-[320px] sm:h-[400px] object-cover object-center group-hover:scale-103 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1.5 rounded-lg border border-white/20">
              {current.badge}
            </div>
          </div>

          {/* Description & Specifications (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <span className="text-xs font-bold text-[#558b2f] tracking-wide uppercase">
                {current.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                {current.name}
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {current.description}
            </p>

            <div className="space-y-2.5 pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">
                Spesifikasi & Daya Dukung:
              </span>
              <div className="grid grid-cols-1 gap-2">
                {current.specs.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-700 bg-white p-2.5 rounded-xl border border-slate-200/60 shadow-2xs">
                    <CheckCircle className="w-4 h-4 text-[#7cb342] shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#ppdb"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#558b2f] hover:text-[#33691e]"
              >
                <span>Daftar sekarang untuk nikmati fasilitas ini</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
