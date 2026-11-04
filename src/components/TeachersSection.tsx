import React, { useState } from 'react';
import { TEACHERS } from '../data/schoolData';
import { Teacher } from '../types';
import { GraduationCap, Award, Clock, Mail, CheckCircle2, X, Send, Sparkles } from 'lucide-react';

export const TeachersSection: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<string>('Semua');
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);
  const [consultationSubmitted, setConsultationSubmitted] = useState(false);
  const [consultationData, setConsultationData] = useState({
    namaOrtu: '',
    namaSiswa: '',
    whatsapp: '',
    tanggal: '',
    topik: ''
  });

  const categories = ['Semua', 'Pimpinan', 'MIPA & Teknologi', 'Bahasa & Literasi', 'Karakter & Agama', 'Olahraga & Seni'];

  const filteredTeachers = filterCategory === 'Semua'
    ? TEACHERS
    : TEACHERS.filter((t) => t.kategori === filterCategory);

  const handleBookConsultation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consultationData.namaOrtu || !consultationData.whatsapp || !consultationData.topik) {
      alert('Mohon isi nama, nomor WhatsApp, dan topik konsultasi!');
      return;
    }
    setConsultationSubmitted(true);
    setTimeout(() => {
      setConsultationSubmitted(false);
      setSelectedTeacher(null);
      setConsultationData({
        namaOrtu: '',
        namaSiswa: '',
        whatsapp: '',
        tanggal: '',
        topik: ''
      });
    }, 3500);
  };

  return (
    <section id="guru" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#558b2f] bg-emerald-50 px-2.5 py-1 rounded-md">
              <Sparkles className="w-3.5 h-3.5 text-[#7cb342]" />
              <span>Tenaga Pendidik Berkualitas Global</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Dewan Guru
            </h2>
            <p className="text-slate-600 max-w-2xl text-sm sm:text-base">
              Mendidik dengan hati, menginspirasi nalar kritis. 100% guru kami tersertifikasi pendidik profesional dengan kualifikasi magister dan sarjana dari perguruan tinggi terkemuka.
            </p>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-xl">
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

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTeachers.map((guru) => (
            <div
              key={guru.id}
              className="bg-slate-50/70 hover:bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 hover:border-[#7cb342]/50 shadow-xs hover:shadow-xl hover:shadow-emerald-950/5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Teacher Photo with Category Badge */}
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4 bg-slate-200 shadow-inner">
                  <img
                    src={guru.foto}
                    alt={guru.nama}
                    className="w-full h-full object-cover object-top group-hover:scale-104 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2.5 right-2.5 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded-md border border-white/20">
                    {guru.kategori}
                  </div>
                </div>

                {/* Name & Title */}
                <h3 className="text-base font-bold text-slate-900 leading-snug group-hover:text-[#558b2f] transition-colors mb-0.5">
                  {guru.nama}
                </h3>
                <div className="text-xs font-semibold text-[#558b2f] mb-2">
                  {guru.jabatan}
                </div>

                {/* Subject & Bio */}
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                  {guru.bio}
                </p>

                {/* Credentials */}
                <div className="space-y-1.5 text-[11px] text-slate-500 pt-2 border-t border-slate-200/60 mb-4">
                  <div className="flex items-center gap-1.5 text-slate-700">
                    <GraduationCap className="w-3.5 h-3.5 text-[#7cb342] shrink-0" />
                    <span className="truncate">{guru.pendidikan}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-700">
                    <Award className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span className="truncate">{guru.sertifikasi}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2 border-t border-slate-100">
                <button
                  onClick={() => setSelectedTeacher(guru)}
                  className="w-full py-2.5 text-xs font-bold text-slate-700 hover:text-white bg-white hover:bg-[#7cb342] border border-slate-200 hover:border-[#7cb342] rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-2xs"
                >
                  <Clock className="w-3.5 h-3.5" />
                  <span>Jadwal & Konsultasi</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Teacher Profile & Consultation Booking Modal */}
      {selectedTeacher && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-fade-in overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-lg w-full my-6 p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-start justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3.5">
                <img
                  src={selectedTeacher.foto}
                  alt={selectedTeacher.nama}
                  className="w-14 h-14 rounded-2xl object-cover object-top border-2 border-[#7cb342] shadow-sm shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <span className="text-[11px] font-bold text-[#558b2f] uppercase tracking-wide">
                    {selectedTeacher.kategori} · {selectedTeacher.pengalaman}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 leading-snug">
                    {selectedTeacher.nama}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">{selectedTeacher.jabatan}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedTeacher(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-4 space-y-4">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-xs space-y-2">
                <div className="flex items-start gap-2 text-slate-700">
                  <GraduationCap className="w-4 h-4 text-[#7cb342] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Riwayat Pendidikan:</strong>
                    <span>{selectedTeacher.pendidikan}</span>
                  </div>
                </div>
                <div className="flex items-start gap-2 text-slate-700">
                  <Award className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Sertifikasi & Lisensi:</strong>
                    <span>{selectedTeacher.sertifikasi}</span>
                  </div>
                </div>
                <div className="flex items-start gap-2 text-slate-700">
                  <Clock className="w-4 h-4 text-[#7cb342] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Jam Konsultasi Orang Tua:</strong>
                    <span className="font-semibold text-[#558b2f]">{selectedTeacher.jamKonsultasi}</span>
                  </div>
                </div>
                <div className="flex items-start gap-2 text-slate-700">
                  <Mail className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Email Resmi:</strong>
                    <span className="font-mono text-slate-600">{selectedTeacher.email}</span>
                  </div>
                </div>
              </div>

              {/* Consultation Booking Form */}
              <div className="pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                  Ajukan Pertemuan / Konsultasi Belajar
                </h4>

                {consultationSubmitted ? (
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#7cb342] shrink-0" />
                    <span>Jadwal konsultasi berhasil diajukan! Konfirmasi waktu temu dikirimkan ke nomor WhatsApp Anda.</span>
                  </div>
                ) : (
                  <form onSubmit={handleBookConsultation} className="space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="text"
                        required
                        placeholder="Nama Orang Tua / Wali"
                        value={consultationData.namaOrtu}
                        onChange={(e) => setConsultationData({ ...consultationData, namaOrtu: e.target.value })}
                        className="px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-[#7cb342]"
                      />
                      <input
                        type="tel"
                        required
                        placeholder="No. WhatsApp Aktif"
                        value={consultationData.whatsapp}
                        onChange={(e) => setConsultationData({ ...consultationData, whatsapp: e.target.value })}
                        className="px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-[#7cb342]"
                      />
                    </div>

                    <input
                      type="text"
                      placeholder="Nama Siswa & Kelas (contoh: Aisyah - Kelas VIII-A)"
                      value={consultationData.namaSiswa}
                      onChange={(e) => setConsultationData({ ...consultationData, namaSiswa: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-[#7cb342]"
                    />

                    <textarea
                      required
                      rows={2}
                      placeholder="Topik / Permasalahan yang ingin dikonsultasikan..."
                      value={consultationData.topik}
                      onChange={(e) => setConsultationData({ ...consultationData, topik: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-[#7cb342]"
                    />

                    <div className="flex items-center justify-end gap-2 pt-1">
                      <button
                        type="button"
                        onClick={() => setSelectedTeacher(null)}
                        className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
                      >
                        Batal
                      </button>
                      <button
                        type="submit"
                        className="px-5 py-2 text-xs font-bold text-white bg-[#7cb342] hover:bg-[#689f38] rounded-lg shadow-sm flex items-center gap-1.5"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Kirim Permohonan Konsultasi</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
