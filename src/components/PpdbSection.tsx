import React, { useState } from 'react';
import { INITIAL_PPDB_LIST, PROGRAMS } from '../data/schoolData';
import { PpdbRegistration } from '../types';
import { CheckCircle2, Search, FileText, UserPlus, QrCode, Printer, AlertCircle, Sparkles } from 'lucide-react';

interface PpdbSectionProps {
  preselectedProgram?: string;
}

export const PpdbSection: React.FC<PpdbSectionProps> = ({ preselectedProgram }) => {
  const [activeTab, setActiveTab] = useState<'daftar' | 'status'>('daftar');
  const [registrations, setRegistrations] = useState<PpdbRegistration[]>(INITIAL_PPDB_LIST);
  
  // Tracking search state
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState<PpdbRegistration | null>(null);
  const [searchError, setSearchError] = useState('');

  // Form State
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    namaLengkap: '',
    nisn: '',
    asalSekolah: '',
    jenisKelamin: 'Laki-laki',
    tanggalLahir: '2013-05-14',
    namaWali: '',
    whatsapp: '',
    alamat: '',
    jalur: 'Prestasi' as 'Zonasi' | 'Prestasi' | 'Afirmasi' | 'Perpindahan Orang Tua',
    programPilihan: preselectedProgram || PROGRAMS[0].title,
    nilaiMatematika: '92',
    nilaiIpa: '90',
    nilaiIndo: '94',
    catatanPrestasi: ''
  });

  const [submittedProof, setSubmittedProof] = useState<PpdbRegistration | null>(null);

  const handleSearchStatus = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchError('');
    setSearchResult(null);

    const query = searchQuery.trim().toLowerCase();
    if (!query) {
      setSearchError('Harap masukkan nomor pendaftaran atau NISN.');
      return;
    }

    const found = registrations.find(
      (r) =>
        r.nomorPendaftaran.toLowerCase().includes(query) ||
        r.nisn.toLowerCase().includes(query) ||
        r.namaLengkap.toLowerCase().includes(query)
    );

    if (found) {
      setSearchResult(found);
    } else {
      setSearchError('Data pendaftaran tidak ditemukan. Pastikan NISN atau nomor registrasi sudah benar.');
    }
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.namaLengkap || !formData.nisn || !formData.asalSekolah || !formData.whatsapp) {
      alert('Mohon lengkapi semua data wajib pada formulir!');
      return;
    }

    const avgScore = (
      (parseFloat(formData.nilaiMatematika) +
        parseFloat(formData.nilaiIpa) +
        parseFloat(formData.nilaiIndo)) /
      3
    ).toFixed(1);

    const randomSuffix = Math.floor(100 + Math.random() * 900);
    const newReg: PpdbRegistration = {
      id: `PPDB-2026-${randomSuffix}`,
      nomorPendaftaran: `PPDB-SMP6JBR-0${randomSuffix}`,
      namaLengkap: formData.namaLengkap,
      nisn: formData.nisn,
      asalSekolah: formData.asalSekolah,
      jalur: formData.jalur,
      programPilihan: formData.programPilihan,
      status: 'Terverifikasi',
      tanggalDaftar: new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' }),
      skor: parseFloat(avgScore)
    };

    setRegistrations([newReg, ...registrations]);
    setSubmittedProof(newReg);
  };

  return (
    <section id="ppdb" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#558b2f] bg-emerald-100/60 px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-[#7cb342]" />
            <span>Penerimaan Peserta Didik Baru (PPDB) 2026/2027</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Portal Pendaftaran & Status Kelulusan Online
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Sistem pendaftaran satu pintu dengan verifikasi otomatis nilai rapor, kuota transparan, serta pengumuman hasil seleksi real-time.
          </p>

          {/* Toggle between Register and Track */}
          <div className="inline-flex p-1.5 bg-emerald-950/10 rounded-2xl border border-emerald-800/15 mt-4">
            <button
              onClick={() => setActiveTab('daftar')}
              className={`px-5 py-2.5 text-xs font-bold rounded-xl transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'daftar'
                  ? 'bg-[#4d7c0f] text-white shadow-md'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              <UserPlus className="w-4 h-4" />
              Formulir Pendaftaran Online
            </button>
            <button
              onClick={() => setActiveTab('status')}
              className={`px-5 py-2.5 text-xs font-bold rounded-xl transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'status'
                  ? 'bg-[#4d7c0f] text-white shadow-md'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              <Search className="w-4 h-4" />
              Cek Status & Verifikasi Berkas
            </button>
          </div>
        </div>

        {/* Tab 1: Pendaftaran Baru */}
        {activeTab === 'daftar' && (
          <div className="max-w-4xl mx-auto">
            {submittedProof ? (
              /* Success / Tanda Bukti Pendaftaran Card - Green Box with White Text */
              <div className="bg-gradient-to-br from-[#4d7c0f] via-[#558b2f] to-[#689f38] text-white rounded-3xl p-8 sm:p-10 shadow-2xl shadow-emerald-950/25 border border-emerald-300/40 relative overflow-hidden">
                <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -left-16 -top-16 w-64 h-64 bg-emerald-300/15 rounded-full blur-3xl pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/20">
                    <div>
                      <div className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-white/20 px-3 py-1 rounded-lg mb-2 border border-white/30 backdrop-blur-sm">
                        <CheckCircle2 className="w-4 h-4 text-emerald-200" />
                        Pendaftaran Berhasil Terverifikasi
                      </div>
                      <h3 className="text-2xl font-extrabold text-white">
                        Tanda Bukti Registrasi PPDB 2026
                      </h3>
                      <p className="text-xs text-emerald-100 mt-0.5">
                        Simpan atau cetak nomor pendaftaran ini untuk keperluan daftar ulang di SMP6 JEMBER.
                      </p>
                    </div>
                    
                    <div className="bg-white p-3.5 rounded-2xl border border-emerald-200 flex items-center gap-3 text-slate-900 shadow-lg">
                      <QrCode className="w-12 h-12 text-slate-800" />
                      <div className="text-right">
                        <div className="text-[10px] text-slate-500 font-semibold uppercase">Nomor Registrasi</div>
                        <div className="text-base font-black text-[#365314] font-mono">
                          {submittedProof.nomorPendaftaran}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Details Breakdown */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 text-xs sm:text-sm">
                    <div className="bg-emerald-950/30 backdrop-blur-sm p-3.5 rounded-xl border border-white/20 text-white">
                      <span className="text-emerald-200 block text-[11px] mb-0.5 font-medium">Nama Calon Siswa</span>
                      <span className="font-bold text-white text-sm">{submittedProof.namaLengkap}</span>
                    </div>
                    <div className="bg-emerald-950/30 backdrop-blur-sm p-3.5 rounded-xl border border-white/20 text-white">
                      <span className="text-emerald-200 block text-[11px] mb-0.5 font-medium">NISN (10 Digit)</span>
                      <span className="font-bold font-mono text-white text-sm">{submittedProof.nisn}</span>
                    </div>
                    <div className="bg-emerald-950/30 backdrop-blur-sm p-3.5 rounded-xl border border-white/20 text-white">
                      <span className="text-emerald-200 block text-[11px] mb-0.5 font-medium">Asal SD/MI</span>
                      <span className="font-bold text-white text-sm">{submittedProof.asalSekolah}</span>
                    </div>
                    <div className="bg-emerald-950/30 backdrop-blur-sm p-3.5 rounded-xl border border-white/20 text-white">
                      <span className="text-emerald-200 block text-[11px] mb-0.5 font-medium">Jalur Pendaftaran</span>
                      <span className="font-bold text-white text-sm">{submittedProof.jalur}</span>
                    </div>
                    <div className="bg-emerald-950/30 backdrop-blur-sm p-3.5 rounded-xl border border-white/20 sm:col-span-2 text-white">
                      <span className="text-emerald-200 block text-[11px] mb-0.5 font-medium">Program Pilihan</span>
                      <span className="font-bold text-white text-sm">{submittedProof.programPilihan}</span>
                    </div>
                    <div className="bg-white p-3.5 rounded-xl border border-emerald-200 sm:col-span-2 flex items-center justify-between shadow-md text-slate-900">
                      <div>
                        <span className="text-[#365314] block text-[11px] font-bold">Rata-rata Skor Seleksi</span>
                        <span className="text-xs text-slate-600">Matematika, IPA & Bahasa Indonesia</span>
                      </div>
                      <div className="text-2xl font-black text-[#4d7c0f] font-mono tabular-nums">
                        {submittedProof.skor}
                      </div>
                    </div>
                  </div>

                  {/* Instructions */}
                  <div className="bg-emerald-950/40 border border-white/25 p-4 rounded-xl text-xs text-emerald-50 space-y-1 mb-6 backdrop-blur-sm">
                    <span className="font-bold block text-white">Tahap Selanjutnya:</span>
                    <p>1. Jadwal wawancara & tes penempatan minat diadakan tanggal 10 Desember 2026 di Aula Utama SMP6 JEMBER.</p>
                    <p>2. Konfirmasi pendaftaran juga telah dikirimkan ke nomor WhatsApp orang tua.</p>
                  </div>

                  {/* Print & Reset Actions */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/20">
                    <button
                      onClick={() => {
                        setSubmittedProof(null);
                        setStep(1);
                      }}
                      className="text-xs font-semibold text-emerald-100 hover:text-white transition-colors cursor-pointer"
                    >
                      ← Daftarkan Calon Siswa Lain
                    </button>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => window.print()}
                        className="px-4 py-2.5 text-xs font-bold text-white bg-white/20 hover:bg-white/30 rounded-xl flex items-center gap-2 transition-colors border border-white/30 cursor-pointer"
                      >
                        <Printer className="w-4 h-4 text-white" />
                        Cetak Bukti Registrasi
                      </button>
                      <button
                        onClick={() => {
                          setActiveTab('status');
                          setSearchQuery(submittedProof.nomorPendaftaran);
                          setSearchResult(submittedProof);
                        }}
                        className="px-5 py-2.5 text-xs font-extrabold text-[#365314] bg-white hover:bg-emerald-50 rounded-xl shadow-md transition-colors cursor-pointer"
                      >
                        Pantau Status di Pelacak
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* Multi-step Registration Form - Green Box with White Text */
              <div className="bg-gradient-to-br from-[#4d7c0f] via-[#558b2f] to-[#689f38] text-white rounded-3xl p-6 sm:p-10 shadow-2xl shadow-emerald-950/25 border border-emerald-300/40 relative overflow-hidden">
                <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -left-16 -top-16 w-64 h-64 bg-emerald-300/15 rounded-full blur-3xl pointer-events-none" />
                
                <div className="relative z-10">
                  {/* Step indicator */}
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/20 text-xs">
                    <div className={`flex items-center gap-2 font-bold ${step >= 1 ? 'text-white' : 'text-emerald-100/70'}`}>
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black ${step >= 1 ? 'bg-white text-[#4d7c0f]' : 'bg-white/20 text-white'}`}>1</span>
                      <span>Data Calon Siswa</span>
                    </div>
                    <div className="h-0.5 flex-1 mx-3 bg-white/20" />
                    <div className={`flex items-center gap-2 font-bold ${step >= 2 ? 'text-white' : 'text-emerald-100/70'}`}>
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black ${step >= 2 ? 'bg-white text-[#4d7c0f]' : 'bg-white/20 text-white'}`}>2</span>
                      <span>Wali & Kontak</span>
                    </div>
                    <div className="h-0.5 flex-1 mx-3 bg-white/20" />
                    <div className={`flex items-center gap-2 font-bold ${step >= 3 ? 'text-white' : 'text-emerald-100/70'}`}>
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black ${step >= 3 ? 'bg-white text-[#4d7c0f]' : 'bg-white/20 text-white'}`}>3</span>
                      <span>Jalur & Nilai Rapor</span>
                    </div>
                  </div>

                  <form onSubmit={handleSubmitForm} className="space-y-6">
                    {/* Step 1: Calon Siswa */}
                    {step === 1 && (
                      <div className="space-y-4 animate-fade-in">
                        <h3 className="text-lg font-bold text-white">1. Identitas Calon Siswa Baru</h3>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-semibold text-emerald-100 mb-1.5">
                              Nama Lengkap Siswa *
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="Contoh: Kayla Safira Andini"
                              value={formData.namaLengkap}
                              onChange={(e) => setFormData({ ...formData, namaLengkap: e.target.value })}
                              className="w-full px-3.5 py-2.5 text-sm bg-white text-slate-900 border border-emerald-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-white transition-colors placeholder:text-slate-400 font-medium"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-emerald-100 mb-1.5">
                              NISN (Nomor Induk Siswa Nasional) *
                            </label>
                            <input
                              type="text"
                              required
                              maxLength={10}
                              placeholder="10 digit angka resmi Kemdikbud"
                              value={formData.nisn}
                              onChange={(e) => setFormData({ ...formData, nisn: e.target.value.replace(/\D/g, '') })}
                              className="w-full px-3.5 py-2.5 text-sm bg-white text-slate-900 border border-emerald-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-white font-mono transition-colors placeholder:text-slate-400 font-medium"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-emerald-100 mb-1.5">
                              Asal Sekolah Dasar (SD/MI) *
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="Contoh: SD Negeri 01 Menteng Pagi"
                              value={formData.asalSekolah}
                              onChange={(e) => setFormData({ ...formData, asalSekolah: e.target.value })}
                              className="w-full px-3.5 py-2.5 text-sm bg-white text-slate-900 border border-emerald-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-white transition-colors placeholder:text-slate-400 font-medium"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-emerald-100 mb-1.5">
                              Jenis Kelamin *
                            </label>
                            <select
                              value={formData.jenisKelamin}
                              onChange={(e) => setFormData({ ...formData, jenisKelamin: e.target.value })}
                              className="w-full px-3.5 py-2.5 text-sm bg-white text-slate-900 border border-emerald-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-white transition-colors font-medium"
                            >
                              <option value="Laki-laki">Laki-laki</option>
                              <option value="Perempuan">Perempuan</option>
                            </select>
                          </div>
                        </div>

                        <div className="pt-4 flex justify-end">
                          <button
                            type="button"
                            onClick={() => {
                              if (!formData.namaLengkap || !formData.nisn || !formData.asalSekolah) {
                                alert('Harap isi Nama Siswa, NISN, dan Asal Sekolah!');
                                return;
                              }
                              setStep(2);
                            }}
                            className="px-6 py-2.5 text-xs font-extrabold text-[#365314] bg-white hover:bg-emerald-50 active:bg-emerald-100 rounded-xl shadow-md transition-all cursor-pointer"
                          >
                            Lanjut: Data Orang Tua →
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Step 2: Orang Tua & Kontak */}
                    {step === 2 && (
                      <div className="space-y-4 animate-fade-in">
                        <h3 className="text-lg font-bold text-white">2. Data Orang Tua / Wali & Kontak</h3>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-semibold text-emerald-100 mb-1.5">
                              Nama Ayah / Ibu / Wali *
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="Contoh: Ir. Bambang Hermanto"
                              value={formData.namaWali}
                              onChange={(e) => setFormData({ ...formData, namaWali: e.target.value })}
                              className="w-full px-3.5 py-2.5 text-sm bg-white text-slate-900 border border-emerald-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-white transition-colors placeholder:text-slate-400 font-medium"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-emerald-100 mb-1.5">
                              Nomor WhatsApp Aktif (Untuk Notifikasi PPDB) *
                            </label>
                            <input
                              type="tel"
                              required
                              placeholder="Contoh: 08123456789"
                              value={formData.whatsapp}
                              onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                              className="w-full px-3.5 py-2.5 text-sm bg-white text-slate-900 border border-emerald-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-white transition-colors placeholder:text-slate-400 font-medium"
                            />
                          </div>

                          <div className="sm:col-span-2">
                            <label className="block text-xs font-semibold text-emerald-100 mb-1.5">
                              Alamat Domisili Sesuai Kartu Keluarga *
                            </label>
                            <textarea
                              rows={2}
                              placeholder="Nama Jalan, RT/RW, Kelurahan, Kecamatan, Kota"
                              value={formData.alamat}
                              onChange={(e) => setFormData({ ...formData, alamat: e.target.value })}
                              className="w-full px-3.5 py-2.5 text-sm bg-white text-slate-900 border border-emerald-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-white transition-colors placeholder:text-slate-400 font-medium"
                            />
                          </div>
                        </div>

                        <div className="pt-4 flex justify-between">
                          <button
                            type="button"
                            onClick={() => setStep(1)}
                            className="px-4 py-2 text-xs font-semibold text-emerald-100 hover:text-white transition-colors cursor-pointer"
                          >
                            ← Kembali
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              if (!formData.namaWali || !formData.whatsapp) {
                                alert('Harap isi Nama Wali dan Nomor WhatsApp aktif!');
                                return;
                              }
                              setStep(3);
                            }}
                            className="px-6 py-2.5 text-xs font-extrabold text-[#365314] bg-white hover:bg-emerald-50 active:bg-emerald-100 rounded-xl shadow-md transition-all cursor-pointer"
                          >
                            Lanjut: Jalur & Rapor →
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Step 3: Jalur & Nilai */}
                    {step === 3 && (
                      <div className="space-y-5 animate-fade-in">
                        <h3 className="text-lg font-bold text-white">3. Pilihan Jalur & Rekap Nilai Rapor SD</h3>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-semibold text-emerald-100 mb-1.5">
                              Pilih Jalur PPDB *
                            </label>
                            <select
                              value={formData.jalur}
                              onChange={(e) => setFormData({ ...formData, jalur: e.target.value as any })}
                              className="w-full px-3.5 py-2.5 text-sm bg-white text-slate-900 border border-emerald-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-white transition-colors font-medium"
                            >
                              <option value="Prestasi">Jalur Prestasi (Nilai Rapor & Piagam)</option>
                              <option value="Zonasi">Jalur Zonasi Domisili Wilayah</option>
                              <option value="Afirmasi">Jalur Afirmasi Keluarga Prasejahtera</option>
                              <option value="Perpindahan Orang Tua">Jalur Perpindahan Tugas Dinas Orang Tua</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-emerald-100 mb-1.5">
                              Pilihan Program Kelas *
                            </label>
                            <select
                              value={formData.programPilihan}
                              onChange={(e) => setFormData({ ...formData, programPilihan: e.target.value })}
                              className="w-full px-3.5 py-2.5 text-sm bg-white text-slate-900 border border-emerald-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-white transition-colors font-medium"
                            >
                              {PROGRAMS.map((p) => (
                                <option key={p.id} value={p.title}>
                                  {p.title}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        {/* Nilai Rapor Inputs */}
                        <div className="p-4 bg-emerald-950/30 rounded-2xl border border-white/25 space-y-3 backdrop-blur-sm">
                          <span className="text-xs font-bold text-white block">
                            Nilai Rata-rata Rapor SD Kelas 4 - 6 (Skala 0 - 100):
                          </span>
                          <div className="grid grid-cols-3 gap-3">
                            <div>
                              <label className="block text-[11px] font-medium text-emerald-200 mb-1">Matematika</label>
                              <input
                                type="number"
                                min="0"
                                max="100"
                                value={formData.nilaiMatematika}
                                onChange={(e) => setFormData({ ...formData, nilaiMatematika: e.target.value })}
                                className="w-full px-3 py-2 text-sm bg-white text-slate-900 border border-emerald-200 rounded-lg text-center font-bold"
                              />
                            </div>
                            <div>
                              <label className="block text-[11px] font-medium text-emerald-200 mb-1">IPA Terpadu</label>
                              <input
                                type="number"
                                min="0"
                                max="100"
                                value={formData.nilaiIpa}
                                onChange={(e) => setFormData({ ...formData, nilaiIpa: e.target.value })}
                                className="w-full px-3 py-2 text-sm bg-white text-slate-900 border border-emerald-200 rounded-lg text-center font-bold"
                              />
                            </div>
                            <div>
                              <label className="block text-[11px] font-medium text-emerald-200 mb-1">B. Indonesia</label>
                              <input
                                type="number"
                                min="0"
                                max="100"
                                value={formData.nilaiIndo}
                                onChange={(e) => setFormData({ ...formData, nilaiIndo: e.target.value })}
                                className="w-full px-3 py-2 text-sm bg-white text-slate-900 border border-emerald-200 rounded-lg text-center font-bold"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="pt-4 flex justify-between items-center">
                          <button
                            type="button"
                            onClick={() => setStep(2)}
                            className="px-4 py-2 text-xs font-semibold text-emerald-100 hover:text-white transition-colors cursor-pointer"
                          >
                            ← Kembali
                          </button>
                          <button
                            type="submit"
                            className="px-8 py-3 text-xs font-extrabold text-[#365314] bg-white hover:bg-emerald-50 active:bg-emerald-100 rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer"
                          >
                            <CheckCircle2 className="w-4 h-4" />
                            Kirim Formulir PPDB & Terbitkan Bukti
                          </button>
                        </div>
                      </div>
                    )}
                  </form>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Cek Status Pendaftaran Real-Time - Green Box with White Text */}
        {activeTab === 'status' && (
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="bg-gradient-to-br from-[#4d7c0f] via-[#558b2f] to-[#689f38] text-white rounded-3xl p-6 sm:p-8 shadow-2xl shadow-emerald-950/25 border border-emerald-300/40 relative overflow-hidden">
              <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -left-16 -top-16 w-64 h-64 bg-emerald-300/15 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-2">
                  Pelacak Status Kelulusan & Verifikasi
                </h3>
                <p className="text-xs sm:text-sm text-emerald-100 mb-6">
                  Ketik Nomor Pendaftaran (cth: PPDB-SMP6JBR-0081) atau NISN 10 digit untuk memeriksa status verifikasi berkas dan penerimaan siswa di SMP6 JEMBER.
                </p>

                <form onSubmit={handleSearchStatus} className="flex gap-2 mb-4">
                  <input
                    type="text"
                    placeholder="Masukkan Nomor Registrasi / NISN / Nama Siswa..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 px-4 py-3 text-sm bg-white text-slate-900 border border-emerald-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-white font-medium placeholder:text-slate-400"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 text-xs font-extrabold text-[#365314] bg-white hover:bg-emerald-50 active:bg-emerald-100 rounded-xl flex items-center gap-1.5 shrink-0 shadow-md cursor-pointer transition-colors"
                  >
                    <Search className="w-4 h-4" />
                    Cari Data
                  </button>
                </form>

                {/* Quick sample chips for one-click testing */}
                <div className="flex flex-wrap items-center gap-2 text-xs text-emerald-100 pt-1">
                  <span>Coba Data Sampel:</span>
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery('0092348172');
                      setSearchResult(registrations[0]);
                      setSearchError('');
                    }}
                    className="px-2.5 py-1 bg-white/20 hover:bg-white/30 text-white rounded-md font-mono text-[11px] border border-white/25 transition-colors cursor-pointer"
                  >
                    Kayla (Diterima)
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery('0091873641');
                      setSearchResult(registrations[1]);
                      setSearchError('');
                    }}
                    className="px-2.5 py-1 bg-white/20 hover:bg-white/30 text-white rounded-md font-mono text-[11px] border border-white/25 transition-colors cursor-pointer"
                  >
                    Arka (Terverifikasi)
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery('0094567890');
                      setSearchResult(registrations[3]);
                      setSearchError('');
                    }}
                    className="px-2.5 py-1 bg-white/20 hover:bg-white/30 text-white rounded-md font-mono text-[11px] border border-white/25 transition-colors cursor-pointer"
                  >
                    Rizky (Menunggu)
                  </button>
                </div>

                {searchError && (
                  <div className="mt-4 p-4 rounded-xl bg-rose-900/60 border border-rose-300/40 text-rose-100 text-xs flex items-center gap-2 backdrop-blur-sm">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{searchError}</span>
                  </div>
                )}

                {/* Found Result Card */}
                {searchResult && (
                  <div className="mt-6 p-6 rounded-2xl bg-emerald-950/40 border border-white/30 shadow-md animate-fade-in space-y-4 text-white backdrop-blur-sm">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-[11px] font-mono text-emerald-200 block uppercase">
                          {searchResult.nomorPendaftaran}
                        </span>
                        <h4 className="text-lg font-bold text-white">
                          {searchResult.namaLengkap}
                        </h4>
                        <p className="text-xs text-emerald-100">Asal: {searchResult.asalSekolah}</p>
                      </div>

                      <span className="px-3 py-1 text-xs font-bold rounded-full bg-white text-[#365314] shadow-sm">
                        {searchResult.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs pt-2 border-t border-white/20">
                      <div>
                        <span className="text-emerald-200 block text-[11px]">Jalur Pendaftaran</span>
                        <span className="font-semibold text-white">{searchResult.jalur}</span>
                      </div>
                      <div>
                        <span className="text-emerald-200 block text-[11px]">Skor Penilaian</span>
                        <span className="font-bold text-white font-mono">{searchResult.skor}</span>
                      </div>
                      <div className="col-span-2">
                        <span className="text-emerald-200 block text-[11px]">Program Kelas Pilihan</span>
                        <span className="font-semibold text-white">{searchResult.programPilihan}</span>
                      </div>
                    </div>

                    {searchResult.status === 'Diterima' && (
                      <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl text-white text-xs font-medium border border-white/30">
                        Selamat! Anda dinyatakan LULUS seleksi PPDB SMP6 JEMBER. Silakan lakukan proses daftar ulang online sebelum 15 Desember 2026.
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
