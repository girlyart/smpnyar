import React, { useState } from 'react';
import { FAQS, SCHOOL_INFO } from '../data/schoolData';
import { ChevronDown, MapPin, Phone, Mail, Send, CheckCircle2, MessageCircle } from 'lucide-react';

export const FaqContact: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [messageSent, setMessageSent] = useState(false);
  const [contactForm, setContactForm] = useState({
    nama: '',
    emailOrWa: '',
    subjek: 'Informasi PPDB',
    pesan: ''
  });

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.nama || !contactForm.emailOrWa || !contactForm.pesan) {
      alert('Mohon isi semua data pesan!');
      return;
    }
    setMessageSent(true);
    setTimeout(() => {
      setMessageSent(false);
      setContactForm({
        nama: '',
        emailOrWa: '',
        subjek: 'Informasi PPDB',
        pesan: ''
      });
    }, 4500);
  };

  return (
    <section id="kontak" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* FAQ Column (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#558b2f]">
                Pusat Bantuan
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Pertanyaan yang Sering Diajukan (FAQ)
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Informasi seputar seleksi PPDB, program beasiswa, dan tata tertib sekolah.
              </p>
            </div>

            <div className="space-y-3">
              {FAQS.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="border border-slate-200/90 rounded-2xl overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 bg-slate-50/50 hover:bg-slate-50 transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-[#558b2f]' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="p-4 sm:p-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Column (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#558b2f]">
                Layanan Informasi & Lokasi
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Hubungi Kami & Kunjungan Sekolah
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Konsultasikan kebutuhan pendidikan putra-putri Anda bersama tim humas kami.
              </p>
            </div>

            {/* Contact Information Cards - Green Box with White Text */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="bg-gradient-to-br from-[#4d7c0f] to-[#558b2f] text-white p-4.5 rounded-2xl shadow-md shadow-emerald-950/10 border border-emerald-400/30 space-y-1.5">
                <div className="flex items-center gap-2 text-white font-bold text-xs">
                  <MapPin className="w-4 h-4 text-emerald-200 shrink-0" />
                  <span className="tracking-wide">Alamat Sekolah:</span>
                </div>
                <p className="text-xs text-emerald-50 pl-6 leading-relaxed">
                  {SCHOOL_INFO.alamat}
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#4d7c0f] to-[#558b2f] text-white p-4.5 rounded-2xl shadow-md shadow-emerald-950/10 border border-emerald-400/30 space-y-1.5">
                <div className="flex items-center gap-2 text-white font-bold text-xs">
                  <MessageCircle className="w-4 h-4 text-emerald-200 shrink-0" />
                  <span className="tracking-wide">WhatsApp Helpdesk:</span>
                </div>
                <p className="text-xs font-mono font-bold text-white pl-6">
                  {SCHOOL_INFO.whatsapp}
                </p>
                <div className="flex items-center gap-2 text-white font-bold text-xs pt-1">
                  <Phone className="w-4 h-4 text-emerald-200 shrink-0" />
                  <span className="tracking-wide">Telepon Kantor:</span>
                </div>
                <p className="text-xs font-mono text-emerald-100 pl-6">
                  {SCHOOL_INFO.telepon}
                </p>
              </div>
            </div>

            {/* Quick Interactive Contact Form - Green Box with White Text */}
            <div className="bg-gradient-to-br from-[#4d7c0f] via-[#558b2f] to-[#689f38] text-white p-6 sm:p-7 rounded-3xl shadow-xl shadow-emerald-950/20 border border-emerald-400/35 relative overflow-hidden">
              {/* Soft ambient lighting */}
              <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -left-12 -top-12 w-48 h-48 bg-emerald-300/15 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10">
                <h4 className="text-base sm:text-lg font-bold text-white mb-1 leading-snug">
                  Kirim Pesan Langsung ke Tata Usaha
                </h4>
                <p className="text-xs text-emerald-100/90 mb-4">
                  Pertanyaan Anda akan langsung ditindaklanjuti oleh staf administrasi sekolah.
                </p>

                {messageSent ? (
                  <div className="p-4 rounded-xl bg-white/20 backdrop-blur-md text-white text-xs flex items-center gap-2.5 font-medium border border-white/30">
                    <CheckCircle2 className="w-5 h-5 text-emerald-200 shrink-0" />
                    <span>Terima kasih! Pesan Anda telah terkirim. Tim Tata Usaha kami akan menghubungi via WhatsApp/Email dalam 1x24 jam kerja.</span>
                  </div>
                ) : (
                  <form onSubmit={handleSendMessage} className="space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="text"
                        required
                        placeholder="Nama Lengkap Orang Tua..."
                        value={contactForm.nama}
                        onChange={(e) => setContactForm({ ...contactForm, nama: e.target.value })}
                        className="px-3.5 py-2.5 text-xs bg-white text-slate-800 placeholder:text-slate-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/80 shadow-xs font-medium"
                      />
                      <input
                        type="text"
                        required
                        placeholder="No. WhatsApp / Email..."
                        value={contactForm.emailOrWa}
                        onChange={(e) => setContactForm({ ...contactForm, emailOrWa: e.target.value })}
                        className="px-3.5 py-2.5 text-xs bg-white text-slate-800 placeholder:text-slate-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/80 shadow-xs font-medium"
                      />
                    </div>

                    <select
                      value={contactForm.subjek}
                      onChange={(e) => setContactForm({ ...contactForm, subjek: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-white text-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/80 shadow-xs font-medium"
                    >
                      <option value="Informasi PPDB">Pertanyaan Seputar PPDB 2026</option>
                      <option value="Jadwal Tur Sekolah">Permohonan Kunjungan Sekolah & Tur Fasilitas</option>
                      <option value="Konsultasi Biaya / Beasiswa">Konsultasi Beasiswa Prestasi</option>
                      <option value="Kerjasama Pendidikan">Kerjasama & Undangan Kompetisi</option>
                    </select>

                    <textarea
                      required
                      rows={3}
                      placeholder="Tuliskan pertanyaan atau kebutuhan Anda..."
                      value={contactForm.pesan}
                      onChange={(e) => setContactForm({ ...contactForm, pesan: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-white text-slate-800 placeholder:text-slate-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/80 shadow-xs font-medium"
                    />

                    <button
                      type="submit"
                      className="px-6 py-2.5 text-xs font-bold text-[#558b2f] bg-white hover:bg-emerald-50 rounded-xl transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Kirim Pesan</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
