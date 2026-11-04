import React, { useState } from 'react';
import { DEMO_STUDENT_REPORTS } from '../data/schoolData';
import { StudentReport } from '../types';
import { X, Search, Award, CheckCircle2, AlertCircle, Printer, BookOpen, Clock, Calendar } from 'lucide-react';

interface StudentPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StudentPortalModal: React.FC<StudentPortalModalProps> = ({ isOpen, onClose }) => {
  const [nisnInput, setNisnInput] = useState('0081234567');
  const [currentReport, setCurrentReport] = useState<StudentReport | null>(DEMO_STUDENT_REPORTS[0]);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    const cleanNisn = nisnInput.trim();
    const found = DEMO_STUDENT_REPORTS.find((s) => s.nisn === cleanNisn);
    if (found) {
      setCurrentReport(found);
    } else {
      setErrorMsg('Data siswa dengan NISN tersebut tidak ditemukan. Silakan gunakan sampel NISN yang tersedia.');
      setCurrentReport(null);
    }
  };

  const calculateAverage = (report: StudentReport) => {
    const total = report.nilai.reduce((acc, curr) => acc + curr.nilaiAkhir, 0);
    return (total / report.nilai.length).toFixed(1);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-3 sm:p-4 animate-fade-in overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-4xl w-full my-6 p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[92vh] overflow-y-auto relative">
        
        {/* Modal Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#558b2f] uppercase tracking-wide">
              <Award className="w-3.5 h-3.5 text-[#7cb342]" />
              <span>Sistem Informasi Rapor Akademik Terpadu (e-Rapor SMP)</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
              Portal Akademik & Rapor Digital Siswa
            </h3>
            <p className="text-xs text-slate-500">
              Pantau capaian kompetensi belajar, catatan pembinaan wali kelas, dan absensi harian.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-100 transition-colors"
            aria-label="Tutup Portal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search NISN Bar */}
        <div className="mt-4 bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Ketik 10 digit NISN Siswa..."
                value={nisnInput}
                onChange={(e) => setNisnInput(e.target.value)}
                className="w-full px-4 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-[#7cb342] font-mono"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-2.5 text-xs font-bold text-white bg-[#7cb342] hover:bg-[#689f38] rounded-xl flex items-center justify-center gap-1.5 shrink-0"
            >
              <Search className="w-4 h-4" />
              Buka Rapor
            </button>
          </form>

          {/* Preset Buttons for Quick Preview */}
          <div className="flex flex-wrap items-center gap-2 mt-3 text-xs text-slate-500">
            <span>Pilih Siswa Contoh:</span>
            {DEMO_STUDENT_REPORTS.map((item) => (
              <button
                key={item.nisn}
                type="button"
                onClick={() => {
                  setNisnInput(item.nisn);
                  setCurrentReport(item);
                  setErrorMsg('');
                }}
                className={`px-3 py-1 rounded-lg text-xs font-medium border transition-colors ${
                  currentReport?.nisn === item.nisn
                    ? 'bg-[#7cb342] text-white border-[#7cb342]'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                {item.nama} ({item.kelas})
              </button>
            ))}
          </div>
        </div>

        {errorMsg && (
          <div className="mt-4 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Student Report Content */}
        {currentReport && (
          <div className="mt-6 space-y-6">
            
            {/* Student Header Card */}
            <div className="bg-gradient-to-r from-emerald-50 via-slate-50 to-teal-50 p-5 rounded-2xl border border-emerald-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-bold text-[#558b2f] tracking-wide uppercase">
                  NISN: {currentReport.nisn} · {currentReport.kelas}
                </span>
                <h4 className="text-xl font-black text-slate-900">{currentReport.nama}</h4>
                <div className="text-xs text-slate-600 flex flex-wrap items-center gap-3">
                  <span>Wali Kelas: <strong>{currentReport.waliKelas}</strong></span>
                  <span>·</span>
                  <span>{currentReport.semester} TA {currentReport.tahunAjaran}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-xl border border-emerald-200/60 shrink-0">
                <div className="text-center pr-3 border-r border-slate-200">
                  <span className="text-[10px] text-slate-500 font-bold uppercase block">Rata-rata</span>
                  <span className="text-2xl font-black text-[#558b2f] font-mono tabular-nums">
                    {calculateAverage(currentReport)}
                  </span>
                </div>
                <div className="text-center">
                  <span className="text-[10px] text-slate-500 font-bold uppercase block">Peringkat</span>
                  <span className="text-xl font-black text-slate-900 font-mono">
                    #{currentReport.peringkat} <span className="text-xs font-normal text-slate-500">/ {currentReport.totalSiswa}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Subject Scores Table */}
            <div>
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-[#7cb342]" />
                Rincian Nilai Capaian Kompetensi Kurikulum Merdeka
              </h5>
              
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                    <tr>
                      <th className="py-2.5 px-3">Mata Pelajaran</th>
                      <th className="py-2.5 px-3 text-center">KKM</th>
                      <th className="py-2.5 px-3 text-center">Nilai Akhir</th>
                      <th className="py-2.5 px-3 text-center">Predikat</th>
                      <th className="py-2.5 px-3">Catatan Kompetensi Guru</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {currentReport.nilai.map((n, i) => (
                      <tr key={i} className="hover:bg-slate-50/60 transition-colors">
                        <td className="py-2.5 px-3 font-semibold text-slate-900">{n.mataPelajaran}</td>
                        <td className="py-2.5 px-3 text-center font-mono text-slate-500">{n.kkm}</td>
                        <td className="py-2.5 px-3 text-center font-mono font-bold text-slate-900">{n.nilaiAkhir}</td>
                        <td className="py-2.5 px-3 text-center">
                          <span className={`inline-block px-2 py-0.5 rounded font-bold text-[11px] ${
                            n.predikat === 'A' ? 'bg-emerald-100 text-emerald-800' : 'bg-blue-100 text-blue-800'
                          }`}>
                            {n.predikat}
                          </span>
                        </td>
                        <td className="py-2.5 px-3 text-slate-600 text-[11px] leading-relaxed max-w-xs">{n.catatan}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Attendance & Extracurriculars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Attendance Presensi */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 space-y-2">
                <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#7cb342]" />
                  Rekapitulasi Kehadiran Siswa
                </span>
                <div className="grid grid-cols-4 gap-2 pt-1 text-center">
                  <div className="bg-white p-2 rounded-lg border border-slate-200">
                    <span className="text-[10px] text-slate-500 block">Hadir</span>
                    <span className="text-base font-bold text-emerald-600 font-mono">{currentReport.presensi.hadir}</span>
                  </div>
                  <div className="bg-white p-2 rounded-lg border border-slate-200">
                    <span className="text-[10px] text-slate-500 block">Sakit</span>
                    <span className="text-base font-bold text-amber-600 font-mono">{currentReport.presensi.sakit}</span>
                  </div>
                  <div className="bg-white p-2 rounded-lg border border-slate-200">
                    <span className="text-[10px] text-slate-500 block">Izin</span>
                    <span className="text-base font-bold text-blue-600 font-mono">{currentReport.presensi.izin}</span>
                  </div>
                  <div className="bg-white p-2 rounded-lg border border-slate-200">
                    <span className="text-[10px] text-slate-500 block">Alpha</span>
                    <span className="text-base font-bold text-slate-600 font-mono">{currentReport.presensi.tanpaKeterangan}</span>
                  </div>
                </div>
              </div>

              {/* Ekstrakurikuler */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 space-y-2">
                <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#7cb342]" />
                  Aktivitas Ekstrakurikuler
                </span>
                <div className="space-y-1.5 pt-1 text-xs">
                  {currentReport.ekskul.map((e, idx) => (
                    <div key={idx} className="bg-white p-2 rounded-lg border border-slate-200 flex items-center justify-between">
                      <div>
                        <span className="font-bold text-slate-800 block text-[11px]">{e.nama}</span>
                        <span className="text-[10px] text-slate-500">{e.keterangan}</span>
                      </div>
                      <span className="text-[10px] font-bold text-[#558b2f] bg-emerald-50 px-2 py-0.5 rounded">
                        {e.predikat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Catatan Wali Kelas */}
            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/70 text-xs text-amber-950">
              <span className="font-bold block mb-1">Catatan Bimbingan Wali Kelas:</span>
              <p className="italic leading-relaxed">"{currentReport.catatanWaliKelas}"</p>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] text-slate-400">
                Terverifikasi tanda tangan digital Kepala Sekolah & Wali Kelas.
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => window.print()}
                  className="px-4 py-2 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center gap-1.5"
                >
                  <Printer className="w-3.5 h-3.5" />
                  Cetak Lembar Rapor
                </button>
                <button
                  onClick={onClose}
                  className="px-5 py-2 text-xs font-bold text-white bg-[#7cb342] hover:bg-[#689f38] rounded-lg shadow-sm"
                >
                  Selesai
                </button>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
