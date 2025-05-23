import Link from "next/link";
import {
  LuBuilding2,
  LuCircleCheck,
  LuFacebook,
  LuGlobe,
  LuInstagram,
  LuLinkedin,
  LuMail,
  LuMapPin,
  LuPhone,
  LuYoutube,
} from "react-icons/lu";

export default function TentangKami() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <h1 className="text-4xl font-bold mb-8 text-center">Tentang Kami</h1>

      {/* Introduction */}
      <section className="mb-12">
        <p className="text-lg leading-relaxed mb-6">
          PrimePro Indonesia adalah agen properti yang berkantor pusat di
          Jakarta, Indonesia. Kantor properti spesialis dalam pemasaran properti
          residensial, komersial, dan investasi. Dengan gabungan agen lebih dari
          20 tahun pengalaman di industri ini, kami telah membangun reputasi
          untuk integritas, profesionalisme, dan layanan pelanggan yang luar
          biasa. Misi kami adalah membantu klien menemukan properti impian
          mereka sambil memberikan panduan ahli tentang tren pasar, proses
          hukum, dan peluang investasi.
        </p>
      </section>

      {/* History */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Sejarah Kami</h2>
        <p className="text-lg leading-relaxed mb-6">
          PrimePro Indonesia didirikan oleh agen properti berpengalaman yang
          sudah berhasil menangani lebih dari ratusan kasus transaksi, dengan
          visi untuk menciptakan agen properti terpercaya yang mengutamakan
          kepuasan klien. Dimulai dari kantor kecil di Jakarta Selatan,
          perusahaan ini berkembang pesat karena komitmennya terhadap
          transparansi dan layanan yang dipersonalisasi untuk setiap kebutuhan
          dari klien.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-muted p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Pertumbuhan Awal</h3>
            <ul className="space-y-2">
              <li>
                • Berdiri sebagai kantor agen properti yang berfokus pada
                properti hunian mewah di Jakarta.
              </li>
              <li>
                • Membangun hubungan yang kuat dengan pengembang dan investor.
              </li>
              <li>
                • Diakui atas praktik bisnis yang etis di pasar yang kompetitif.
              </li>
            </ul>
          </div>

          <div className="bg-muted p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Ekspansi & Diversifikasi</h3>
            <ul className="space-y-2">
              <li>
                • Memperluas layanan untuk mencakup real estat komersial dan
                manajemen properti.
              </li>
              <li>
                • Membuka cabang untuk memenuhi permintaan yang terus meningkat.
              </li>
              <li>
                • Membentuk tim hukum internal untuk membantu transaksi properti
                dan uji tuntas.
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-muted p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Transformasi Digital</h3>
            <ul className="space-y-2">
              <li>
                • Mengembangkan portal properti daring milik sendiri untuk akses
                klien yang lancar.
              </li>
              <li>
                • Bermitra dengan jaringan real estat internasional untuk
                melayani ekspatriat dan investor asing.
              </li>
            </ul>
          </div>

          <div className="bg-muted p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Kepemimpinan Pasar</h3>
            <ul className="space-y-2">
              <li>
                • Melanjutkan pertumbuhan meskipun menghadapi tantangan ekonomi,
                dengan fokus pada properti mewah dan berkelanjutan.
              </li>
              <li>
                • Memperkenalkan alat penilaian properti untuk penetapan harga
                yang akurat.
              </li>
              <li>
                • Memperluas portofolio untuk mencakup properti industri dan
                akuisisi lahan.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Layanan Kami</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="border p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Properti Hunian</h3>
            <ul className="space-y-2">
              <li>• Vila mewah, apartemen, rumah tapak.</li>
              <li>• Program pembelian rumah pertama kali.</li>
              <li>• Layanan manajemen sewa.</li>
            </ul>
          </div>

          <div className="border p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Real Estat Komersial</h3>
            <ul className="space-y-2">
              <li>• Ruang kantor, gerai ritel, hotel.</li>
              <li>• Negosiasi sewa dan penempatan penyewa.</li>
            </ul>
          </div>

          <div className="border p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Investasi & Pengembangan</h3>
            <ul className="space-y-2">
              <li>• Analisis pasar dan studi kelayakan.</li>
            </ul>
          </div>

          <div className="border p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Hukum & Konsultasi</h3>
            <ul className="space-y-2">
              <li>• Dokumentasi properti, uji tuntas, layanan notaris.</li>
              <li>
                • Konsultasi pajak dan kepemilikan asing (untuk properti HGB dan
                Hak Milik).
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Mengapa Memilih Kami?</h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3">
            <LuCircleCheck className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold">Keahlian Lokal, Standar Global</h3>
              <p>
                Pengetahuan mendalam tentang hukum properti Indonesia dan
                dinamika pasar.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <LuCircleCheck className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold">Layanan Lengkap</h3>
              <p>Dari pencarian properti hingga dukungan pasca pembelian.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <LuCircleCheck className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold">Jaringan Terpercaya</h3>
              <p>
                Kemitraan dengan pengembang, bank, dan firma hukum terkemuka.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <LuCircleCheck className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold">Pendekatan Berpusat pada Pelanggan</h3>
              <p>Solusi yang disesuaikan berdasarkan kebutuhan klien.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="mb-12 bg-muted p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Visi Kami</h2>
        <p className="text-lg leading-relaxed">
          Menjadi mitra real estate paling terpercaya di Indonesia, mendorong
          inovasi dengan tetap menjaga kepercayaan dan hubungan jangka panjang
          dengan klien.
        </p>
      </section>

      {/* Contact */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Hubungi Kami</h2>

        <div className="bg-muted p-6 rounded-lg">
          <div className="flex items-start gap-3 mb-4">
            <LuBuilding2 className="h-6 w-6 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold">Kantor Pusat:</h3>
              <p>PrimePro Indonesia</p>
            </div>
          </div>

          <div className="flex items-start gap-3 mb-4">
            <LuMapPin className="h-6 w-6 flex-shrink-0 mt-1" />
            <p>
              Kemang Icon Jakarta, Jl Kemang Raya No 1, Jakarta Selatan 12730
              Jl. Kemang Raya No. 1, Jakarta Selatan 12730
            </p>
          </div>

          <div className="flex items-start gap-3 mb-4">
            <LuPhone className="h-6 w-6 flex-shrink-0 mt-1" />
            <p>+62 821 1616 2995</p>
          </div>

          <div className="flex items-start gap-3 mb-4">
            <LuMail className="h-6 w-6 flex-shrink-0 mt-1" />
            <p>primeproagent@gmail.com</p>
          </div>

          <div className="flex items-start gap-3 mb-6">
            <LuGlobe className="h-6 w-6 flex-shrink-0 mt-1" />
            <p>www.primeproindonesia.com</p>
          </div>

          <div>
            <h3 className="font-bold mb-3">Ikuti Kami:</h3>
            <div className="flex gap-4">
              <Link
                href="https://www.instagram.com/primepro_id/"
                className="hover:text-primary"
              >
                <LuInstagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://www.linkedin.com/company/primepro-indonesia/"
                className="hover:text-primary"
              >
                <LuLinkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://www.facebook.com/share/1BHTU7HvZx/"
                className="hover:text-primary"
              >
                <LuFacebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://www.youtube.com/@primeproindonesia"
                className="hover:text-primary"
              >
                <LuYoutube className="h-6 w-6" />
                <span className="sr-only">Youtube</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
