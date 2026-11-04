import { Program, StudentReport, PpdbRegistration, Extracurricular, SchoolNews, Teacher } from '../types';

export const SCHOOL_INFO = {
  name: 'SMP Nusantara Unggul',
  tagline: 'Mencetak Generasi Berakhlak Mulia, Cerdas, dan Berwawasan Global',
  npsn: '20108921',
  akreditasi: 'A (Unggul) 98/100',
  alamat: 'Jl. Merdeka Pendidikan No. 45, Kebayoran Baru, Jakarta Selatan 12160',
  telepon: '(021) 789-2345',
  whatsapp: '+62 812-9876-5432',
  email: 'info@smpnusantaraunggul.sch.id',
  kepalaSekolah: 'Dr. Hj. Siti Rahmawati, M.Pd.',
  kurikulum: 'Kurikulum Merdeka Mandiri Berbagi & Cambridge Secondary Preparation',
};

export const PROGRAMS: Program[] = [
  {
    id: 'prog-1',
    title: 'Kelas Bilingual & Persiapan Cambridge',
    category: 'Akademik Internasional',
    rating: 4.9,
    studentsCount: 320,
    guruPembimbing: 'Sarah Jenkins, M.Ed. & Rian Pratama, S.Pd.',
    description: 'Program pengantar dwibahasa (Bahasa Inggris & Bahasa Indonesia) dengan kurikulum terintegrasi Cambridge Lower Secondary untuk Matematika, Sains, dan Bahasa Inggris.',
    features: [
      'Pembelajaran bilingual sehari-hari (English Immersion)',
      'Persiapan sertifikasi resmi Cambridge Checkpoint',
      'Native speaker guest lecture setiap semester',
      'Fasilitas Smart Digital Interactive Board'
    ],
    schedule: 'Senin - Jumat, 07.00 - 15.00 WIB'
  },
  {
    id: 'prog-2',
    title: 'Laboratorium Sains & STEM Robotika',
    category: 'Sains & Teknologi',
    rating: 4.9,
    studentsCount: 280,
    guruPembimbing: 'Ir. Ahmad Zulkarnain, S.Kom., M.T.',
    description: 'Pusat eksplorasi sains aplikatif, perakitan robotik, pengenalan IoT, dasar coding Scratch/Python, dan pencetakan prototype 3D untuk menumbuhkan nalar kritis siswa.',
    features: [
      'Kit robotika Arduino dan lengan mekanik interaktif',
      'Laboratorium basah & kering dengan standar keamanan tinggi',
      'Pembinaan intensif Olimpiade Penelitian Siswa Indonesia (OPSI)',
      'Eksebisi tahunan Inovasi Teknologi Siswa'
    ],
    schedule: 'Selasa & Kamis, 13.30 - 15.30 WIB'
  },
  {
    id: 'prog-3',
    title: 'Program Tahfidz & Penguatan Karakter',
    category: 'Bina Karakter',
    rating: 4.9,
    studentsCount: 350,
    guruPembimbing: 'Ustadz M. Fahmi Ridwan, Al-Hafidz',
    description: 'Pembinaan hafalan Al-Qur\'an metode Talaqqi dengan target minimal hafalan Juz 30 & Juz pilihan, diiringi pembiasaan adab, empati sosial, dan kepemimpinan akhlak mulia.',
    features: [
      'Bimbingan hafalan terstruktur setiap pagi hari (Tahfidz Morning)',
      'Sertifikasi wisuda Tahfidz tahunan bersama orang tua',
      'Kajian adab, kepribadian santun, dan program infaq sosial',
      'Tersedia pendampingan spiritual & konseling ramah anak'
    ],
    schedule: 'Senin - Kamis, 06.30 - 07.15 WIB'
  },
  {
    id: 'prog-4',
    title: 'Klinik Olimpiade & Bakat Berprestasi (OSN/FLS2N)',
    category: 'Prestasi & Kompetisi',
    rating: 4.9,
    studentsCount: 190,
    guruPembimbing: 'Dewi Anggraini, S.Si. & Tim Pelatih Juara',
    description: 'Mentoring intensif bagi siswa bertalenta tinggi untuk berkompetisi di Olimpiade Sains Nasional (OSN), Festival Seni Siswa (FLS2N), dan Olimpiade Olahraga (O2SN).',
    features: [
      'Silabus khusus pemecahan soal olimpiade tingkat lanjut',
      'Mentoring langsung dari alumni pemenang medali emas nasional',
      'Simulasi tes CBT berkala standar Puspresnas Kemdikbud',
      'Beasiswa SPP penuh bagi peraih medali'
    ],
    schedule: 'Rabu & Sabtu, 08.00 - 12.00 WIB'
  }
];

export const DEMO_STUDENT_REPORTS: StudentReport[] = [
  {
    nisn: '0081234567',
    nama: 'Aisyah Putri Azzahra',
    kelas: 'VIII-A (Bilingual Unggulan)',
    semester: 'Semester 1 (Ganjil)',
    tahunAjaran: '2025/2026',
    waliKelas: 'Sarah Jenkins, M.Ed.',
    peringkat: 1,
    totalSiswa: 32,
    nilai: [
      { mataPelajaran: 'Pendidikan Agama & Budi Pekerti', kkm: 75, nilaiAkhir: 96, predikat: 'A', catatan: 'Sangat memahami ajaran dan berakhlak terpuji di lingkungan sekolah.' },
      { mataPelajaran: 'Pendidikan Pancasila & Kewarganegaraan', kkm: 75, nilaiAkhir: 94, predikat: 'A', catatan: 'Mampu berpikir kritis dan menjunjung toleransi serta gotong royong.' },
      { mataPelajaran: 'Bahasa Indonesia', kkm: 75, nilaiAkhir: 93, predikat: 'A', catatan: 'Unggul dalam literasi, penulisan artikel ilmiah, dan presentasi.' },
      { mataPelajaran: 'Bahasa Inggris (Cambridge English)', kkm: 75, nilaiAkhir: 98, predikat: 'A', catatan: 'Kemampuan komunikasi verbal dan listening setara CEFR B1.' },
      { mataPelajaran: 'Matematika Terapan', kkm: 75, nilaiAkhir: 95, predikat: 'A', catatan: 'Sangat terampil dalam aljabar dan pemodelan statistika.' },
      { mataPelajaran: 'Ilmu Pengetahuan Alam (IPA Terpadu)', kkm: 75, nilaiAkhir: 97, predikat: 'A', catatan: 'Aktif merancang eksperimen laboratorium dan penalaran sains.' },
      { mataPelajaran: 'Ilmu Pengetahuan Sosial (IPS)', kkm: 75, nilaiAkhir: 92, predikat: 'A', catatan: 'Mampu menganalisis dinamika keruangan dan interaksi sosial.' },
      { mataPelajaran: 'Informatika & Robotika', kkm: 75, nilaiAkhir: 98, predikat: 'A', catatan: 'Menguasai algoritma pemrograman visual dan automasi sensor.' },
      { mataPelajaran: 'Pendidikan Jasmani & Kesehatan', kkm: 75, nilaiAkhir: 90, predikat: 'A', catatan: 'Kebugaran fisik sangat prima dan sportivitas tinggi.' },
      { mataPelajaran: 'Seni Budaya & Prakarya', kkm: 75, nilaiAkhir: 91, predikat: 'A', catatan: 'Kreatif dalam karya visual dan mengapresiasi kearifan lokal.' }
    ],
    presensi: {
      hadir: 108,
      sakit: 1,
      izin: 0,
      tanpaKeterangan: 0
    },
    ekskul: [
      { nama: 'Robotika & STEM Club', predikat: 'Sangat Baik (A)', keterangan: 'Ketua Tim Juara 1 Nasional Lomba Robot Rancang Bangun 2025' },
      { nama: 'Pramuka Penggalang Inti', predikat: 'Sangat Baik (A)', keterangan: 'Aktif memimpin regu melati dan disiplin tinggi' }
    ],
    catatanWaliKelas: 'Aisyah menunjukkan komitmen belajar dan kepemimpinan yang luar biasa. Pertahankan semangat belajar dan kerendahan hati!'
  },
  {
    nisn: '0089876543',
    nama: 'Farel Raditya Pratama',
    kelas: 'VII-C (Reguler Mandiri)',
    semester: 'Semester 1 (Ganjil)',
    tahunAjaran: '2025/2026',
    waliKelas: 'Bambang Trianto, S.Pd.',
    peringkat: 3,
    totalSiswa: 34,
    nilai: [
      { mataPelajaran: 'Pendidikan Agama & Budi Pekerti', kkm: 75, nilaiAkhir: 88, predikat: 'B', catatan: 'Tertib dalam ibadah dan santun terhadap guru serta rekan.' },
      { mataPelajaran: 'Pendidikan Pancasila & Kewarganegaraan', kkm: 75, nilaiAkhir: 90, predikat: 'A', catatan: 'Memahami nilai-nilai kebangsaan secara mendalam.' },
      { mataPelajaran: 'Bahasa Indonesia', kkm: 75, nilaiAkhir: 89, predikat: 'B', catatan: 'Kemampuan mengapresiasi cerpen dan debat sangat baik.' },
      { mataPelajaran: 'Bahasa Inggris', kkm: 75, nilaiAkhir: 92, predikat: 'A', catatan: 'Kosakata luas dan pelafalan bahasa Inggris sangat jelas.' },
      { mataPelajaran: 'Matematika Terapan', kkm: 75, nilaiAkhir: 94, predikat: 'A', catatan: 'Logika matematika cepat dan akurat dalam berhitung.' },
      { mataPelajaran: 'Ilmu Pengetahuan Alam (IPA Terpadu)', kkm: 75, nilaiAkhir: 91, predikat: 'A', catatan: 'Teliti dalam pengamatan biologi dan fisika dasar.' },
      { mataPelajaran: 'Ilmu Pengetahuan Sosial (IPS)', kkm: 75, nilaiAkhir: 87, predikat: 'B', catatan: 'Antusias mempelajari sejarah nusantara.' },
      { mataPelajaran: 'Informatika & Robotika', kkm: 75, nilaiAkhir: 93, predikat: 'A', catatan: 'Mahir memanfaatkan aplikasi perkantoran dan computational thinking.' },
      { mataPelajaran: 'Pendidikan Jasmani & Kesehatan', kkm: 75, nilaiAkhir: 96, predikat: 'A', catatan: 'Pemain inti tim bola basket sekolah.' },
      { mataPelajaran: 'Seni Budaya & Prakarya', kkm: 75, nilaiAkhir: 88, predikat: 'B', catatan: 'Karya kerajinan tangan rapi dan estetik.' }
    ],
    presensi: {
      hadir: 106,
      sakit: 2,
      izin: 1,
      tanpaKeterangan: 0
    },
    ekskul: [
      { nama: 'Bola Basket Putra', predikat: 'Sangat Baik (A)', keterangan: 'Top scorer pertandingan antarpelajar se-DKI Jakarta' },
      { nama: 'English Club', predikat: 'Baik (B)', keterangan: 'Berpartisipasi aktif dalam sesi spelling bee' }
    ],
    catatanWaliKelas: 'Farel memiliki bakat kepemimpinan dan minat olahraga yang hebat didukung nilai akademik yang cemerlang.'
  }
];

export const INITIAL_PPDB_LIST: PpdbRegistration[] = [
  {
    id: 'PPDB-2026-001',
    nomorPendaftaran: 'PPDB-SMPNU-0081',
    namaLengkap: 'Kayla Safira Andini',
    nisn: '0092348172',
    asalSekolah: 'SD Negeri Menteng 01 Pagi',
    jalur: 'Prestasi',
    programPilihan: 'Kelas Bilingual & Persiapan Cambridge',
    status: 'Diterima',
    tanggalDaftar: '01 Nov 2026',
    skor: 94.6
  },
  {
    id: 'PPDB-2026-002',
    nomorPendaftaran: 'PPDB-SMPNU-0082',
    namaLengkap: 'Muhammad Arka Daniswara',
    nisn: '0091873641',
    asalSekolah: 'SD Islam Al-Azhar Pusat',
    jalur: 'Zonasi',
    programPilihan: 'Laboratorium Sains & STEM Robotika',
    status: 'Terverifikasi',
    tanggalDaftar: '02 Nov 2026',
    skor: 91.2
  },
  {
    id: 'PPDB-2026-003',
    nomorPendaftaran: 'PPDB-SMPNU-0083',
    namaLengkap: 'Nadia Zahrani Putri',
    nisn: '0098765412',
    asalSekolah: 'SDIT Nurul Fikri',
    jalur: 'Prestasi',
    programPilihan: 'Program Tahfidz & Penguatan Karakter',
    status: 'Diterima',
    tanggalDaftar: '02 Nov 2026',
    skor: 96.0
  },
  {
    id: 'PPDB-2026-004',
    nomorPendaftaran: 'PPDB-SMPNU-0084',
    namaLengkap: 'Rizky Jonathan Siregar',
    nisn: '0094567890',
    asalSekolah: 'SD Tarakanita 1 Jakarta',
    jalur: 'Zonasi',
    programPilihan: 'Kelas Bilingual & Persiapan Cambridge',
    status: 'Menunggu Verifikasi',
    tanggalDaftar: '03 Nov 2026',
    skor: 88.5
  }
];

export const EXTRACURRICULARS: Extracurricular[] = [
  {
    id: 'ekskul-1',
    name: 'Robotika & Coding IoT',
    category: 'Sains & Teknologi',
    mentor: 'Ir. Ahmad Zulkarnain',
    day: 'Rabu & Sabtu',
    time: '14.00 - 16.00 WIB',
    location: 'Lab Robotik Lt. 3',
    members: 42,
    description: 'Mempelajari perakitan mikrokontroler, sensor pintar, pemrograman C++, dan kompetisi robot nasional.',
    achievements: ['Juara 1 Indonesia Robotic Olympiad 2025', 'Juara 2 Line Follower Nasional'],
    image: '/images/ekskul_robotika_coding_1793769468822.jpg'
  },
  {
    id: 'ekskul-2',
    name: 'Pramuka Inti (Gugus Depan Teladan)',
    category: 'Kepanduan',
    mentor: 'Kak Dedi Suryadi',
    day: 'Jumat',
    time: '13.30 - 15.30 WIB',
    location: 'Lapangan Utama & Sanggar Pramuka',
    members: 85,
    description: 'Penanaman jiwa kepemimpinan mandiri, survival keterampilan luar ruang, pionering, dan sandi kepanduan.',
    achievements: ['Juara Umum Lomba Tingkat (LT-III) 2024', 'Regu Berprestasi Tinggi Tingkat Kota'],
    image: '/images/ekskul_pramuka_penggalang_1793769469919.jpg'
  },
  {
    id: 'ekskul-3',
    name: 'Basket Putra & Putri',
    category: 'Olahraga',
    mentor: 'Coach Hendra Wijaya',
    day: 'Selasa & Kamis',
    time: '15.30 - 17.30 WIB',
    location: 'Gelanggang Olahraga SMP',
    members: 55,
    description: 'Latihan teknik dasar dribbling, shooting, kerjasama tim, dan kebugaran atletik berstandar PERBASI.',
    achievements: ['Juara 1 DBL Junior South Jakarta Cup', 'Juara 2 Kejuaraan Antar Pelajar 2025'],
    image: '/images/ekskul_basket_sekolah_1793769470030.jpg'
  },
  {
    id: 'ekskul-4',
    name: 'Paduan Suara & Ansambel Musik',
    category: 'Seni & Budaya',
    mentor: 'Clara Hartono, S.Sn.',
    day: 'Senin & Rabu',
    time: '14.00 - 16.00 WIB',
    location: 'Studio Musik Akustik',
    members: 38,
    description: 'Eksplorasi olah vokal paduan suara, aransemen lagu daerah, serta alat musik kolintang dan orkestra mini.',
    achievements: ['Gold Medal Bali International Choir Festival', 'Penyaji Terbaik FLS2N Tingkat Provinsi'],
    image: '/images/ekskul_paduan_suara_1793769471714.jpg'
  },
  {
    id: 'ekskul-5',
    name: 'English Debate & Public Speaking Club',
    category: 'Bahasa',
    mentor: 'Sarah Jenkins, M.Ed.',
    day: 'Kamis',
    time: '14.30 - 16.00 WIB',
    location: 'Mini Amphitheater Perpustakaan',
    members: 30,
    description: 'Asah kemampuan berargumen dalam Bahasa Inggris standar Parliamentary Debate, storytelling, dan MUN Junior.',
    achievements: ['Best Speaker National Junior Debate Championship', 'Top 5 Storytelling Se-Jabodetabek'],
    image: '/images/ekskul_english_debate_1793769471297.jpg'
  },
  {
    id: 'ekskul-6',
    name: 'Palang Merah Remaja (PMR Madya)',
    category: 'Kepanduan',
    mentor: 'dr. Indah Permatasari',
    day: 'Sabtu',
    time: '08.00 - 10.30 WIB',
    location: 'Ruang UKS & Aula',
    members: 46,
    description: 'Pelatihan pertolongan pertama pada kecelakaan (P3K), kesiapsiagaan bencana, dan kampanye kesehatan remaja.',
    achievements: ['Juara 1 Pertolongan Pertama PMR Madya PMI', 'Sekolah Siaga Sehat Tingkat Nasional'],
    image: '/images/ekskul_pmr_p3k_1793769471361.jpg'
  }
];

export const TESTIMONIALS = [
  {
    id: 't-1',
    nama: 'Dr. Ir. Hendro Prabowo',
    peran: 'Orang Tua Siswa (Aisyah Putri - Kelas VIII)',
    rating: 5,
    kutipan: 'SMP Nusantara Unggul memberikan keseimbangan luar biasa antara prestasi akademik dan penanaman adab. Putri kami tidak hanya percaya diri berbicara dalam forum internasional, namun juga santun dan tekun beribadah.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    tags: 'Wali Murid Bilingual'
  },
  {
    id: 't-2',
    nama: 'Bagus Wicaksono',
    peran: 'Alumni 2023 · Kini Siswa Unggulan SMAN 8 Jakarta',
    rating: 5,
    kutipan: 'Fondasi sains dan kemampuan riset yang saya pelajari di Lab STEM SMP Nusantara Unggul sangat membantu saya saat masuk SMA favorit. Guru-gurunya membimbing kami dengan penuh kesabaran dan standar tinggi.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    tags: 'Alumni Berprestasi'
  },
  {
    id: 't-3',
    nama: 'Dewi Lestari, S.E., M.M.',
    peran: 'Orang Tua Siswa (Farel Raditya - Kelas VII)',
    rating: 5,
    kutipan: 'Proses pendaftaran PPDB online sangat transparan, sistem pelaporan rapor digital mudah dipantau dari aplikasi orang tua, dan pembinaan ekstrakurikuler basketnya benar-benar profesional.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
    tags: 'Wali Murid Kelas VII'
  }
];

export const SCHOOL_NEWS: SchoolNews[] = [
  {
    id: 'news-1',
    title: 'Pembukaan Pendaftaran PPDB Tahun Ajaran 2026/2027 Telah Resmi Dimulai',
    category: 'Pengumuman',
    date: '02 November 2026',
    author: 'Panitia PPDB',
    excerpt: 'Pendaftaran gelombang pertama dibuka untuk jalur Zonasi, Prestasi Akademik/Non-Akademik, serta Beasiswa Tahfidz Al-Qur\'an.',
    content: 'SMP Nusantara Unggul secara resmi membuka Penerimaan Peserta Didik Baru (PPDB) Tahun Ajaran 2026/2027. Mengacu pada petunjuk teknis dinas pendidikan, pendaftaran dilaksanakan secara daring terpusat melalui portal resmi ini. Calon peserta didik dapat memilih jalur zonasi domisili, jalur prestasi nilai rapor SD, piagam kejuaraan, atau afirmasi keluarga prasejahtera. Kuota tahun ini disiapkan untuk 8 rombongan belajar dengan fasilitas smart classroom terpadu.',
    readTime: '3 menit'
  },
  {
    id: 'news-2',
    title: 'Tim Robotika SMP Nusantara Unggul Sabet Juara 1 Nasional Rancang Bangun IoT',
    category: 'Prestasi',
    date: '28 Oktober 2026',
    author: 'Humas Sekolah',
    excerpt: 'Inovasi alat penyiram hidroponik otomatis berbasis sensor kelembapan tanah karya siswa kelas VIII berhasil memikat dewan juri.',
    content: 'Prestasi membanggakan kembali diraih delegasi siswa SMP Nusantara Unggul dalam ajang Kompetisi Teknologi Pelajar Nasional 2026 di ICE BSD. Tim yang dipimpin Aisyah Putri Azzahra dan Muhammad Arka menciptakan sistem smart irrigation yang ramah lingkungan dan hemat daya. Kepala Sekolah mengapresiasi kerja keras siswa serta dedikasi guru pembimbing laboratorium robotik.',
    readTime: '4 menit'
  },
  {
    id: 'news-3',
    title: 'Gelar Karya Proyek Penguatan Profil Pelajar Pancasila (P5): Bhinneka Tunggal Ika',
    category: 'Kegiatan',
    date: '20 Oktober 2026',
    author: 'Tim Kurikulum',
    excerpt: 'Ratusan siswa memamerkan karya seni nusantara, kuliner tradisional, dan pementasan teater musikal di lapangan utama.',
    content: 'Suasana semarak mewarnai seluruh penjuru sekolah dalam agenda Gelar Karya P5 semester ini. Mengusung tema kebinekaan dan kewirausahaan ramah lingkungan, siswa kelas VII hingga IX menyajikan stand interaktif, produk olahan daur ulang, serta pagelaran busana adat 38 provinsi di hadapan komite sekolah dan orang tua murid.',
    readTime: '3 menit'
  }
];

export const FAQS = [
  {
    q: 'Kapan periode pendaftaran PPDB SMP Nusantara Unggul 2026/2027 dibuka?',
    a: 'Pendaftaran PPDB Gelombang I dibuka mulai tanggal 1 November hingga 20 Desember 2026. Calon siswa dapat mendaftar langsung secara online melalui situs ini atau datang langsung ke Helpdesk PPDB di gedung tata usaha sekolah pada hari kerja pukul 08.00 - 15.00 WIB.'
  },
  {
    q: 'Apa saja berkas persyaratan yang diperlukan untuk pendaftaran online?',
    a: 'Berkas yang perlu disiapkan antara lain: Kartu Keluarga (KK), Akta Kelahiran, Rapor SD/MI kelas 4–6 semester 1, Surat Keterangan Lulus / NISN aktif, dan fotokopi piagam prestasi resmi (khusus pendaftar Jalur Prestasi).'
  },
  {
    q: 'Bagaimana cara mengecek status pendaftaran PPDB setelah mendaftar?',
    a: 'Anda dapat memasukkan Nomor Pendaftaran PPDB atau 10 digit NISN calon siswa pada kotak pelacak "Cek Status PPDB" di bagian PPDB Online pada halaman ini. Status akan diperbarui secara real-time.'
  },
  {
    q: 'Apakah sekolah menyediakan beasiswa bagi siswa berprestasi dan kurang mampu?',
    a: 'Ya, kami menyediakan Beasiswa Pendidikan Penuh (bebas biaya operasional sekolah selama 3 tahun) untuk peraih medali OSN/FLS2N tingkat nasional dan hafidz Qur\'an minimal 5 juz, serta beasiswa afirmasi bersubsidi untuk keluarga kurang mampu yang terdata dalam DTKS.'
  },
  {
    q: 'Bagaimana orang tua memantau perkembangan nilai dan kehadiran harian siswa?',
    a: 'Orang tua dapat memanfaatkan fitur "Portal Siswa / Rapor Digital" pada website ini dengan memasukkan NISN siswa. Selain itu, sekolah menggunakan aplikasi absensi kartu pintar (RFID) yang otomatis mengirim notifikasi kehadiran ke WhatsApp orang tua.'
  }
];

export const TEACHERS: Teacher[] = [
  {
    id: 'guru-1',
    nama: 'Dr. Hj. Siti Rahmawati, M.Pd.',
    jabatan: 'Kepala Sekolah',
    bidangStudi: 'Manajemen Pendidikan & Pedagogi Unggul',
    kategori: 'Pimpinan',
    pendidikan: 'S3 Manajemen Pendidikan Universitas Negeri Jakarta',
    pengalaman: '24 Tahun Pengabdian',
    sertifikasi: 'Kepala Sekolah Penggerak Nasional',
    jamKonsultasi: 'Selasa & Kamis, 09.00 - 11.00 WIB',
    email: 'kepsek@smpnusantaraunggul.sch.id',
    bio: 'Berdedikasi memimpin transformasi Kurikulum Merdeka dan lingkungan sekolah ramah anak yang berwawasan global.',
    foto: '/images/teacher_kepala_sekolah_1793760252276.jpg'
  },
  {
    id: 'guru-2',
    nama: 'Sarah Jenkins, M.Ed.',
    jabatan: 'Koordinator Cambridge & Guru B. Inggris',
    bidangStudi: 'English Language & Global Perspectives',
    kategori: 'Bahasa & Literasi',
    pendidikan: 'Master of Education, University of Melbourne',
    pengalaman: '11 Tahun Mengajar',
    sertifikasi: 'Cambridge Assessment International Education (CAIE)',
    jamKonsultasi: 'Senin & Rabu, 13.00 - 15.00 WIB',
    email: 'sarah.jenkins@smpnusantaraunggul.sch.id',
    bio: 'Membimbing program Cambridge Lower Secondary dan melatih kemampuan debat bahasa Inggris siswa ke panggung nasional.',
    foto: '/images/teacher_cambridge_english_1793760252105.jpg'
  },
  {
    id: 'guru-3',
    nama: 'Ir. Ahmad Zulkarnain, S.Kom., M.T.',
    jabatan: 'Kepala Lab Robotik & Guru Informatika',
    bidangStudi: 'Informatika, IoT & Robotika Cerdas',
    kategori: 'MIPA & Teknologi',
    pendidikan: 'S2 Teknik Informatika Institut Teknologi Bandung',
    pengalaman: '14 Tahun Mengajar',
    sertifikasi: 'Pelatih Robotika Nasional & Certified Python Educator',
    jamKonsultasi: 'Rabu & Jumat, 10.00 - 12.00 WIB',
    email: 'a.zulkarnain@smpnusantaraunggul.sch.id',
    bio: 'Membina tim inovasi robotika siswa yang rutin merebut medali emas dalam kompetisi teknologi nasional dan internasional.',
    foto: '/images/teacher_robotics_stem_1793760253179.jpg'
  },
  {
    id: 'guru-4',
    nama: 'Dewi Anggraini, S.Si.',
    jabatan: 'Waka Kurikulum & Pembina OSN IPA',
    bidangStudi: 'Ilmu Pengetahuan Alam (Fisika & Biologi)',
    kategori: 'MIPA & Teknologi',
    pendidikan: 'S1 Pendidikan Fisika Universitas Indonesia',
    pengalaman: '13 Tahun Mengajar',
    sertifikasi: 'Sertifikasi Pendidik Profesional & Pembina Olimpiade Sains',
    jamKonsultasi: 'Senin & Kamis, 08.30 - 10.30 WIB',
    email: 'dewi.anggraini@smpnusantaraunggul.sch.id',
    bio: 'Menjadikan sains praktikum yang menyenangkan dan aktif membimbing riset ilmiah siswa dalam ajang OPSI.',
    foto: '/images/teacher_science_curriculum_1793760253940.jpg'
  },
  {
    id: 'guru-5',
    nama: 'Ustadz M. Fahmi Ridwan, Al-Hafidz',
    jabatan: 'Koordinator Program Tahfidz & Guru PAI',
    bidangStudi: 'Pendidikan Agama Islam & Tahfidz Al-Qur\'an',
    kategori: 'Karakter & Agama',
    pendidikan: 'S1 Studi Islam Universitas Al-Azhar Kairo / IIQ',
    pengalaman: '10 Tahun Mengajar',
    sertifikasi: 'Sanad Hafalan Al-Qur\'an 30 Juz Mutqin',
    jamKonsultasi: 'Selasa & Jumat, 07.30 - 09.30 WIB',
    email: 'fahmi.ridwan@smpnusantaraunggul.sch.id',
    bio: 'Membimbing hafalan Qur\'an metode mutqin dengan pendekatan yang lembut, ramah anak, dan mengedepankan adab keseharian.',
    foto: '/images/teacher_tahfidz_quran_1793760276590.jpg'
  },
  {
    id: 'guru-6',
    nama: 'Coach Hendra Wijaya, S.Pd.',
    jabatan: 'Guru PJOK & Pembina Atletik',
    bidangStudi: 'Pendidikan Jasmani, Olahraga & Kesehatan',
    kategori: 'Olahraga & Seni',
    pendidikan: 'S1 Pendidikan Kepelatihan Olahraga UNJ',
    pengalaman: '9 Tahun Mengajar',
    sertifikasi: 'Lisensi Pelatih Bola Basket PERBASI B & Kebugaran Remaja',
    jamKonsultasi: 'Rabu & Sabtu, 09.00 - 11.00 WIB',
    email: 'hendra.wijaya@smpnusantaraunggul.sch.id',
    bio: 'Menanamkan jiwa sportivitas, daya tahan fisik, serta mengantar tim basket SMP meraih gelar juara DBL Junior.',
    foto: '/images/teacher_sports_coach_1793760277219.jpg'
  },
  {
    id: 'guru-7',
    nama: 'Clara Hartono, S.Sn.',
    jabatan: 'Guru Seni Budaya & Pelatih Paduan Suara',
    bidangStudi: 'Seni Musik, Olah Vokal & Teater Nusantara',
    kategori: 'Olahraga & Seni',
    pendidikan: 'S1 Seni Musik Institut Seni Indonesia (ISI)',
    pengalaman: '8 Tahun Mengajar',
    sertifikasi: 'Kondektur Paduan Suara Tingkat Internasional',
    jamKonsultasi: 'Selasa & Kamis, 13.00 - 14.30 WIB',
    email: 'clara.hartono@smpnusantaraunggul.sch.id',
    bio: 'Mengembangkan apresiasi musik tradisional dan mengorkestrasi paduan suara sekolah hingga menembus festival paduan suara dunia.',
    foto: '/images/teacher_arts_music_1793760277611.jpg'
  },
  {
    id: 'guru-8',
    nama: 'Dra. Endang Purwaningsih, M.Psi., Psikolog',
    jabatan: 'Koordinator Bimbingan Konseling (BK)',
    bidangStudi: 'Psikologi Perkembangan Remaja & Asesmen Bakat',
    kategori: 'Karakter & Agama',
    pendidikan: 'Magister Psikologi Profesi Universitas Gadjah Mada',
    pengalaman: '19 Tahun Pengabdian',
    sertifikasi: 'Psikolog Klinis Anak & Remaja HIMPSI',
    jamKonsultasi: 'Senin - Jumat, 08.00 - 14.00 WIB',
    email: 'bk.konseling@smpnusantaraunggul.sch.id',
    bio: 'Menyediakan pendampingan kesehatan mental, konsultasi peminatan karir masa depan, serta bimbingan belajar ramah siswa.',
    foto: '/images/teacher_counselor_psychologist_1793760277480.jpg'
  }
];

