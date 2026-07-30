const materiData = {
bab1: `
<h2><i class="fas fa-brain"></i> Bab 1: Berpikir Komputasional</h2>
<p class="bab-subtitle">Informatika Kelas X SMA | Kurikulum Merdeka</p>
<div class="img-hero">
  <img src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=900&q=80" alt="Berpikir Komputasional" loading="lazy">
  <p class="img-caption">Berpikir komputasional — fondasi berpikir logis dan sistematis di era digital</p>
</div>

<h3>A. Pengertian Berpikir Komputasional</h3>
<div class="img-wrap">
  <img src="https://images.unsplash.com/photo-1516110833967-0b5716ca1387?w=800&q=80" alt="Problem Solving" loading="lazy">
  <p class="img-caption">Berpikir komputasional membantu manusia memecahkan masalah kompleks secara sistematis</p>
</div>
<p>Berpikir komputasional (Computational Thinking) adalah proses berpikir yang digunakan untuk memformulasikan masalah dan menyusun solusinya sehingga dapat dilaksanakan oleh agen pemrosesan informasi, baik manusia maupun mesin. Konsep ini pertama kali dipopulerkan oleh <strong>Jeannette M. Wing</strong> pada tahun 2006 dalam makalahnya di jurnal Communications of the ACM.</p>
<p>Berpikir komputasional BUKAN berarti berpikir seperti komputer, melainkan berpikir tentang bagaimana memecahkan masalah dengan cara yang efektif, efisien, dan logis — cara yang juga dapat diimplementasikan oleh komputer.</p>
<div class="info-box">
  <p><strong>Definisi Wing (2006):</strong> "Computational thinking involves solving problems, designing systems, and understanding human behavior, by drawing on the concepts fundamental to computer science."</p>
</div>
<p>Dalam kurikulum Merdeka Belajar, berpikir komputasional menjadi fondasi utama pembelajaran informatika karena kemampuan ini dibutuhkan di semua bidang, bukan hanya bidang teknologi.</p>

<h3>B. Empat Pilar Berpikir Komputasional</h3>
<p>Berpikir komputasional terdiri dari empat komponen utama yang saling berkaitan:</p>
<div class="img-grid2">
  <div class="img-wrap">
    <img src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=600&q=80" alt="Dekomposisi" loading="lazy">
    <p class="img-caption">Dekomposisi — memecah masalah kompleks menjadi bagian yang lebih kecil</p>
  </div>
  <div class="img-wrap">
    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80" alt="Pengenalan Pola" loading="lazy">
    <p class="img-caption">Pengenalan pola — menemukan kesamaan dalam masalah berbeda</p>
  </div>
</div>

<h4>1. Dekomposisi (Decomposition)</h4>
<p>Dekomposisi adalah proses memecah masalah atau sistem yang kompleks menjadi bagian-bagian yang lebih kecil, lebih sederhana, dan lebih mudah dipahami serta diselesaikan. Pendekatan ini menerapkan prinsip <em>divide and conquer</em> (bagi dan taklukkan).</p>
<p><strong>Mengapa dekomposisi penting?</strong></p>
<ul>
  <li>Masalah besar yang tampak tidak mungkin diselesaikan menjadi dapat diatasi bagian per bagian</li>
  <li>Memungkinkan pembagian tugas dalam tim kerja</li>
  <li>Mempermudah identifikasi bagian yang bermasalah tanpa mengganggu keseluruhan sistem</li>
  <li>Meningkatkan efisiensi karena setiap bagian dapat diselesaikan secara paralel</li>
</ul>
<p><strong>Contoh dekomposisi dalam kehidupan nyata:</strong></p>
<ul>
  <li><strong>Membuat website sekolah:</strong> dipecah menjadi → desain tampilan, pembuatan konten, pemrograman fitur, pengujian, dan peluncuran</li>
  <li><strong>Mengorganisir event:</strong> dipecah menjadi → persiapan tempat, undangan peserta, konsumsi, dokumentasi, dan evaluasi</li>
  <li><strong>Menyelesaikan soal matematika kompleks:</strong> dipecah menjadi langkah-langkah penyelesaian yang lebih kecil</li>
</ul>

<h4>2. Pengenalan Pola (Pattern Recognition)</h4>
<p>Pengenalan pola adalah kemampuan untuk mengidentifikasi kesamaan, kemiripan, tren, atau pola berulang dalam suatu masalah atau kumpulan data. Dengan mengenali pola, kita dapat menggunakan pengalaman sebelumnya atau solusi yang telah ada untuk menyelesaikan masalah serupa.</p>
<p><strong>Contoh pengenalan pola:</strong></p>
<ul>
  <li>Mengenali bahwa semua bilangan genap memiliki digit terakhir 0, 2, 4, 6, atau 8</li>
  <li>Mengenali bahwa penjualan toko selalu meningkat menjelang hari raya</li>
  <li>Mengenali pola cuaca: saat awan hitam berkumpul dan angin kencang, kemungkinan akan hujan</li>
  <li>Mengenali bahwa semua makhluk hidup memerlukan energi untuk bertahan hidup</li>
</ul>
<p><strong>Penerapan dalam pemrograman:</strong> Pengenalan pola membantu programmer membuat fungsi yang dapat digunakan kembali (reusable functions) dan membuat template untuk masalah-masalah yang memiliki struktur serupa.</p>

<h4>3. Abstraksi (Abstraction)</h4>
<div class="img-wrap">
  <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80" alt="Abstraksi" loading="lazy">
  <p class="img-caption">Abstraksi — menyembunyikan kompleksitas dan fokus pada informasi yang penting</p>
</div>
<p>Abstraksi adalah proses menyederhanakan masalah dengan cara mengidentifikasi informasi yang relevan dan penting, serta mengabaikan detail yang tidak diperlukan untuk menyelesaikan masalah tersebut. Abstraksi membantu kita fokus pada "apa" tanpa terganggu oleh "bagaimana".</p>
<p><strong>Tingkatan abstraksi dalam sistem komputer:</strong></p>
<div class="table-wrap">
<table>
  <tr><th>Level</th><th>Abstraksi</th><th>Contoh</th></tr>
  <tr><td>Level 6</td><td>Aplikasi</td><td>Antarmuka pengguna (UI), fitur aplikasi</td></tr>
  <tr><td>Level 5</td><td>Bahasa Pemrograman</td><td>Python, Java, C++, JavaScript</td></tr>
  <tr><td>Level 4</td><td>Sistem Operasi</td><td>Windows, Linux, macOS</td></tr>
  <tr><td>Level 3</td><td>Arsitektur Komputer</td><td>CPU, memori, instruksi mesin</td></tr>
  <tr><td>Level 2</td><td>Logika Digital</td><td>Gerbang AND, OR, NOT</td></tr>
  <tr><td>Level 1</td><td>Fisik/Elektronik</td><td>Transistor, sinyal listrik, bit</td></tr>
</table>
</div>
<p><strong>Contoh abstraksi dalam kehidupan:</strong> Ketika mengendarai mobil, kita hanya perlu tahu cara menginjak pedal gas, rem, dan memutar setir — tanpa perlu memahami cara kerja mesin pembakaran internal. Inilah abstraksi.</p>

<h4>4. Algoritma (Algorithm)</h4>
<div class="img-wrap">
  <img src="https://images.unsplash.com/photo-1580894894513-541e068a3e2b?w=800&q=80" alt="Algoritma Flowchart" loading="lazy">
  <p class="img-caption">Algoritma divisualisasikan dalam bentuk flowchart untuk memperjelas alur penyelesaian masalah</p>
</div>
<p>Algoritma adalah sekumpulan instruksi atau langkah-langkah yang terdefinisi dengan jelas, terurut, dan terbatas yang digunakan untuk menyelesaikan suatu masalah atau mencapai tujuan tertentu. Setiap langkah dalam algoritma harus:</p>
<ul>
  <li><strong>Definitif:</strong> Setiap instruksi harus jelas, tidak ambigu, dan dapat dipahami</li>
  <li><strong>Terbatas:</strong> Algoritma harus berhenti setelah sejumlah langkah yang terbatas</li>
  <li><strong>Efektif:</strong> Setiap langkah harus cukup sederhana untuk dapat dilaksanakan</li>
  <li><strong>Input:</strong> Memiliki nol atau lebih data masukan</li>
  <li><strong>Output:</strong> Menghasilkan satu atau lebih keluaran yang sesuai</li>
</ul>

<h3>C. Representasi Algoritma</h3>
<div class="img-grid2">
  <div class="img-wrap">
    <img src="https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=600&q=80" alt="Pseudocode" loading="lazy">
    <p class="img-caption">Pseudocode — penulisan algoritma dalam bahasa semi-formal</p>
  </div>
  <div class="img-wrap">
    <img src="https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&q=80" alt="Flowchart" loading="lazy">
    <p class="img-caption">Flowchart — representasi visual algoritma menggunakan simbol standar</p>
  </div>
</div>

<h4>1. Pseudocode</h4>
<p>Pseudocode adalah cara penulisan algoritma menggunakan campuran bahasa alami dan notasi pemrograman yang tidak terikat pada sintaks bahasa pemrograman tertentu. Tujuannya adalah agar mudah dipahami oleh manusia sebelum diimplementasikan ke dalam kode program.</p>
<div class="code-block">
// Contoh pseudocode: Mencari nilai terbesar
PROCEDURE CariNilaiTerbesar(A, n)
  maks ← A[1]
  UNTUK i ← 2 SAMPAI n LAKUKAN
    JIKA A[i] > maks MAKA
      maks ← A[i]
    AKHIR JIKA
  AKHIR UNTUK
  KEMBALIKAN maks
AKHIR PROCEDURE
</div>

<h4>2. Flowchart (Diagram Alir)</h4>
<p>Flowchart adalah representasi visual dari algoritma menggunakan simbol-simbol geometri standar yang dihubungkan dengan panah untuk menunjukkan alur proses.</p>
<div class="table-wrap">
<table>
  <tr><th>Simbol</th><th>Bentuk</th><th>Fungsi</th></tr>
  <tr><td>Terminal</td><td>Oval/Elips</td><td>Menandai awal (Start) dan akhir (End) algoritma</td></tr>
  <tr><td>Proses</td><td>Persegi panjang</td><td>Operasi pemrosesan atau perhitungan</td></tr>
  <tr><td>Input/Output</td><td>Jajar genjang</td><td>Memasukkan data (input) atau menampilkan hasil (output)</td></tr>
  <tr><td>Keputusan</td><td>Belah ketupat</td><td>Percabangan berdasarkan kondisi (Ya/Tidak)</td></tr>
  <tr><td>Panah/Aliran</td><td>Garis dengan panah</td><td>Menunjukkan arah alur proses</td></tr>
  <tr><td>Konektor</td><td>Lingkaran kecil</td><td>Menghubungkan bagian flowchart yang terpisah</td></tr>
</table>
</div>

<h3>D. Struktur Kontrol dalam Algoritma</h3>
<div class="img-grid3">
  <div class="img-wrap">
    <img src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400&q=80" alt="Sekuensial" loading="lazy">
    <p class="img-caption">Struktur Sekuensial</p>
  </div>
  <div class="img-wrap">
    <img src="https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&q=80" alt="Seleksi" loading="lazy">
    <p class="img-caption">Struktur Seleksi</p>
  </div>
  <div class="img-wrap">
    <img src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80" alt="Perulangan" loading="lazy">
    <p class="img-caption">Struktur Perulangan</p>
  </div>
</div>

<h4>1. Struktur Sekuensial (Sequential)</h4>
<p>Instruksi-instruksi dijalankan satu per satu secara berurutan dari atas ke bawah sesuai dengan urutan penulisannya. Ini adalah struktur paling dasar dalam algoritma.</p>
<div class="code-block">
// Menghitung luas persegi panjang
INPUT panjang
INPUT lebar
luas ← panjang × lebar
OUTPUT luas
</div>

<h4>2. Struktur Seleksi (Selection)</h4>
<p>Instruksi dijalankan hanya jika kondisi tertentu terpenuhi. Terdapat beberapa variasi:</p>
<ul>
  <li><strong>IF-THEN:</strong> Jika kondisi benar, jalankan blok instruksi</li>
  <li><strong>IF-THEN-ELSE:</strong> Jika kondisi benar jalankan blok A, jika tidak jalankan blok B</li>
  <li><strong>IF-THEN-ELSE IF-ELSE:</strong> Pengujian kondisi bertingkat</li>
  <li><strong>CASE/SWITCH:</strong> Pilih satu dari banyak kemungkinan berdasarkan nilai</li>
</ul>
<div class="code-block">
// Menentukan kategori nilai
INPUT nilai
JIKA nilai >= 90 MAKA
  OUTPUT "Sangat Baik"
JIKA TIDAK nilai >= 80 MAKA
  OUTPUT "Baik"
JIKA TIDAK nilai >= 70 MAKA
  OUTPUT "Cukup"
JIKA TIDAK
  OUTPUT "Perlu Perbaikan"
AKHIR JIKA
</div>

<h4>3. Struktur Perulangan (Iteration/Loop)</h4>
<p>Instruksi dijalankan berulang kali selama suatu kondisi masih terpenuhi:</p>
<ul>
  <li><strong>FOR loop:</strong> Perulangan dengan jumlah iterasi yang sudah diketahui sebelumnya</li>
  <li><strong>WHILE loop:</strong> Perulangan yang terus berjalan selama kondisi bernilai benar (dicek di awal)</li>
  <li><strong>DO-WHILE loop:</strong> Seperti WHILE, tetapi kondisi dicek di akhir (minimal 1 kali dijalankan)</li>
</ul>
<div class="code-block">
// Menghitung jumlah 1 sampai 100
jumlah ← 0
UNTUK i ← 1 SAMPAI 100 LAKUKAN
  jumlah ← jumlah + i
AKHIR UNTUK
OUTPUT jumlah  // Hasil: 5050
</div>

<h3>E. Penerapan Berpikir Komputasional dalam Berbagai Bidang</h3>
<div class="img-wrap">
  <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80" alt="Penerapan BK" loading="lazy">
  <p class="img-caption">Berpikir komputasional diterapkan di bidang kesehatan, sains, bisnis, pendidikan, dan seni</p>
</div>
<div class="table-wrap">
<table>
  <tr><th>Bidang</th><th>Penerapan</th><th>Contoh Konkret</th></tr>
  <tr><td>Kedokteran</td><td>Diagnosis berbantuan komputer</td><td>Algoritma mendeteksi tumor dari citra MRI</td></tr>
  <tr><td>Sains</td><td>Simulasi ilmiah</td><td>Model perubahan iklim global</td></tr>
  <tr><td>Bisnis</td><td>Analisis data penjualan</td><td>Rekomendasi produk di e-commerce</td></tr>
  <tr><td>Pendidikan</td><td>Sistem penilaian adaptif</td><td>Soal ujian yang menyesuaikan level siswa</td></tr>
  <tr><td>Transportasi</td><td>Optimasi rute</td><td>Algoritma Google Maps menentukan rute tercepat</td></tr>
  <tr><td>Pertanian</td><td>Pertanian presisi</td><td>Sensor dan AI untuk irigasi otomatis</td></tr>
</table>
</div>
<div class="info-box success">
  <p><strong>Kesimpulan:</strong> Berpikir komputasional adalah keterampilan fundamental abad ke-21 yang diperlukan oleh semua orang, bukan hanya programmer. Kemampuan ini membantu kita memecahkan masalah secara lebih terstruktur dan efisien dalam semua aspek kehidupan.</p>
</div>
`,
bab2: `
<h2><i class="fas fa-satellite-dish"></i> Bab 2: Teknologi Informasi dan Komunikasi</h2>
<p class="bab-subtitle">Informatika Kelas X SMA | Kurikulum Merdeka</p>
<div class="img-hero">
  <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=900&q=80" alt="TIK" loading="lazy">
  <p class="img-caption">Teknologi Informasi dan Komunikasi mengubah cara manusia berinteraksi, bekerja, dan belajar</p>
</div>

<h3>A. Pengertian Teknologi Informasi dan Komunikasi</h3>
<div class="img-wrap">
  <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80" alt="TIK Devices" loading="lazy">
  <p class="img-caption">Berbagai perangkat TIK yang kita gunakan sehari-hari</p>
</div>
<p><strong>Teknologi Informasi (TI)</strong> adalah penggunaan komputer untuk menyimpan, mengambil, mengirim, dan memanipulasi data atau informasi dalam konteks bisnis maupun kehidupan sehari-hari.</p>
<p><strong>Teknologi Komunikasi</strong> adalah penggunaan teknologi untuk menyampaikan atau mentransfer informasi dari satu pihak ke pihak lain, mencakup telepon, radio, televisi, dan internet.</p>
<p><strong>TIK (Teknologi Informasi dan Komunikasi)</strong> adalah payung besar yang mencakup semua teknologi untuk memanipulasi dan mengkomunikasikan informasi. TIK menjadi tulang punggung masyarakat modern karena hampir semua aspek kehidupan saat ini bergantung padanya.</p>

<h3>B. Sejarah Perkembangan Komputer</h3>
<div class="img-wrap">
  <img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80" alt="Sejarah Komputer" loading="lazy">
  <p class="img-caption">Evolusi komputer dari tabung vakum hingga era kecerdasan buatan</p>
</div>

<h4>Generasi Pertama (1946–1959): Tabung Vakum</h4>
<p>Komputer generasi pertama menggunakan tabung vakum sebagai komponen utama. Karakteristiknya:</p>
<ul>
  <li>Ukuran sangat besar (memenuhi satu ruangan)</li>
  <li>Konsumsi listrik sangat tinggi dan menghasilkan panas berlebih</li>
  <li>Pemrograman menggunakan bahasa mesin (binary code)</li>
  <li>Sangat mahal dan hanya dimiliki oleh lembaga pemerintah dan universitas besar</li>
  <li>Contoh: ENIAC (1946), UNIVAC I (1951), IBM 701</li>
</ul>

<h4>Generasi Kedua (1959–1965): Transistor</h4>
<p>Transistor menggantikan tabung vakum, menghasilkan komputer yang lebih kecil, lebih hemat energi, dan lebih andal:</p>
<ul>
  <li>Ukuran jauh lebih kecil dari generasi pertama</li>
  <li>Konsumsi listrik lebih rendah, lebih sedikit panas</li>
  <li>Mulai menggunakan bahasa pemrograman tingkat tinggi (FORTRAN, COBOL)</li>
  <li>Mulai digunakan untuk keperluan bisnis dan industri</li>
  <li>Contoh: IBM 7090, UNIVAC 1107, Honeywell 400</li>
</ul>

<h4>Generasi Ketiga (1965–1971): Integrated Circuit (IC)</h4>
<p>IC (Integrated Circuit) menggabungkan banyak transistor dalam satu chip silikon kecil:</p>
<ul>
  <li>Ukuran semakin kecil, kecepatan semakin tinggi</li>
  <li>Harga mulai terjangkau, mulai digunakan oleh bisnis kecil</li>
  <li>Sistem operasi pertama mulai berkembang</li>
  <li>Muncul monitor dan keyboard sebagai antarmuka</li>
  <li>Contoh: IBM System/360, DEC PDP-8</li>
</ul>

<h4>Generasi Keempat (1971–sekarang): Microprocessor</h4>
<p>Seluruh CPU diintegrasikan dalam satu chip (microprocessor):</p>
<ul>
  <li>Komputer personal (PC) muncul dan dapat dimiliki individu</li>
  <li>Intel 4004 (1971) adalah microprocessor pertama komersial</li>
  <li>Munculnya Apple II (1977), IBM PC (1981)</li>
  <li>Sistem operasi GUI: Apple Macintosh (1984), Windows 3.0 (1990)</li>
  <li>Internet mulai dapat diakses publik secara luas (1990an)</li>
  <li>Smartphone dan tablet (2000an): iPhone (2007), iPad (2010)</li>
</ul>

<h4>Generasi Kelima (sekarang – masa depan): AI dan Komputasi Kuantum</h4>
<ul>
  <li>Kecerdasan Buatan (AI) dan Machine Learning menjadi arus utama</li>
  <li>Internet of Things (IoT): miliaran perangkat terhubung ke internet</li>
  <li>Cloud Computing: komputasi berbasis awan</li>
  <li>Komputasi Kuantum: memanfaatkan mekanika kuantum untuk komputasi ultra-cepat</li>
  <li>Contoh AI: ChatGPT, DALL-E, AlphaGo, autonomous vehicles</li>
</ul>

<h3>C. Komponen Utama TIK</h3>
<div class="img-grid2">
  <div class="img-wrap">
    <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80" alt="Hardware Software" loading="lazy">
    <p class="img-caption">Hardware dan Software — dua pilar utama sistem TIK</p>
  </div>
  <div class="img-wrap">
    <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80" alt="Network" loading="lazy">
    <p class="img-caption">Jaringan dan konektivitas — menghubungkan semua komponen TIK</p>
  </div>
</div>
<div class="table-wrap">
<table>
  <tr><th>Komponen</th><th>Deskripsi</th><th>Contoh</th></tr>
  <tr><td>Perangkat Keras</td><td>Komponen fisik sistem komputer</td><td>CPU, RAM, hard disk, monitor, keyboard</td></tr>
  <tr><td>Perangkat Lunak</td><td>Program yang menjalankan tugas tertentu</td><td>Windows, Chrome, Word, Python</td></tr>
  <tr><td>Jaringan</td><td>Infrastruktur komunikasi data</td><td>Internet, WiFi, LAN, fiber optik</td></tr>
  <tr><td>Data dan Informasi</td><td>Konten yang diproses dan dikomunikasikan</td><td>Teks, gambar, video, database</td></tr>
  <tr><td>Sumber Daya Manusia</td><td>Pengguna dan pengelola sistem TIK</td><td>Programmer, network admin, end user</td></tr>
</table>
</div>

<h3>D. Manfaat TIK dalam Kehidupan</h3>
<div class="img-grid3">
  <div class="img-wrap">
    <img src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&q=80" alt="Pendidikan" loading="lazy">
    <p class="img-caption">Pendidikan Digital</p>
  </div>
  <div class="img-wrap">
    <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80" alt="Kesehatan" loading="lazy">
    <p class="img-caption">Layanan Kesehatan</p>
  </div>
  <div class="img-wrap">
    <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&q=80" alt="Bisnis" loading="lazy">
    <p class="img-caption">Bisnis dan Ekonomi</p>
  </div>
</div>
<ul>
  <li><strong>Pendidikan:</strong> E-learning, MOOC (Massive Open Online Course), perpustakaan digital, pembelajaran adaptif berbasis AI</li>
  <li><strong>Kesehatan:</strong> Rekam medis elektronik, telemedicine, diagnosis berbasis AI, monitoring pasien jarak jauh</li>
  <li><strong>Bisnis dan Ekonomi:</strong> E-commerce, fintech, digital marketing, otomasi proses bisnis, big data analytics</li>
  <li><strong>Pemerintahan:</strong> E-government, layanan publik online, sistem administrasi digital, transparansi data</li>
  <li><strong>Komunikasi:</strong> Email, video conference, media sosial, pesan instan — menghubungkan miliaran orang</li>
  <li><strong>Hiburan:</strong> Streaming film/musik, gaming online, konten kreator digital</li>
</ul>

<h3>E. Dampak Negatif TIK dan Cara Mengatasinya</h3>
<div class="img-wrap">
  <img src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&q=80" alt="Dampak Negatif" loading="lazy">
  <p class="img-caption">Kejahatan siber dan kecanduan digital adalah dampak negatif TIK yang perlu diwaspadai</p>
</div>
<div class="table-wrap">
<table>
  <tr><th>Dampak Negatif</th><th>Deskripsi</th><th>Cara Mengatasi</th></tr>
  <tr><td>Kecanduan Digital</td><td>Ketergantungan berlebihan pada gadget dan medsos</td><td>Batasi waktu layar, digital detox</td></tr>
  <tr><td>Cybercrime</td><td>Kejahatan melalui internet (hacking, phishing)</td><td>Gunakan keamanan berlapis, waspada</td></tr>
  <tr><td>Hoaks dan Disinformasi</td><td>Penyebaran informasi palsu yang masif</td><td>Verifikasi informasi sebelum menyebarkan</td></tr>
  <tr><td>Kesenjangan Digital</td><td>Tidak meratanya akses teknologi</td><td>Program literasi digital untuk semua</td></tr>
  <tr><td>Masalah Privasi</td><td>Data pribadi disalahgunakan</td><td>Pahami kebijakan privasi, batasi data yang dibagikan</td></tr>
  <tr><td>Pengangguran Teknologi</td><td>Otomasi menggantikan pekerjaan manusia</td><td>Reskilling dan upskilling berkelanjutan</td></tr>
</table>
</div>
<div class="info-box warning">
  <p><strong>Bijak Bermedia Digital:</strong> Saring sebelum sharing! Selalu verifikasi kebenaran informasi sebelum menyebarkannya. Gunakan teknologi untuk hal-hal produktif dan batasi penggunaan yang tidak bermanfaat.</p>
</div>
`,
bab3: `
<h2><i class="fas fa-desktop"></i> Bab 3: Sistem Komputer</h2>
<p class="bab-subtitle">Informatika Kelas X SMA | Kurikulum Merdeka</p>
<div class="img-hero">
  <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80" alt="Sistem Komputer" loading="lazy">
  <p class="img-caption">Sistem komputer — integrasi hardware, software, dan brainware yang bekerja bersama</p>
</div>

<h3>A. Pengertian Sistem Komputer</h3>
<p>Sistem komputer adalah kumpulan komponen yang bekerja bersama secara terpadu untuk menerima, memproses, menyimpan, dan menghasilkan informasi. Sistem komputer terdiri dari tiga komponen utama yang saling bergantung:</p>
<ul>
  <li><strong>Hardware (Perangkat Keras):</strong> komponen fisik yang dapat dilihat dan disentuh</li>
  <li><strong>Software (Perangkat Lunak):</strong> program dan instruksi yang menjalankan hardware</li>
  <li><strong>Brainware:</strong> manusia yang mengoperasikan dan mengelola sistem komputer</li>
</ul>

<h3>B. Hardware (Perangkat Keras)</h3>
<div class="img-grid2">
  <div class="img-wrap">
    <img src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=600&q=80" alt="CPU RAM" loading="lazy">
    <p class="img-caption">CPU dan RAM — pusat pemrosesan dan memori kerja komputer</p>
  </div>
  <div class="img-wrap">
    <img src="https://images.unsplash.com/photo-1593640408182-31c228afb5c4?w=600&q=80" alt="Storage" loading="lazy">
    <p class="img-caption">Hard Disk dan SSD — media penyimpanan data permanen</p>
  </div>
</div>

<h4>1. CPU (Central Processing Unit)</h4>
<p>CPU adalah "otak" komputer yang bertanggung jawab mengeksekusi semua instruksi program. CPU terdiri dari tiga unit utama:</p>
<ul>
  <li><strong>ALU (Arithmetic Logic Unit):</strong> melakukan operasi aritmatika (+, -, ×, ÷) dan operasi logika (AND, OR, NOT, perbandingan)</li>
  <li><strong>CU (Control Unit):</strong> mengarahkan dan mengkoordinasikan semua aktivitas CPU, mengambil instruksi dari memori dan mengeksekusinya</li>
  <li><strong>Register:</strong> memori ultra-cepat di dalam CPU untuk menyimpan data yang sedang diproses (kapasitas kecil, kecepatan tertinggi)</li>
</ul>
<p><strong>Parameter penting CPU:</strong></p>
<ul>
  <li><strong>Clock Speed:</strong> kecepatan prosesor dalam Hz (GHz = miliar siklus per detik). Semakin tinggi semakin cepat</li>
  <li><strong>Core Count:</strong> jumlah inti pemrosesan (dual-core, quad-core, octa-core). Lebih banyak core = lebih baik untuk multitasking</li>
  <li><strong>Cache:</strong> memori sangat cepat di dalam CPU (L1, L2, L3 cache)</li>
  <li><strong>Arsitektur:</strong> 32-bit atau 64-bit</li>
</ul>

<h4>2. Memori</h4>
<p>Sistem komputer menggunakan hierarki memori berdasarkan kecepatan dan kapasitas:</p>
<div class="table-wrap">
<table>
  <tr><th>Jenis Memori</th><th>Kecepatan</th><th>Kapasitas</th><th>Sifat</th><th>Fungsi</th></tr>
  <tr><td>Register</td><td>Sangat cepat</td><td>Sangat kecil (bytes)</td><td>Volatile</td><td>Data yang sedang diproses CPU</td></tr>
  <tr><td>Cache (L1/L2/L3)</td><td>Sangat cepat</td><td>Kecil (KB-MB)</td><td>Volatile</td><td>Buffer antara CPU dan RAM</td></tr>
  <tr><td>RAM</td><td>Cepat</td><td>Sedang (GB)</td><td>Volatile</td><td>Memori kerja program aktif</td></tr>
  <tr><td>ROM</td><td>Cepat</td><td>Kecil</td><td>Non-volatile</td><td>BIOS/firmware, instruksi dasar</td></tr>
  <tr><td>SSD</td><td>Cukup cepat</td><td>Besar (GB-TB)</td><td>Non-volatile</td><td>Penyimpanan permanen cepat</td></tr>
  <tr><td>Hard Disk</td><td>Lambat</td><td>Sangat besar (TB)</td><td>Non-volatile</td><td>Penyimpanan permanen kapasitas besar</td></tr>
</table>
</div>

<h4>3. RAM (Random Access Memory)</h4>
<p>RAM adalah memori kerja komputer yang menyimpan data dan program yang sedang aktif berjalan. Disebut "random access" karena data dapat diakses langsung dari mana saja tanpa harus membaca secara berurutan.</p>
<ul>
  <li>Bersifat <strong>volatile</strong>: isi RAM hilang saat komputer dimatikan</li>
  <li>Semakin besar RAM, semakin banyak program yang dapat berjalan bersamaan</li>
  <li>Standar modern: DDR4 atau DDR5</li>
  <li>Kapasitas umum: 8GB (minimum), 16GB (recommended), 32GB+ (profesional)</li>
</ul>

<h4>4. Perangkat Penyimpanan (Storage)</h4>
<ul>
  <li><strong>Hard Disk Drive (HDD):</strong> menggunakan piringan magnetis berputar. Kapasitas besar, harga murah, tapi lebih lambat dari SSD</li>
  <li><strong>Solid State Drive (SSD):</strong> menggunakan chip flash memory. Lebih cepat, lebih ringan, tahan banting, tapi lebih mahal</li>
  <li><strong>Flash Drive (USB):</strong> penyimpanan portable berbasis flash memory</li>
  <li><strong>Optical Disc (DVD/Blu-ray):</strong> penyimpanan berbasis laser</li>
  <li><strong>Cloud Storage:</strong> penyimpanan online di server remote (Google Drive, OneDrive, iCloud)</li>
</ul>

<h4>5. Perangkat Input dan Output</h4>
<div class="img-wrap">
  <img src="https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=800&q=80" alt="Input Output" loading="lazy">
  <p class="img-caption">Perangkat input (keyboard, mouse) dan output (monitor, printer) komputer</p>
</div>
<div class="table-wrap">
<table>
  <tr><th>Kategori</th><th>Perangkat</th><th>Fungsi</th></tr>
  <tr><td rowspan="5">Input</td><td>Keyboard</td><td>Memasukkan teks dan perintah</td></tr>
  <tr><td>Mouse/Touchpad</td><td>Mengendalikan kursor dan berinteraksi dengan GUI</td></tr>
  <tr><td>Kamera/Webcam</td><td>Memasukkan gambar dan video</td></tr>
  <tr><td>Mikrofon</td><td>Memasukkan suara</td></tr>
  <tr><td>Scanner</td><td>Mengkonversi dokumen fisik ke digital</td></tr>
  <tr><td rowspan="4">Output</td><td>Monitor</td><td>Menampilkan gambar dan video</td></tr>
  <tr><td>Printer</td><td>Mencetak dokumen ke media fisik</td></tr>
  <tr><td>Speaker/Headphone</td><td>Menghasilkan suara</td></tr>
  <tr><td>Proyektor</td><td>Menampilkan gambar ke layar besar</td></tr>
</table>
</div>

<h3>C. Software (Perangkat Lunak)</h3>
<div class="img-wrap">
  <img src="https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=800&q=80" alt="Software" loading="lazy">
  <p class="img-caption">Berbagai jenis software yang memungkinkan komputer menjalankan berbagai fungsi</p>
</div>

<h4>1. Sistem Operasi (Operating System)</h4>
<p>Sistem operasi adalah software dasar yang mengelola semua sumber daya hardware dan menyediakan layanan umum bagi program aplikasi. Fungsi utama sistem operasi:</p>
<ul>
  <li><strong>Manajemen Proses:</strong> mengatur eksekusi program dan alokasi CPU</li>
  <li><strong>Manajemen Memori:</strong> mengalokasikan RAM untuk setiap program</li>
  <li><strong>Manajemen File:</strong> mengorganisir dan mengelola file di storage</li>
  <li><strong>Manajemen I/O:</strong> mengelola komunikasi dengan perangkat input/output</li>
  <li><strong>Antarmuka Pengguna:</strong> menyediakan GUI atau CLI</li>
</ul>
<p>Contoh sistem operasi populer: Windows 11, macOS Sonoma, Ubuntu Linux, Android, iOS.</p>

<h4>2. Software Aplikasi</h4>
<p>Software yang dirancang untuk membantu pengguna melakukan tugas-tugas spesifik:</p>
<ul>
  <li><strong>Office Suite:</strong> Microsoft Office, Google Workspace, LibreOffice</li>
  <li><strong>Browser:</strong> Google Chrome, Mozilla Firefox, Safari, Edge</li>
  <li><strong>Multimedia:</strong> VLC, Photoshop, Premiere Pro, Spotify</li>
  <li><strong>Komunikasi:</strong> WhatsApp, Zoom, Microsoft Teams</li>
  <li><strong>Pemrograman:</strong> VS Code, PyCharm, Android Studio</li>
</ul>

<h4>3. Software Utilitas</h4>
<p>Software yang membantu memelihara dan mengoptimalkan kinerja sistem:</p>
<ul>
  <li>Antivirus: Windows Defender, Kaspersky, Norton</li>
  <li>Disk Management: format, partisi, defragmentasi</li>
  <li>Backup dan Recovery: mencadangkan dan memulihkan data</li>
  <li>Compression: ZIP, WinRAR — mengompres dan mengekstrak file</li>
</ul>

<h3>D. Cara Kerja Sistem Komputer: Siklus IPO</h3>
<div class="img-wrap">
  <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80" alt="Siklus IPO" loading="lazy">
  <p class="img-caption">Siklus Input-Process-Output dalam sistem komputer</p>
</div>
<p>Sistem komputer bekerja mengikuti siklus <strong>IPO (Input - Process - Output - Storage)</strong>:</p>
<ol>
  <li><strong>Input:</strong> Data dimasukkan ke komputer melalui perangkat input (keyboard, mouse, kamera, mikrofon, sensor)</li>
  <li><strong>Process:</strong> CPU memproses data sesuai instruksi program yang tersimpan di RAM</li>
  <li><strong>Output:</strong> Hasil pemrosesan ditampilkan atau dikirimkan melalui perangkat output (monitor, printer, speaker)</li>
  <li><strong>Storage:</strong> Data dan hasil dapat disimpan di media penyimpanan untuk digunakan kembali</li>
</ol>
<div class="info-box success">
  <p><strong>Contoh nyata siklus IPO:</strong> Saat mengetik di Word → keyboard (Input) → CPU memproses karakter (Process) → teks muncul di monitor (Output) → Ctrl+S menyimpan ke hard disk (Storage)</p>
</div>

<h3>E. Cara Memilih Komputer yang Tepat</h3>
<div class="table-wrap">
<table>
  <tr><th>Kebutuhan</th><th>Spesifikasi Minimal</th><th>Spesifikasi Rekomendasi</th></tr>
  <tr><td>Belajar dan Tugas Sekolah</td><td>Intel i3/Ryzen 3, 8GB RAM, 256GB SSD</td><td>Intel i5/Ryzen 5, 16GB RAM, 512GB SSD</td></tr>
  <tr><td>Desain Grafis</td><td>Intel i5/Ryzen 5, 16GB RAM, GPU dedicated</td><td>Intel i7/Ryzen 7, 32GB RAM, GPU RTX</td></tr>
  <tr><td>Gaming</td><td>Intel i5/Ryzen 5, 16GB RAM, GPU RTX 3060</td><td>Intel i7/Ryzen 7, 32GB RAM, GPU RTX 4070</td></tr>
  <tr><td>Programming</td><td>Intel i5/Ryzen 5, 16GB RAM, 512GB SSD</td><td>Intel i7/Ryzen 7, 32GB RAM, 1TB SSD</td></tr>
</table>
</div>
`,
bab4: `
<h2><i class="fas fa-network-wired"></i> Bab 4: Jaringan Komputer dan Internet</h2>
<p class="bab-subtitle">Informatika Kelas X SMA | Kurikulum Merdeka</p>
<div class="img-hero">
  <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80" alt="Jaringan Komputer" loading="lazy">
  <p class="img-caption">Jaringan komputer menghubungkan miliaran perangkat di seluruh dunia</p>
</div>

<h3>A. Pengertian Jaringan Komputer</h3>
<div class="img-wrap">
  <img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80" alt="Server Network" loading="lazy">
  <p class="img-caption">Pusat data dengan server yang menghubungkan jutaan pengguna</p>
</div>
<p>Jaringan komputer adalah sekumpulan dua atau lebih komputer dan perangkat lainnya yang saling terhubung melalui media transmisi (kabel atau nirkabel) untuk tujuan berbagi sumber daya (resource sharing) dan pertukaran data/informasi.</p>
<p><strong>Manfaat jaringan komputer:</strong></p>
<ul>
  <li>Berbagi data dan file antar pengguna</li>
  <li>Berbagi perangkat keras (printer, scanner)</li>
  <li>Berbagi koneksi internet</li>
  <li>Komunikasi real-time (email, video call, chat)</li>
  <li>Akses terpusat ke database dan aplikasi</li>
  <li>Sentralisasi backup dan keamanan data</li>
</ul>

<h3>B. Jenis Jaringan Berdasarkan Jangkauan Geografis</h3>
<div class="img-grid2">
  <div class="img-wrap">
    <img src="https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=600&q=80" alt="LAN" loading="lazy">
    <p class="img-caption">LAN — jaringan komputer di lingkungan terbatas seperti sekolah</p>
  </div>
  <div class="img-wrap">
    <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80" alt="Internet" loading="lazy">
    <p class="img-caption">Internet — jaringan WAN terbesar yang menghubungkan seluruh dunia</p>
  </div>
</div>

<h4>1. PAN (Personal Area Network)</h4>
<p>Jaringan dengan jangkauan sangat terbatas, biasanya hanya beberapa meter, untuk menghubungkan perangkat pribadi satu orang.</p>
<ul>
  <li><strong>Jangkauan:</strong> 1–10 meter</li>
  <li><strong>Teknologi:</strong> Bluetooth, Infrared (IrDA), NFC, Zigbee, USB</li>
  <li><strong>Contoh:</strong> Menghubungkan smartphone dengan headset Bluetooth, smartwatch dengan HP, laptop dengan mouse wireless</li>
</ul>

<h4>2. LAN (Local Area Network)</h4>
<p>Jaringan yang mencakup area terbatas seperti satu gedung, beberapa lantai, atau satu kampus. LAN biasanya dimiliki dan dikelola oleh satu organisasi.</p>
<ul>
  <li><strong>Jangkauan:</strong> hingga beberapa kilometer</li>
  <li><strong>Kecepatan:</strong> 10 Mbps – 10 Gbps (Gigabit Ethernet)</li>
  <li><strong>Teknologi:</strong> Ethernet (IEEE 802.3), Wi-Fi (IEEE 802.11)</li>
  <li><strong>Contoh:</strong> Jaringan di laboratorium komputer sekolah, jaringan kantor, jaringan di rumah</li>
</ul>

<h4>3. MAN (Metropolitan Area Network)</h4>
<p>Jaringan yang mencakup satu kota atau wilayah metropolitan, biasanya menghubungkan beberapa LAN.</p>
<ul>
  <li><strong>Jangkauan:</strong> 5–50 km</li>
  <li><strong>Teknologi:</strong> Fiber optik, WiMAX (IEEE 802.16)</li>
  <li><strong>Contoh:</strong> Jaringan TV kabel kota, jaringan antar kampus universitas dalam satu kota, jaringan ATM perbankan dalam satu kota</li>
</ul>

<h4>4. WAN (Wide Area Network)</h4>
<p>Jaringan yang mencakup wilayah sangat luas, bisa melintasi negara atau benua. Internet adalah contoh WAN terbesar di dunia.</p>
<ul>
  <li><strong>Jangkauan:</strong> ribuan kilometer</li>
  <li><strong>Teknologi:</strong> Leased line, MPLS, satelit, fiber optik bawah laut, 4G/5G</li>
  <li><strong>Contoh:</strong> Internet, jaringan perbankan nasional, jaringan perusahaan multinasional</li>
</ul>

<h3>C. Topologi Jaringan</h3>
<p>Topologi jaringan adalah cara pengaturan fisik maupun logis dari komputer dan perangkat dalam suatu jaringan.</p>
<div class="img-grid3">
  <div class="img-wrap">
    <img src="https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=400&q=80" alt="Topologi Bus" loading="lazy">
    <p class="img-caption">Topologi Bus</p>
  </div>
  <div class="img-wrap">
    <img src="https://images.unsplash.com/photo-1612831455740-ff0d46a83e38?w=400&q=80" alt="Topologi Star" loading="lazy">
    <p class="img-caption">Topologi Star</p>
  </div>
  <div class="img-wrap">
    <img src="https://images.unsplash.com/photo-1620714223084-8fcacc2dbed5?w=400&q=80" alt="Topologi Mesh" loading="lazy">
    <p class="img-caption">Topologi Mesh</p>
  </div>
</div>
<div class="table-wrap">
<table>
  <tr><th>Topologi</th><th>Deskripsi</th><th>Kelebihan</th><th>Kekurangan</th></tr>
  <tr><td>Bus</td><td>Semua node ke satu kabel utama (backbone)</td><td>Hemat kabel, mudah dipasang</td><td>Jika backbone putus, jaringan lumpuh total</td></tr>
  <tr><td>Star</td><td>Semua node ke switch/hub pusat</td><td>Mudah dikelola, jika satu node rusak tidak mengganggu lain</td><td>Jika switch pusat rusak, jaringan lumpuh</td></tr>
  <tr><td>Ring</td><td>Membentuk lingkaran tertutup</td><td>Performa stabil, tidak ada collision</td><td>Jika satu node rusak bisa mengganggu seluruh jaringan</td></tr>
  <tr><td>Mesh</td><td>Setiap node ke semua node lain</td><td>Sangat andal, data bisa rute alternatif</td><td>Sangat mahal, instalasi kompleks</td></tr>
  <tr><td>Tree</td><td>Hierarki kombinasi Bus dan Star</td><td>Mudah dikembangkan, hierarki jelas</td><td>Jika node induk rusak, semua di bawahnya terpengaruh</td></tr>
</table>
</div>

<h3>D. Perangkat Jaringan</h3>
<div class="img-grid2">
  <div class="img-wrap">
    <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" alt="Router Switch" loading="lazy">
    <p class="img-caption">Router dan Switch — perangkat utama jaringan komputer</p>
  </div>
  <div class="img-wrap">
    <img src="https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=600&q=80" alt="Kabel Modem" loading="lazy">
    <p class="img-caption">Kabel UTP, Modem, dan Access Point</p>
  </div>
</div>
<ul>
  <li><strong>NIC (Network Interface Card):</strong> kartu jaringan yang terpasang di komputer, memiliki alamat MAC unik 48-bit. Bisa berbasis kabel (Ethernet) atau nirkabel (WiFi).</li>
  <li><strong>Hub:</strong> Perangkat Layer 1 OSI. Meneruskan data ke SEMUA port tanpa filter — menyebabkan banyak collision, sudah jarang digunakan.</li>
  <li><strong>Switch:</strong> Perangkat Layer 2 OSI. Mempelajari alamat MAC dan hanya meneruskan data ke port tujuan yang tepat — lebih efisien dari hub.</li>
  <li><strong>Router:</strong> Perangkat Layer 3 OSI. Menghubungkan jaringan berbeda dan menentukan jalur optimal pengiriman paket menggunakan alamat IP.</li>
  <li><strong>Access Point (AP):</strong> Memungkinkan perangkat WiFi terhubung ke jaringan kabel. Bertindak sebagai jembatan antara jaringan kabel dan nirkabel.</li>
  <li><strong>Modem:</strong> Mengubah sinyal digital ↔ analog untuk komunikasi melalui jalur telepon atau kabel. Nama berasal dari MOdulator-DEModulator.</li>
</ul>

<h3>E. Model OSI dan TCP/IP</h3>
<div class="img-wrap">
  <img src="https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&q=80" alt="Model OSI" loading="lazy">
  <p class="img-caption">Model OSI 7 layer — standar internasional komunikasi jaringan</p>
</div>
<div class="table-wrap">
<table>
  <tr><th>Layer OSI</th><th>Nama</th><th>Fungsi</th><th>Protokol/Perangkat</th></tr>
  <tr><td>7</td><td>Application</td><td>Antarmuka antara aplikasi dan jaringan</td><td>HTTP, HTTPS, FTP, SMTP, DNS</td></tr>
  <tr><td>6</td><td>Presentation</td><td>Format data, enkripsi, kompresi</td><td>SSL/TLS, JPEG, MPEG</td></tr>
  <tr><td>5</td><td>Session</td><td>Membangun dan mengelola sesi komunikasi</td><td>NetBIOS, RPC, SSH</td></tr>
  <tr><td>4</td><td>Transport</td><td>Transfer data end-to-end, segmentasi, error recovery</td><td>TCP, UDP</td></tr>
  <tr><td>3</td><td>Network</td><td>Routing dan pengalamatan logis</td><td>IP, ICMP, Router</td></tr>
  <tr><td>2</td><td>Data Link</td><td>Pengalamatan fisik (MAC), deteksi error</td><td>Ethernet, WiFi, Switch</td></tr>
  <tr><td>1</td><td>Physical</td><td>Transmisi bit melalui media fisik</td><td>Kabel, Hub, NIC, sinyal</td></tr>
</table>
</div>

<h3>F. IP Address</h3>
<div class="img-wrap">
  <img src="https://images.unsplash.com/photo-1586772002130-27dc7bab4a79?w=800&q=80" alt="IP Address" loading="lazy">
  <p class="img-caption">IP Address — identitas numerik unik setiap perangkat dalam jaringan</p>
</div>
<p>IP Address adalah alamat numerik unik yang diberikan kepada setiap perangkat dalam jaringan komputer yang menggunakan protokol IP.</p>
<h4>IPv4</h4>
<p>Menggunakan 32 bit = 4 oktet × 8 bit, ditulis dalam format desimal dipisahkan titik. Contoh: <strong>192.168.1.100</strong></p>
<div class="table-wrap">
<table>
  <tr><th>Kelas</th><th>Range</th><th>Default Subnet Mask</th><th>Jumlah Host</th></tr>
  <tr><td>A</td><td>1.0.0.0 – 126.255.255.255</td><td>255.0.0.0 (/8)</td><td>16.777.214</td></tr>
  <tr><td>B</td><td>128.0.0.0 – 191.255.255.255</td><td>255.255.0.0 (/16)</td><td>65.534</td></tr>
  <tr><td>C</td><td>192.0.0.0 – 223.255.255.255</td><td>255.255.255.0 (/24)</td><td>254</td></tr>
</table>
</div>
<p><strong>IP Privat</strong> (tidak dapat diakses langsung dari internet):</p>
<ul>
  <li>Kelas A: 10.0.0.0 – 10.255.255.255</li>
  <li>Kelas B: 172.16.0.0 – 172.31.255.255</li>
  <li>Kelas C: 192.168.0.0 – 192.168.255.255</li>
</ul>
<h4>IPv6</h4>
<p>Menggunakan 128 bit ditulis dalam heksadesimal. Contoh: <strong>2001:0db8:85a3:0000:0000:8a2e:0370:7334</strong>. Kapasitas ~3,4×10³⁸ alamat, mengatasi keterbatasan IPv4.</p>

<h3>G. Protokol Internet Penting</h3>
<ul>
  <li><strong>HTTP/HTTPS:</strong> Transfer halaman web. HTTPS menggunakan enkripsi SSL/TLS</li>
  <li><strong>DNS:</strong> Menerjemahkan nama domain (google.com) → alamat IP (142.250.x.x)</li>
  <li><strong>DHCP:</strong> Memberikan IP address otomatis ke perangkat yang terhubung</li>
  <li><strong>TCP:</strong> Transfer data yang andal dengan acknowledgment dan retransmisi</li>
  <li><strong>UDP:</strong> Transfer cepat tanpa jaminan, cocok untuk streaming dan gaming</li>
  <li><strong>FTP:</strong> Transfer file antara server dan klien</li>
  <li><strong>SMTP/POP3/IMAP:</strong> Protokol untuk pengiriman dan penerimaan email</li>
</ul>

<h3>H. Keamanan Jaringan</h3>
<div class="img-grid2">
  <div class="img-wrap">
    <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80" alt="Keamanan" loading="lazy">
    <p class="img-caption">Keamanan jaringan — perlindungan dari ancaman siber</p>
  </div>
  <div class="img-wrap">
    <img src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&q=80" alt="Ancaman" loading="lazy">
    <p class="img-caption">Berbagai jenis ancaman yang mengintai keamanan jaringan</p>
  </div>
</div>
<div class="table-wrap">
<table>
  <tr><th>Ancaman</th><th>Deskripsi</th><th>Pencegahan</th></tr>
  <tr><td>Malware</td><td>Virus, worm, trojan, ransomware, spyware</td><td>Antivirus terbaru, jangan unduh file sembarangan</td></tr>
  <tr><td>Phishing</td><td>Penipuan mencuri data login melalui email/situs palsu</td><td>Verifikasi URL, jangan klik link mencurigakan</td></tr>
  <tr><td>DDoS</td><td>Membanjiri server dengan traffic untuk melumpuhkannya</td><td>Firewall, rate limiting, CDN</td></tr>
  <tr><td>Man-in-the-Middle</td><td>Penyadapan komunikasi antara dua pihak</td><td>Enkripsi end-to-end, sertifikat SSL/TLS</td></tr>
  <tr><td>Brute Force</td><td>Mencoba semua kemungkinan password</td><td>Password kuat, 2FA, account lockout</td></tr>
</table>
</div>
<div class="info-box warning">
  <p><strong>Tips Keamanan:</strong> Gunakan HTTPS, password minimal 12 karakter kombinasi huruf besar+kecil+angka+simbol, aktifkan autentikasi dua faktor (2FA), perbarui software secara rutin, dan hindari WiFi publik tanpa VPN.</p>
</div>
`,
bab5: `
<h2><i class="fas fa-database"></i> Bab 5: Analisis Data</h2>
<p class="bab-subtitle">Informatika Kelas X SMA | Kurikulum Merdeka</p>
<div class="img-hero">
  <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80" alt="Analisis Data" loading="lazy">
  <p class="img-caption">Analisis data — mengubah data mentah menjadi pengetahuan yang bermakna</p>
</div>

<h3>A. Pengertian Data, Informasi, dan Pengetahuan</h3>
<div class="img-grid2">
  <div class="img-wrap">
    <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80" alt="Data" loading="lazy">
    <p class="img-caption">Data mentah — fakta dan angka yang belum diolah</p>
  </div>
  <div class="img-wrap">
    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80" alt="Informasi" loading="lazy">
    <p class="img-caption">Informasi — data yang telah diolah dan memiliki makna</p>
  </div>
</div>
<p><strong>Data</strong> adalah fakta mentah, angka, simbol, atau karakter yang belum diolah dan belum memiliki makna tertentu. Data bisa berupa angka (85), teks ("Jakarta"), kondisi (suhu 37°C), atau gambar.</p>
<p><strong>Informasi</strong> adalah data yang telah diproses, diorganisasikan, dan diinterpretasikan sehingga memiliki makna dan relevansi bagi penggunanya. Contoh: "Rata-rata nilai ujian kelas X-A adalah 85, lebih tinggi 5 poin dari semester lalu."</p>
<p><strong>Pengetahuan (Knowledge)</strong> adalah informasi yang telah diinternalisasi, dipahami dalam konteks, dan dapat digunakan untuk mengambil keputusan atau melakukan tindakan. Contoh: "Kelas X-A perlu mempertahankan metode belajar kelompok karena terbukti meningkatkan nilai."</p>
<div class="info-box">
  <p><strong>Hierarki DIKW:</strong> Data → Informasi → Knowledge (Pengetahuan) → Wisdom (Kebijaksanaan). Setiap tingkat memberikan nilai yang semakin tinggi bagi pengambil keputusan.</p>
</div>

<h3>B. Jenis-Jenis Data</h3>

<h4>1. Berdasarkan Sifat</h4>
<div class="table-wrap">
<table>
  <tr><th>Jenis</th><th>Deskripsi</th><th>Contoh</th></tr>
  <tr><td>Kuantitatif Diskrit</td><td>Angka bulat yang tidak dapat dipecah</td><td>Jumlah siswa (30), jumlah roda (4)</td></tr>
  <tr><td>Kuantitatif Kontinu</td><td>Angka yang dapat berupa pecahan</td><td>Tinggi badan (165.5 cm), suhu (36.7°C)</td></tr>
  <tr><td>Kualitatif Nominal</td><td>Kategori tanpa urutan</td><td>Warna, jenis kelamin, agama, kota</td></tr>
  <tr><td>Kualitatif Ordinal</td><td>Kategori dengan urutan bermakna</td><td>Peringkat (1,2,3), kepuasan (sangat puas – tidak puas)</td></tr>
</table>
</div>

<h4>2. Berdasarkan Sumber</h4>
<ul>
  <li><strong>Data Primer:</strong> Dikumpulkan langsung oleh peneliti dari sumber aslinya melalui survei, wawancara, observasi, atau eksperimen. Akurat dan relevan tapi membutuhkan waktu dan biaya.</li>
  <li><strong>Data Sekunder:</strong> Data yang sudah ada, dikumpulkan oleh pihak lain untuk tujuan yang mungkin berbeda. Contoh: data BPS, laporan perusahaan, jurnal penelitian. Lebih cepat dan murah didapat tapi mungkin kurang sesuai kebutuhan.</li>
</ul>

<h4>3. Berdasarkan Skala Pengukuran</h4>
<div class="table-wrap">
<table>
  <tr><th>Skala</th><th>Karakteristik</th><th>Operasi Statistik</th><th>Contoh</th></tr>
  <tr><td>Nominal</td><td>Kategori saja, tidak ada urutan</td><td>Frekuensi, modus</td><td>Golongan darah (A, B, O, AB)</td></tr>
  <tr><td>Ordinal</td><td>Ada urutan, jarak tidak sama</td><td>Median, persentil</td><td>Tingkat pendidikan (SD, SMP, SMA, S1)</td></tr>
  <tr><td>Interval</td><td>Jarak sama, tidak ada nol mutlak</td><td>Mean, standar deviasi</td><td>Suhu Celsius, tahun kalender</td></tr>
  <tr><td>Rasio</td><td>Jarak sama, ada nol mutlak</td><td>Semua operasi statistik</td><td>Berat badan, tinggi, pendapatan</td></tr>
</table>
</div>

<h3>C. Siklus Pengolahan Data</h3>
<div class="img-wrap">
  <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80" alt="Siklus Data" loading="lazy">
  <p class="img-caption">Siklus pengolahan data dari pengumpulan hingga pengambilan keputusan</p>
</div>
<ol>
  <li><strong>Pengumpulan Data:</strong> Menentukan sumber data, metode pengumpulan (survei, observasi, scraping web, API), dan instrumen pengumpulan</li>
  <li><strong>Pembersihan Data (Data Cleaning):</strong> Menghapus duplikat, mengisi nilai yang hilang (missing values), memperbaiki format, menghilangkan outlier yang tidak valid</li>
  <li><strong>Transformasi Data:</strong> Mengubah format, normalisasi, agregasi, atau encoding data agar siap dianalisis</li>
  <li><strong>Analisis Data:</strong> Menerapkan metode statistik, membuat model, menemukan pola dan hubungan</li>
  <li><strong>Visualisasi:</strong> Menyajikan hasil dalam grafik, diagram, atau dashboard yang mudah dipahami</li>
  <li><strong>Interpretasi dan Keputusan:</strong> Menarik kesimpulan dan membuat rekomendasi berdasarkan hasil analisis</li>
</ol>

<h3>D. Statistika Deskriptif</h3>
<p>Statistika deskriptif merangkum dan mendeskripsikan karakteristik utama sekumpulan data.</p>

<h4>1. Ukuran Pemusatan Data</h4>
<ul>
  <li><strong>Mean (Rata-rata):</strong> x̄ = Σxᵢ / n. Sensitif terhadap outlier. Cocok untuk data simetris.</li>
  <li><strong>Median:</strong> Nilai tengah setelah data diurutkan. Tidak terpengaruh outlier. Cocok untuk data miring (skewed).</li>
  <li><strong>Modus:</strong> Nilai paling sering muncul. Cocok untuk data kategorikal.</li>
</ul>
<div class="info-box">
  <p><strong>Contoh:</strong> Data nilai: 70, 75, 80, 80, 85, 90, 95<br>
  Mean = (70+75+80+80+85+90+95)/7 = 575/7 ≈ 82.1<br>
  Median = 80 (nilai ke-4 dari 7 data)<br>
  Modus = 80 (muncul 2 kali)</p>
</div>

<h4>2. Ukuran Penyebaran Data</h4>
<ul>
  <li><strong>Range:</strong> Nilai max – nilai min. Mudah dihitung tapi sensitif terhadap outlier.</li>
  <li><strong>Varians (s²):</strong> Rata-rata kuadrat selisih setiap nilai dari mean. Mengukur sebaran data.</li>
  <li><strong>Standar Deviasi (s):</strong> Akar kuadrat varians. Satuannya sama dengan data asli, lebih mudah diinterpretasi.</li>
  <li><strong>Kuartil (Q1, Q2, Q3):</strong> Membagi data terurut menjadi 4 bagian sama besar.</li>
  <li><strong>IQR:</strong> Q3 – Q1. Mengukur penyebaran 50% data tengah, tidak terpengaruh outlier.</li>
</ul>

<h3>E. Visualisasi Data</h3>
<div class="img-grid2">
  <div class="img-wrap">
    <img src="https://images.unsplash.com/photo-1543286386-2e659306cd6c?w=600&q=80" alt="Grafik" loading="lazy">
    <p class="img-caption">Bar chart, line chart, dan pie chart — visualisasi data paling umum</p>
  </div>
  <div class="img-wrap">
    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80" alt="Dashboard" loading="lazy">
    <p class="img-caption">Dashboard analitik — menyajikan banyak data secara komprehensif</p>
  </div>
</div>
<div class="table-wrap">
<table>
  <tr><th>Jenis Visualisasi</th><th>Kegunaan</th><th>Kapan Digunakan</th></tr>
  <tr><td>Bar Chart</td><td>Membandingkan nilai antar kategori</td><td>Perbandingan nilai ujian per kelas</td></tr>
  <tr><td>Line Chart</td><td>Menampilkan tren dari waktu ke waktu</td><td>Perkembangan nilai semester ke semester</td></tr>
  <tr><td>Pie/Donut Chart</td><td>Menampilkan proporsi bagian dari keseluruhan</td><td>Persentase hobi siswa</td></tr>
  <tr><td>Scatter Plot</td><td>Hubungan antara dua variabel numerik</td><td>Korelasi jam belajar dengan nilai ujian</td></tr>
  <tr><td>Histogram</td><td>Distribusi frekuensi data kontinu</td><td>Distribusi nilai ujian dalam interval</td></tr>
  <tr><td>Box Plot</td><td>Menampilkan distribusi, kuartil, dan outlier</td><td>Perbandingan distribusi nilai antar kelas</td></tr>
  <tr><td>Heatmap</td><td>Intensitas nilai dalam matriks</td><td>Korelasi antar variabel</td></tr>
</table>
</div>

<h3>F. Pengolahan Data dengan Spreadsheet</h3>
<p>Microsoft Excel dan Google Sheets adalah alat spreadsheet yang sangat berguna untuk analisis data. Fungsi-fungsi penting:</p>
<div class="code-block">
// Fungsi Statistik Dasar
=AVERAGE(A1:A20)     → Rata-rata
=MEDIAN(A1:A20)      → Median
=MODE(A1:A20)        → Modus
=MAX(A1:A20)         → Nilai maksimum
=MIN(A1:A20)         → Nilai minimum
=STDEV(A1:A20)       → Standar deviasi sampel
=VAR(A1:A20)         → Varians sampel
=COUNT(A1:A20)       → Menghitung sel berisi angka
=COUNTA(A1:A20)      → Menghitung sel tidak kosong
=COUNTIF(A1:A20,">=80")  → Menghitung nilai ≥ 80
=SUMIF(A1:A20,">=80",B1:B20) → Menjumlahkan berdasarkan kriteria
=VLOOKUP(nilai, tabel, kolom, FALSE) → Mencari data vertikal
</div>

<h3>G. Privasi dan Etika dalam Penggunaan Data</h3>
<ul>
  <li><strong>Informed Consent:</strong> Pengguna harus mengetahui dan menyetujui pengumpulan data mereka</li>
  <li><strong>Data Minimization:</strong> Hanya mengumpulkan data yang benar-benar diperlukan</li>
  <li><strong>Anonymization:</strong> Menghapus informasi yang dapat mengidentifikasi individu</li>
  <li><strong>Data Security:</strong> Melindungi data dari akses tidak sah menggunakan enkripsi dan kontrol akses</li>
  <li><strong>Right to be Forgotten:</strong> Hak individu untuk meminta penghapusan data mereka</li>
</ul>
<div class="info-box danger">
  <p><strong>Regulasi Indonesia:</strong> UU No. 27 Tahun 2022 tentang Perlindungan Data Pribadi (UU PDP) mengatur hak-hak subjek data dan kewajiban pengendali data. Pelanggaran dapat dikenakan sanksi pidana dan denda.</p>
</div>
`,
bab6: `
<h2><i class="fas fa-code"></i> Bab 6: Algoritma dan Pemrograman</h2>
<p class="bab-subtitle">Informatika Kelas X SMA | Kurikulum Merdeka</p>
<div class="img-hero">
  <img src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=900&q=80" alt="Pemrograman" loading="lazy">
  <p class="img-caption">Algoritma dan pemrograman — mengubah logika menjadi instruksi yang dimengerti komputer</p>
</div>

<h3>A. Konsep Pemrograman</h3>
<div class="img-grid2">
  <div class="img-wrap">
    <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&q=80" alt="Kode Program" loading="lazy">
    <p class="img-caption">Kode program — instruksi yang ditulis dalam bahasa pemrograman</p>
  </div>
  <div class="img-wrap">
    <img src="https://images.unsplash.com/photo-1607706189992-eae578626c86?w=600&q=80" alt="Coding" loading="lazy">
    <p class="img-caption">Proses coding — menulis, menguji, dan memperbaiki program</p>
  </div>
</div>
<p>Pemrograman (programming) adalah proses merancang, menulis, menguji, dan memelihara kode sumber (source code) program komputer. Program adalah sekumpulan instruksi yang ditulis dalam bahasa pemrograman tertentu untuk menyelesaikan tugas tertentu.</p>
<p>Bahasa pemrograman dikategorikan berdasarkan tingkat abstraksinya:</p>
<div class="table-wrap">
<table>
  <tr><th>Kategori</th><th>Karakteristik</th><th>Contoh</th></tr>
  <tr><td>Bahasa Mesin</td><td>Kode biner (0 dan 1), langsung dieksekusi CPU</td><td>01000001 10110001...</td></tr>
  <tr><td>Bahasa Assembly</td><td>Mnemonik, sangat dekat dengan hardware</td><td>MOV AX, 1; ADD AX, BX</td></tr>
  <tr><td>Bahasa Tingkat Rendah</td><td>Efisien, kontrol penuh hardware</td><td>C, C++</td></tr>
  <tr><td>Bahasa Tingkat Tinggi</td><td>Mudah dipahami manusia, portabel</td><td>Python, Java, JavaScript</td></tr>
  <tr><td>Bahasa Scripting</td><td>Diinterpretasi, cepat dikembangkan</td><td>Python, PHP, Bash</td></tr>
</table>
</div>

<h3>B. Tipe Data dalam Pemrograman</h3>
<div class="img-wrap">
  <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80" alt="Tipe Data" loading="lazy">
  <p class="img-caption">Berbagai tipe data yang digunakan dalam pemrograman</p>
</div>
<div class="table-wrap">
<table>
  <tr><th>Tipe Data</th><th>Deskripsi</th><th>Contoh di Python</th><th>Ukuran (umumnya)</th></tr>
  <tr><td>int</td><td>Bilangan bulat</td><td>x = 42</td><td>4-8 bytes</td></tr>
  <tr><td>float</td><td>Bilangan desimal</td><td>pi = 3.14</td><td>8 bytes</td></tr>
  <tr><td>str</td><td>Teks/karakter</td><td>nama = "Budi"</td><td>Variabel</td></tr>
  <tr><td>bool</td><td>Benar/Salah</td><td>aktif = True</td><td>1 byte</td></tr>
  <tr><td>list</td><td>Urutan nilai yang dapat diubah</td><td>nilai = [85, 90, 78]</td><td>Variabel</td></tr>
  <tr><td>tuple</td><td>Urutan nilai yang tidak dapat diubah</td><td>titik = (3, 4)</td><td>Variabel</td></tr>
  <tr><td>dict</td><td>Pasangan kunci-nilai</td><td>siswa = {"nama":"Budi","nilai":85}</td><td>Variabel</td></tr>
</table>
</div>

<h3>C. Variabel, Konstanta, dan Operator</h3>
<div class="code-block">
# Python — Variabel dan Tipe Data
nama = "Andi"          # String
usia = 16              # Integer
tinggi = 165.5         # Float
aktif = True           # Boolean

# Konstanta (konvensi huruf kapital)
PI = 3.14159
GRAVITASI = 9.8

# Operator Aritmatika
a, b = 10, 3
print(a + b)   # 13  (penjumlahan)
print(a - b)   # 7   (pengurangan)
print(a * b)   # 30  (perkalian)
print(a / b)   # 3.33 (pembagian)
print(a // b)  # 3   (pembagian bulat)
print(a % b)   # 1   (modulo/sisa)
print(a ** b)  # 1000 (pangkat)
</div>

<h3>D. Struktur Data Dasar</h3>
<div class="img-grid2">
  <div class="img-wrap">
    <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80" alt="Array Stack Queue" loading="lazy">
    <p class="img-caption">Array, Stack (LIFO), dan Queue (FIFO)</p>
  </div>
  <div class="img-wrap">
    <img src="https://images.unsplash.com/photo-1456428199391-a3b1cb5e93ab?w=600&q=80" alt="Tree" loading="lazy">
    <p class="img-caption">Tree dan Linked List — struktur data hierarkis</p>
  </div>
</div>

<h4>1. Array (Larik/List)</h4>
<p>Kumpulan elemen dengan tipe data yang sama dalam lokasi memori berurutan, diakses menggunakan indeks.</p>
<div class="code-block">
nilai = [85, 90, 78, 92, 88]
print(nilai[0])    # 85 (indeks pertama)
print(nilai[-1])   # 88 (indeks terakhir)
print(len(nilai))  # 5 (panjang array)
nilai.append(95)   # Menambah elemen
nilai.sort()       # Mengurutkan: [78,85,88,90,92,95]
</div>

<h4>2. Stack (Tumpukan) — LIFO</h4>
<p>Mengikuti prinsip <strong>LIFO (Last In, First Out)</strong> — elemen terakhir masuk adalah yang pertama keluar. Seperti tumpukan piring.</p>
<ul>
  <li><strong>Push:</strong> memasukkan elemen ke atas tumpukan</li>
  <li><strong>Pop:</strong> mengeluarkan elemen dari atas tumpukan</li>
  <li><strong>Peek/Top:</strong> melihat elemen teratas tanpa menghapus</li>
</ul>
<p>Contoh penerapan: undo/redo di text editor, navigasi browser (tombol back), call stack dalam pemrograman.</p>

<h4>3. Queue (Antrian) — FIFO</h4>
<p>Mengikuti prinsip <strong>FIFO (First In, First Out)</strong> — elemen pertama masuk adalah yang pertama keluar. Seperti antrian kasir.</p>
<ul>
  <li><strong>Enqueue:</strong> memasukkan elemen di belakang antrian</li>
  <li><strong>Dequeue:</strong> mengeluarkan elemen dari depan antrian</li>
</ul>
<p>Contoh penerapan: antrian printer, buffer data, antrian proses di sistem operasi.</p>

<h3>E. Algoritma Pengurutan (Sorting)</h3>
<div class="img-grid3">
  <div class="img-wrap">
    <img src="https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&q=80" alt="Bubble Sort" loading="lazy">
    <p class="img-caption">Bubble Sort — O(n²)</p>
  </div>
  <div class="img-wrap">
    <img src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400&q=80" alt="Selection Sort" loading="lazy">
    <p class="img-caption">Selection Sort — O(n²)</p>
  </div>
  <div class="img-wrap">
    <img src="https://images.unsplash.com/photo-1580894894513-541e068a3e2b?w=400&q=80" alt="Merge Sort" loading="lazy">
    <p class="img-caption">Merge Sort — O(n log n)</p>
  </div>
</div>

<h4>1. Bubble Sort</h4>
<p>Membandingkan dua elemen berdekatan dan menukar jika tidak dalam urutan benar. Diulang hingga tidak ada pertukaran.</p>
<div class="code-block">
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        swapped = False
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
                swapped = True
        if not swapped:  # Optimasi: berhenti jika sudah terurut
            break
    return arr
# Kompleksitas: O(n²) worst, O(n) best (jika sudah terurut)
</div>

<h4>2. Selection Sort</h4>
<p>Mencari elemen terkecil dari bagian yang belum terurut dan menempatkannya di posisi yang benar.</p>
<div class="code-block">
def selection_sort(arr):
    n = len(arr)
    for i in range(n):
        min_idx = i
        for j in range(i+1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr
# Kompleksitas: O(n²) — selalu melakukan n² perbandingan
</div>

<h4>3. Merge Sort</h4>
<p>Algoritma divide and conquer: bagi array menjadi dua, urutkan masing-masing secara rekursif, lalu gabungkan.</p>
<div class="code-block">
def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i]); i += 1
        else:
            result.append(right[j]); j += 1
    result.extend(left[i:])
    result.extend(right[j:])
    return result
# Kompleksitas: O(n log n) — lebih efisien untuk data besar
</div>

<h3>F. Algoritma Pencarian (Searching)</h3>
<div class="img-grid2">
  <div class="img-wrap">
    <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80" alt="Linear Search" loading="lazy">
    <p class="img-caption">Linear Search — periksa satu per satu</p>
  </div>
  <div class="img-wrap">
    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80" alt="Binary Search" loading="lazy">
    <p class="img-caption">Binary Search — bagi dua setiap langkah</p>
  </div>
</div>

<h4>1. Linear Search (Sequential Search)</h4>
<div class="code-block">
def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i  # Kembalikan indeks
    return -1  # Tidak ditemukan
# Kompleksitas: O(n) — periksa setiap elemen satu per satu
# Keuntungan: bekerja pada array yang TIDAK terurut
</div>

<h4>2. Binary Search</h4>
<div class="code-block">
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid          # Ditemukan
        elif arr[mid] < target:
            left = mid + 1      # Cari di setengah kanan
        else:
            right = mid - 1     # Cari di setengah kiri
    return -1  # Tidak ditemukan
# Kompleksitas: O(log n) — jauh lebih efisien dari Linear Search
# SYARAT: Array harus sudah terurut!
</div>
<p><strong>Perbandingan:</strong> Untuk 1.000.000 data, Linear Search butuh hingga 1.000.000 perbandingan, sedangkan Binary Search hanya perlu sekitar 20 perbandingan (log₂ 1.000.000 ≈ 20).</p>

<h3>G. Rekursi</h3>
<div class="img-wrap">
  <img src="https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=800&q=80" alt="Rekursi" loading="lazy">
  <p class="img-caption">Rekursi — fungsi yang memanggil dirinya sendiri hingga mencapai kondisi dasar</p>
</div>
<p>Rekursi adalah teknik pemrograman di mana fungsi memanggil dirinya sendiri. Setiap fungsi rekursif WAJIB memiliki:</p>
<ul>
  <li><strong>Base case:</strong> kondisi berhenti agar tidak terjadi infinite recursion</li>
  <li><strong>Recursive case:</strong> bagian yang memanggil fungsi itu sendiri dengan parameter yang lebih kecil</li>
</ul>
<div class="code-block">
# Faktorial: n! = n × (n-1) × (n-2) × ... × 1
def faktorial(n):
    if n == 0 or n == 1:  # Base case
        return 1
    return n * faktorial(n - 1)  # Recursive case

# faktorial(5) = 5 × faktorial(4)
#              = 5 × 4 × faktorial(3)
#              = 5 × 4 × 3 × faktorial(2)
#              = 5 × 4 × 3 × 2 × faktorial(1)
#              = 5 × 4 × 3 × 2 × 1 = 120

# Fibonacci: F(n) = F(n-1) + F(n-2)
def fibonacci(n):
    if n <= 1:      # Base case
        return n
    return fibonacci(n-1) + fibonacci(n-2)  # Rekursif
</div>
<div class="info-box warning">
  <p><strong>Hati-hati:</strong> Rekursi tanpa base case yang benar akan menyebabkan Stack Overflow Error karena setiap pemanggilan fungsi mengonsumsi ruang stack yang terbatas.</p>
</div>

<h3>H. Pemrograman Berorientasi Objek (OOP)</h3>
<div class="img-grid2">
  <div class="img-wrap">
    <img src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=600&q=80" alt="OOP" loading="lazy">
    <p class="img-caption">Class dan Object — cetak biru dan instansi dalam OOP</p>
  </div>
  <div class="img-wrap">
    <img src="https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&q=80" alt="OOP Pilar" loading="lazy">
    <p class="img-caption">4 Pilar OOP: Encapsulation, Inheritance, Polymorphism, Abstraction</p>
  </div>
</div>
<p>OOP adalah paradigma pemrograman yang mengorganisasikan kode ke dalam objek-objek yang memiliki data (atribut) dan perilaku (metode).</p>
<p><strong>4 Pilar OOP:</strong></p>
<ul>
  <li><strong>Encapsulation:</strong> Menyembunyikan detail implementasi internal dan hanya mengekspos interface yang diperlukan</li>
  <li><strong>Inheritance:</strong> Kelas anak mewarisi atribut dan metode dari kelas induk</li>
  <li><strong>Polymorphism:</strong> Objek berbeda dapat merespons pesan yang sama dengan cara berbeda</li>
  <li><strong>Abstraction:</strong> Menyembunyikan kompleksitas dan hanya menampilkan esensi penting</li>
</ul>
<div class="code-block">
class Hewan:
    def __init__(self, nama, jenis):
        self.nama = nama      # atribut
        self.jenis = jenis
    
    def info(self):           # metode
        return f"{self.nama} adalah {self.jenis}"
    
    def bersuara(self):
        return "..."

class Kucing(Hewan):          # Inheritance
    def __init__(self, nama):
        super().__init__(nama, "Kucing")
    
    def bersuara(self):       # Polymorphism (override)
        return "Meow!"

class Anjing(Hewan):
    def __init__(self, nama):
        super().__init__(nama, "Anjing")
    
    def bersuara(self):       # Polymorphism
        return "Woof!"

# Penggunaan
kitty = Kucing("Kitty")
print(kitty.info())       # Kitty adalah Kucing
print(kitty.bersuara())   # Meow!
</div>
`,
bab7: `
<h2><i class="fas fa-shield-alt"></i> Bab 7: Dampak Sosial Informatika</h2>
<p class="bab-subtitle">Informatika Kelas X SMA | Kurikulum Merdeka</p>
<div class="img-hero">
  <img src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=900&q=80" alt="Dampak Sosial" loading="lazy">
  <p class="img-caption">Informatika membawa dampak luar biasa pada kehidupan sosial, ekonomi, dan budaya manusia</p>
</div>

<h3>A. Transformasi Digital dan Dampaknya</h3>
<div class="img-wrap">
  <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80" alt="Digital Transformation" loading="lazy">
  <p class="img-caption">Transformasi digital mengubah hampir setiap aspek kehidupan manusia</p>
</div>
<p>Transformasi digital adalah proses mengintegrasikan teknologi digital ke dalam semua area bisnis dan kehidupan, mengubah cara kita bekerja, berkomunikasi, belajar, dan berinteraksi secara fundamental. Revolusi industri 4.0 dan Era Society 5.0 membawa perubahan yang lebih cepat dan mendalam dari era sebelumnya.</p>

<h3>B. Dampak Positif TIK dalam Berbagai Bidang</h3>
<div class="img-grid3">
  <div class="img-wrap">
    <img src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&q=80" alt="E-Learning" loading="lazy">
    <p class="img-caption">Pendidikan Digital</p>
  </div>
  <div class="img-wrap">
    <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80" alt="Telemedicine" loading="lazy">
    <p class="img-caption">Telemedicine</p>
  </div>
  <div class="img-wrap">
    <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&q=80" alt="E-Commerce" loading="lazy">
    <p class="img-caption">E-Commerce</p>
  </div>
</div>

<h4>1. Bidang Pendidikan</h4>
<ul>
  <li><strong>E-Learning:</strong> Platform seperti Ruangguru, Zenius, Coursera memungkinkan belajar kapan saja dan di mana saja</li>
  <li><strong>Collaborative Learning:</strong> Google Classroom, Microsoft Teams memfasilitasi kolaborasi siswa lintas lokasi</li>
  <li><strong>Personalized Learning:</strong> AI dapat menyesuaikan materi dan kecepatan belajar sesuai kemampuan individu</li>
  <li><strong>Simulasi dan VR:</strong> Laboratorium virtual untuk eksperimen sains yang berbahaya atau mahal</li>
  <li><strong>Open Educational Resources:</strong> Khan Academy, Wikipedia — pengetahuan gratis untuk semua</li>
</ul>

<h4>2. Bidang Kesehatan</h4>
<ul>
  <li><strong>Telemedicine:</strong> Konsultasi dokter online, monitoring pasien jarak jauh menggunakan wearable device</li>
  <li><strong>Electronic Health Record (EHR):</strong> Rekam medis digital yang dapat diakses dari mana saja</li>
  <li><strong>AI Diagnosis:</strong> Algoritma deep learning dapat mendeteksi kanker dari citra medis dengan akurasi tinggi</li>
  <li><strong>Drug Discovery:</strong> AI mempercepat penelitian obat dari 10-15 tahun menjadi beberapa bulan</li>
  <li><strong>Robotik Medis:</strong> Robot bedah untuk prosedur dengan presisi tinggi</li>
</ul>

<h4>3. Bidang Ekonomi dan Bisnis</h4>
<ul>
  <li><strong>E-Commerce:</strong> Tokopedia, Shopee, Amazon — pasar digital tanpa batas geografis</li>
  <li><strong>Financial Technology (Fintech):</strong> GoPay, OVO, Dana — pembayaran digital, pinjaman online, investasi</li>
  <li><strong>Gig Economy:</strong> Ojek online, freelance platform — model kerja fleksibel baru</li>
  <li><strong>Digital Marketing:</strong> Iklan yang dipersonalisasi berdasarkan data perilaku pengguna</li>
  <li><strong>Supply Chain Optimization:</strong> AI dan IoT mengoptimalkan rantai pasok secara real-time</li>
</ul>

<h3>C. Dampak Negatif TIK</h3>
<div class="img-grid2">
  <div class="img-wrap">
    <img src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&q=80" alt="Kejahatan Siber" loading="lazy">
    <p class="img-caption">Kejahatan siber — ancaman yang semakin canggih</p>
  </div>
  <div class="img-wrap">
    <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80" alt="Kecanduan Digital" loading="lazy">
    <p class="img-caption">Kecanduan digital — dampak psikologis penggunaan teknologi berlebihan</p>
  </div>
</div>

<h4>1. Kejahatan Siber (Cybercrime)</h4>
<div class="table-wrap">
<table>
  <tr><th>Jenis Kejahatan</th><th>Deskripsi</th><th>Contoh Kasus</th></tr>
  <tr><td>Hacking</td><td>Akses tidak sah ke sistem komputer</td><td>Pembobolan data perbankan</td></tr>
  <tr><td>Phishing</td><td>Penipuan mencuri kredensial melalui komunikasi palsu</td><td>Email palsu dari bank</td></tr>
  <tr><td>Ransomware</td><td>Enkripsi data korban, minta tebusan</td><td>WannaCry menyerang 150 negara (2017)</td></tr>
  <tr><td>Cyberbullying</td><td>Intimidasi dan pelecehan melalui media digital</td><td>Pelecehan di media sosial</td></tr>
  <tr><td>Identity Theft</td><td>Pencurian identitas digital untuk penipuan</td><td>Pembuatan akun palsu</td></tr>
  <tr><td>Hoaks/Disinformasi</td><td>Penyebaran informasi palsu secara masif</td><td>Hoaks kesehatan saat pandemi</td></tr>
</table>
</div>

<h4>2. Masalah Privasi Data</h4>
<p>Di era digital, data pribadi menjadi aset berharga yang sering disalahgunakan:</p>
<ul>
  <li><strong>Data Mining:</strong> Perusahaan mengumpulkan dan menganalisis data perilaku pengguna tanpa transparansi</li>
  <li><strong>Data Breach:</strong> Kebocoran data jutaan pengguna akibat serangan siber (contoh: kasus kebocoran data BPJS)</li>
  <li><strong>Surveillance:</strong> Pemantauan aktivitas online oleh pemerintah atau korporasi</li>
  <li><strong>Social Media Tracking:</strong> Platform melacak setiap klik, like, dan pencarian untuk iklan tertarget</li>
</ul>

<h4>3. Dampak Sosial dan Psikologis</h4>
<ul>
  <li><strong>Kecanduan Digital:</strong> Gangguan tidur, penurunan konsentrasi, isolasi sosial akibat ketergantungan gadget</li>
  <li><strong>FOMO (Fear of Missing Out):</strong> Kecemasan karena takut ketinggalan informasi atau aktivitas orang lain</li>
  <li><strong>Filter Bubble:</strong> Algoritma media sosial hanya menampilkan konten yang sesuai preferensi, membatasi perspektif</li>
  <li><strong>Echo Chamber:</strong> Kelompok yang hanya berinteraksi dengan orang sepemikiran, memperkuat polarisasi</li>
  <li><strong>Kesenjangan Digital:</strong> Perbedaan akses dan kemampuan teknologi antar kelompok masyarakat</li>
</ul>

<h3>D. Etika Digital</h3>
<div class="img-wrap">
  <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80" alt="Etika Digital" loading="lazy">
  <p class="img-caption">Etika digital — panduan berperilaku bertanggung jawab di dunia maya</p>
</div>

<h4>1. Netiquette (Etiket Internet)</h4>
<p>Netiquette adalah aturan sopan santun dan tata krama dalam berkomunikasi di internet:</p>
<ul>
  <li>Gunakan bahasa yang sopan dan menghormati orang lain, terlepas dari perbedaan pendapat</li>
  <li>Verifikasi informasi sebelum menyebarkan — saring sebelum sharing</li>
  <li>Jangan menggunakan huruf kapital semua (dianggap berteriak)</li>
  <li>Hormati privasi orang lain, jangan menyebarkan foto/data pribadi tanpa izin</li>
  <li>Hindari plagiarisme — selalu cantumkan sumber</li>
</ul>

<h4>2. Hak Kekayaan Intelektual di Era Digital</h4>
<ul>
  <li><strong>Hak Cipta (Copyright):</strong> Melindungi karya kreatif otomatis sejak diciptakan (musik, film, buku, software, foto)</li>
  <li><strong>Lisensi Software:</strong>
    <ul>
      <li>Proprietary/Commercial: berbayar, kode tertutup (Windows, Adobe)</li>
      <li>Freeware: gratis, kode tertutup (VLC, 7-Zip)</li>
      <li>Open Source: kode terbuka, dapat dimodifikasi (Linux, Firefox, Python)</li>
      <li>Creative Commons: lisensi fleksibel yang memungkinkan berbagi dengan kondisi tertentu</li>
    </ul>
  </li>
</ul>

<h4>3. Literasi Digital</h4>
<p>Literasi digital adalah kemampuan untuk menemukan, mengevaluasi, membuat, dan mengkomunikasikan informasi menggunakan teknologi digital secara efektif, kritis, dan bertanggung jawab. Komponen literasi digital meliputi:</p>
<ul>
  <li>Literasi informasi: mengevaluasi kredibilitas sumber</li>
  <li>Berpikir kritis terhadap konten digital</li>
  <li>Keamanan dan privasi digital</li>
  <li>Identitas digital yang positif</li>
  <li>Kolaborasi dan komunikasi digital yang etis</li>
</ul>

<h3>E. Regulasi TIK di Indonesia</h3>
<div class="table-wrap">
<table>
  <tr><th>Regulasi</th><th>Isi Pokok</th></tr>
  <tr><td>UU ITE No. 11/2008 (diperbarui No. 19/2016)</td><td>Mengatur informasi elektronik, transaksi elektronik, konten ilegal, dan kejahatan siber</td></tr>
  <tr><td>UU PDP No. 27/2022</td><td>Perlindungan data pribadi: hak subjek data, kewajiban pengendali data, sanksi pelanggaran</td></tr>
  <tr><td>PP PSTE No. 71/2019</td><td>Penyelenggaraan sistem dan transaksi elektronik</td></tr>
  <tr><td>Permen Kominfo No. 5/2020</td><td>Kewajiban penyelenggara sistem elektronik privat (PSE) mendaftarkan diri</td></tr>
</table>
</div>
<div class="info-box danger">
  <p><strong>Pasal Penting UU ITE:</strong><br>
  • Pasal 27 Ayat 1: konten asusila — pidana 6 tahun dan/atau denda 1 miliar<br>
  • Pasal 27 Ayat 3: pencemaran nama baik — pidana 4 tahun dan/atau denda 750 juta<br>
  • Pasal 28 Ayat 1: berita bohong (hoaks) — pidana 6 tahun dan/atau denda 1 miliar</p>
</div>

<h3>F. Kecerdasan Buatan (AI) dan Masa Depan</h3>
<div class="img-wrap">
  <img src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80" alt="AI" loading="lazy">
  <p class="img-caption">Kecerdasan buatan — teknologi yang mengubah cara manusia bekerja dan berkreasi</p>
</div>
<ul>
  <li><strong>Otomasi Pekerjaan:</strong> Pekerjaan rutin dan berulang akan digantikan AI, membutuhkan reskilling pekerja</li>
  <li><strong>Deepfake:</strong> Konten video/audio palsu yang sangat realistis — potensi penyalahgunaan untuk disinformasi</li>
  <li><strong>AI Generatif:</strong> ChatGPT, DALL-E, Midjourney mengubah cara manusia membuat konten</li>
  <li><strong>Bias Algoritma:</strong> AI dapat mewarisi bias dari data pelatihan, berpotensi diskriminatif</li>
  <li><strong>Privasi dan Pengawasan:</strong> Facial recognition dan pemantauan massal memunculkan isu privasi serius</li>
</ul>
`,
bab8: `
<h2><i class="fas fa-users-cog"></i> Bab 8: Praktik Lintas Bidang</h2>
<p class="bab-subtitle">Informatika Kelas X SMA | Kurikulum Merdeka</p>
<div class="img-hero">
  <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80" alt="Kolaborasi" loading="lazy">
  <p class="img-caption">Informatika berkolaborasi dengan sains, seni, sosial, dan kehidupan nyata untuk menciptakan inovasi</p>
</div>

<h3>A. Informatika sebagai Ilmu Lintas Bidang</h3>
<div class="img-grid3">
  <div class="img-wrap">
    <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80" alt="Sains" loading="lazy">
    <p class="img-caption">Informatika + Sains</p>
  </div>
  <div class="img-wrap">
    <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80" alt="Pendidikan" loading="lazy">
    <p class="img-caption">Informatika + Pendidikan</p>
  </div>
  <div class="img-wrap">
    <img src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&q=80" alt="Bisnis" loading="lazy">
    <p class="img-caption">Informatika + Bisnis</p>
  </div>
</div>
<p>Kekuatan terbesar informatika bukan pada teknologinya sendiri, melainkan pada kemampuannya untuk bersinergi dengan bidang lain. Setiap permasalahan dalam bidang apapun kini dapat diselesaikan lebih efektif dengan bantuan informatika.</p>

<h3>B. Informatika dalam Bidang Sains dan Riset</h3>
<div class="img-grid2">
  <div class="img-wrap">
    <img src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=600&q=80" alt="Komputasi Ilmiah" loading="lazy">
    <p class="img-caption">Komputasi ilmiah — superkomputer untuk simulasi fenomena alam</p>
  </div>
  <div class="img-wrap">
    <img src="https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&q=80" alt="Bioinformatika" loading="lazy">
    <p class="img-caption">Bioinformatika — analisis data genomik menggunakan algoritma</p>
  </div>
</div>

<h4>1. Komputasi Ilmiah (Scientific Computing)</h4>
<p>Menggunakan komputer untuk memecahkan masalah sains yang terlalu kompleks untuk diselesaikan secara analitis:</p>
<ul>
  <li><strong>Simulasi Iklim:</strong> Model komputer memproyeksikan perubahan suhu bumi dan pola cuaca dekade ke depan</li>
  <li><strong>Fisika Partikel:</strong> Simulasi tumbukan partikel subatomik di CERN (Large Hadron Collider)</li>
  <li><strong>Astronomi:</strong> Teleskop James Webb menghasilkan data yang dianalisis oleh algoritma AI untuk menemukan eksoplanet</li>
  <li><strong>Kimia Komputasi:</strong> Memprediksi reaksi kimia tanpa perlu eksperimen fisik yang berbahaya</li>
</ul>

<h4>2. Bioinformatika</h4>
<p>Bidang yang menggabungkan biologi, komputer, dan matematika untuk menganalisis data biologis:</p>
<ul>
  <li><strong>Human Genome Project:</strong> Pemetaan seluruh 3 miliar pasang basa DNA manusia menggunakan superkomputer</li>
  <li><strong>Pengembangan Vaksin COVID-19:</strong> Analisis sekuens RNA virus SARS-CoV-2 menggunakan bioinformatika memungkinkan pengembangan vaksin dalam waktu sangat singkat</li>
  <li><strong>AlphaFold:</strong> AI DeepMind memprediksi struktur 3D protein dengan akurasi mendekati eksperimen</li>
  <li><strong>Personalized Medicine:</strong> Pengobatan yang disesuaikan dengan profil genetik individu</li>
</ul>

<h3>C. Informatika dalam Bidang Sosial dan Humaniora</h3>
<div class="img-wrap">
  <img src="https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=800&q=80" alt="Digital Humanities" loading="lazy">
  <p class="img-caption">Digital humanities — metode komputasi untuk penelitian sosial dan budaya</p>
</div>

<h4>Digital Humanities</h4>
<ul>
  <li><strong>Text Mining & NLP:</strong> Analisis ribuan teks sastra, sejarah, atau sosial secara komputasi untuk menemukan pola tersembunyi</li>
  <li><strong>Digital Archaeology:</strong> Rekonstruksi situs arkeologi menggunakan 3D scanning, LiDAR, dan realitas virtual</li>
  <li><strong>Sentiment Analysis:</strong> Menganalisis opini publik dari media sosial secara real-time untuk memahami tren masyarakat</li>
  <li><strong>Network Analysis:</strong> Memahami struktur dan dinamika jaringan sosial (siapa berpengaruh, bagaimana informasi menyebar)</li>
</ul>

<h3>D. Informatika dalam Bidang Seni dan Kreativitas</h3>
<div class="img-grid2">
  <div class="img-wrap">
    <img src="https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=600&q=80" alt="Seni Digital" loading="lazy">
    <p class="img-caption">Seni digital — perpaduan kreativitas manusia dan teknologi</p>
  </div>
  <div class="img-wrap">
    <img src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80" alt="AI Generatif" loading="lazy">
    <p class="img-caption">AI Generatif mengubah cara manusia berkreasi</p>
  </div>
</div>
<ul>
  <li><strong>Generative Art:</strong> Algoritma menghasilkan karya visual yang unik secara otomatis</li>
  <li><strong>CGI & VFX:</strong> Computer-Generated Imagery dalam film blockbuster (Avatar, Marvel)</li>
  <li><strong>Digital Audio Workstation (DAW):</strong> Produksi dan komposisi musik digital (Logic Pro, FL Studio, Ableton)</li>
  <li><strong>Game Development:</strong> Unity, Unreal Engine — platform pengembangan game 2D dan 3D</li>
  <li><strong>AI Generatif:</strong> DALL-E, Midjourney (gambar dari teks), ChatGPT (teks), Suno (musik) — merevolusi kreasi konten</li>
  <li><strong>NFT:</strong> Non-Fungible Token memungkinkan kepemilikan dan perdagangan karya seni digital yang terverifikasi blockchain</li>
</ul>

<h3>E. Metodologi Pengembangan Software</h3>
<div class="img-grid2">
  <div class="img-wrap">
    <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80" alt="Agile" loading="lazy">
    <p class="img-caption">Agile — pengembangan software iteratif dan kolaboratif</p>
  </div>
  <div class="img-wrap">
    <img src="https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600&q=80" alt="Git" loading="lazy">
    <p class="img-caption">Git — sistem version control untuk kolaborasi kode</p>
  </div>
</div>
<div class="table-wrap">
<table>
  <tr><th>Metodologi</th><th>Pendekatan</th><th>Kelebihan</th><th>Cocok untuk</th></tr>
  <tr><td>Waterfall</td><td>Linear, satu fase selesai dulu</td><td>Dokumentasi lengkap, terstruktur</td><td>Proyek dengan kebutuhan jelas dan stabil</td></tr>
  <tr><td>Agile</td><td>Iteratif, sprint pendek (1-4 minggu)</td><td>Fleksibel, cepat adaptasi</td><td>Proyek dengan kebutuhan berubah-ubah</td></tr>
  <tr><td>Scrum</td><td>Framework Agile dengan peran spesifik</td><td>Transparan, kolaboratif</td><td>Tim kecil-menengah</td></tr>
  <tr><td>DevOps</td><td>Integrasi Development dan Operations</td><td>Deployment cepat dan andal</td><td>Aplikasi dengan update sering</td></tr>
</table>
</div>

<h4>Version Control dengan Git</h4>
<p>Git adalah sistem version control terdistribusi yang memungkinkan tim berkolaborasi dan melacak perubahan kode:</p>
<div class="code-block">
git init                    # Inisialisasi repository baru
git clone [url]             # Salin repository dari remote
git status                  # Lihat status perubahan
git add .                   # Stage semua perubahan
git add [file]              # Stage file tertentu
git commit -m "pesan"       # Simpan perubahan dengan pesan deskriptif
git push origin main        # Kirim ke repository remote
git pull                    # Ambil dan gabungkan update terbaru
git branch [nama-branch]    # Buat branch baru
git checkout [branch]       # Pindah ke branch
git merge [branch]          # Gabungkan branch ke branch aktif
git log --oneline           # Lihat riwayat commit
</div>

<h3>F. Internet of Things (IoT)</h3>
<div class="img-grid2">
  <div class="img-wrap">
    <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" alt="Smart Home" loading="lazy">
    <p class="img-caption">Smart Home — rumah pintar berbasis sensor dan IoT</p>
  </div>
  <div class="img-wrap">
    <img src="https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=600&q=80" alt="Smart City" loading="lazy">
    <p class="img-caption">Smart City — kota cerdas mengoptimalkan layanan publik</p>
  </div>
</div>
<p>IoT (Internet of Things) adalah ekosistem perangkat fisik yang dilengkapi sensor, software, dan konektivitas untuk mengumpulkan dan bertukar data melalui internet.</p>
<p><strong>Komponen utama IoT:</strong></p>
<ul>
  <li><strong>Sensor/Aktuator:</strong> Mengumpulkan data dari lingkungan (suhu, tekanan, gerakan, cahaya) atau melakukan aksi fisik</li>
  <li><strong>Konektivitas:</strong> WiFi, Bluetooth, Zigbee, LoRa, NB-IoT, 5G</li>
  <li><strong>Komputasi Edge:</strong> Pemrosesan data di dekat sumber, bukan di cloud, untuk respons real-time</li>
  <li><strong>Platform Cloud:</strong> AWS IoT, Google Cloud IoT, Azure IoT Hub</li>
  <li><strong>Analitik dan AI:</strong> Mengekstrak wawasan dari data IoT yang masif</li>
</ul>
<div class="table-wrap">
<table>
  <tr><th>Domain</th><th>Aplikasi IoT</th><th>Contoh Nyata</th></tr>
  <tr><td>Smart Home</td><td>Otomasi rumah</td><td>Amazon Echo, Google Nest, lampu Philips Hue</td></tr>
  <tr><td>Smart City</td><td>Manajemen kota</td><td>Lampu jalan adaptif, parkir pintar, monitoring polusi</td></tr>
  <tr><td>Industri (IIoT)</td><td>Predictive maintenance</td><td>Sensor mesin pabrik prediksi kerusakan sebelum terjadi</td></tr>
  <tr><td>Pertanian</td><td>Precision agriculture</td><td>Irigasi otomatis berdasarkan sensor kelembaban tanah</td></tr>
  <tr><td>Kesehatan</td><td>Remote patient monitoring</td><td>Smartwatch memantau detak jantung 24/7</td></tr>
  <tr><td>Logistik</td><td>Asset tracking</td><td>GPS realtime di armada pengiriman</td></tr>
</table>
</div>

<h3>G. Langkah-Langkah Membuat Proyek Informatika</h3>
<p>Metodologi pengembangan proyek yang sistematis memastikan hasil yang berkualitas:</p>
<ol>
  <li><strong>Identifikasi Masalah:</strong> Temukan masalah nyata yang relevan. Lakukan riset pengguna untuk memahami kebutuhan. Buat problem statement yang jelas.</li>
  <li><strong>Analisis Kebutuhan:</strong> Kumpulkan kebutuhan fungsional (apa yang harus dilakukan sistem) dan non-fungsional (performa, keamanan, usability).</li>
  <li><strong>Desain Sistem:</strong> Buat arsitektur sistem, desain database, wireframe UI/UX. Gunakan diagram UML, ERD, atau flowchart.</li>
  <li><strong>Implementasi:</strong> Tulis kode program sesuai desain. Ikuti coding standards. Lakukan code review.</li>
  <li><strong>Pengujian:</strong> Unit testing, integration testing, user acceptance testing (UAT). Perbaiki bug yang ditemukan.</li>
  <li><strong>Deployment:</strong> Luncurkan ke pengguna. Tulis dokumentasi teknis dan panduan pengguna.</li>
  <li><strong>Evaluasi dan Iterasi:</strong> Kumpulkan feedback pengguna, ukur metrik keberhasilan, lakukan perbaikan berkelanjutan.</li>
</ol>
<div class="info-box success">
  <p><strong>Prinsip MVP (Minimum Viable Product):</strong> Mulai dengan versi paling sederhana yang masih memberikan nilai kepada pengguna. Lebih baik meluncurkan produk sederhana yang berfungsi daripada menunggu produk sempurna yang tidak pernah selesai. Dapatkan feedback nyata dan iterate!</p>
</div>
`
};

// showMateri didefinisikan di app.js
