export interface Program {
  id: string;
  title: string;
  category: string;
  rating: number;
  studentsCount: number;
  guruPembimbing: string;
  description: string;
  features: string[];
  schedule: string;
  image?: string;
}

export interface StudentReport {
  nisn: string;
  nama: string;
  kelas: string;
  semester: string;
  tahunAjaran: string;
  waliKelas: string;
  peringkat: number;
  totalSiswa: number;
  nilai: {
    mataPelajaran: string;
    kkm: number;
    nilaiAkhir: number;
    predikat: 'A' | 'B' | 'C' | 'D';
    catatan: string;
  }[];
  presensi: {
    hadir: number;
    sakit: number;
    izin: number;
    tanpaKeterangan: number;
  };
  ekskul: {
    nama: string;
    predikat: string;
    keterangan: string;
  }[];
  catatanWaliKelas: string;
}

export interface PpdbRegistration {
  id: string;
  nomorPendaftaran: string;
  namaLengkap: string;
  nisn: string;
  asalSekolah: string;
  jalur: 'Zonasi' | 'Prestasi' | 'Afirmasi' | 'Perpindahan Orang Tua';
  programPilihan: string;
  status: 'Menunggu Verifikasi' | 'Terverifikasi' | 'Diterima' | 'Cadangan';
  tanggalDaftar: string;
  skor: number;
}

export interface Extracurricular {
  id: string;
  name: string;
  category: 'Sains & Teknologi' | 'Olahraga' | 'Seni & Budaya' | 'Kepanduan' | 'Bahasa';
  mentor: string;
  day: string;
  time: string;
  location: string;
  members: number;
  description: string;
  achievements: string[];
  image: string;
}

export interface SchoolNews {
  id: string;
  title: string;
  category: 'Akademik' | 'Prestasi' | 'Pengumuman' | 'Kegiatan';
  date: string;
  author: string;
  excerpt: string;
  content: string;
  readTime: string;
}

export interface Teacher {
  id: string;
  nama: string;
  jabatan: string;
  bidangStudi: string;
  kategori: 'Pimpinan' | 'MIPA & Teknologi' | 'Bahasa & Literasi' | 'Karakter & Agama' | 'Olahraga & Seni';
  pendidikan: string;
  pengalaman: string;
  sertifikasi: string;
  jamKonsultasi: string;
  email: string;
  bio: string;
  foto: string;
}

