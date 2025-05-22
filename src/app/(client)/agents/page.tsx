import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import {
  LuAward,
  LuBuilding,
  LuMail,
  LuMapPin,
  LuTarget,
  LuTrendingUp,
  LuUsers,
} from "react-icons/lu";

export default function JobPosting() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-b from-brand/50 to-brand">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Peluang Karir: Marketing Executive
            </h1>
            <div className="flex items-center justify-center gap-2 ">
              <LuBuilding className="h-5 w-5" />
              <span className="text-xl md:text-2xl font-medium">
                PrimePro Indonesia
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              PrimePro Indonesia, sebuah perusahaan broker properti yang dinamis
              dan terus berkembang, sedang memperluas timnya dan mencari
              individu yang termotivasi tinggi untuk bergabung sebagai Marketing
              Executive. Jika Anda seorang profesional yang mandiri,
              berorientasi pada hasil, dan memiliki visi untuk sukses, kami
              mengundang Anda untuk menjelajahi peluang menarik ini.
            </p>
            <div className="flex justify-center my-8">
              <Image
                src="/images/primepro.png"
                alt="Real Estate Team"
                width={600}
                height={300}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">
              Mengapa Bergabung dengan PrimePro Indonesia?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Di PrimePro Indonesia, kami percaya dalam menghargai ambisi dan
              kerja keras. Sebagai posisi berbasis komisi, peran ini menawarkan
              potensi penghasilan tak terbatas, memungkinkan Anda mengendalikan
              sepenuhnya pertumbuhan finansial Anda. Manfaat utama meliputi:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full">
                  <LuTrendingUp className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Struktur Komisi yang Sangat Kompetitif
                  </h3>
                  <p className="text-gray-600">
                    Dapatkan komisi besar untuk setiap transaksi sukses, tanpa
                    batas gaji tetap.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full">
                  <LuUsers className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Program Pelatihan Komprehensif
                  </h3>
                  <p className="text-gray-500">
                    Dapatkan pelatihan terbaik di industri untuk meningkatkan
                    pengetahuan Anda.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full">
                  <LuAward className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Insentif Berbasis Kinerja
                  </h3>
                  <p className="text-gray-600">
                    Capai target Anda dan dapatkan bonus perjalanan eksklusif
                    serta penghargaan lainnya.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full">
                  <LuTarget className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Jalur Karir yang Fleksibel
                  </h3>
                  <p className="text-gray-600">
                    Terbuka untuk semua latar belakang dan kelompok usia.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Qualities */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Kualitas yang Kami Cari</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Kami mencari individu yang mencerminkan kualitas berikut:
            </p>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <div className="min-w-5 mt-1">•</div>
                <div>
                  <span className="font-semibold">Mandiri & Termotivasi:</span>{" "}
                  Kemampuan bekerja secara mandiri sambil mencapai hasil.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="min-w-5 mt-1">•</div>
                <div>
                  <span className="font-semibold">Berorientasi Target:</span>{" "}
                  Keinginan kuat untuk memenuhi dan melampaui tujuan penjualan.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="min-w-5 mt-1 ">•</div>
                <div>
                  <span className="font-semibold">Visioner & Ambisius:</span>{" "}
                  Bersemangat membangun karir sukses di bidang properti.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="min-w-5 mt-1 ">•</div>
                <div>
                  <span className="font-semibold">
                    Keterampilan Komunikasi yang Baik:
                  </span>{" "}
                  Percaya diri dalam berinteraksi dengan klien dan menutup
                  kesepakatan.
                </div>
              </li>
            </ul>
          </div>

          {/* Role */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold  mb-6">
              Peran Anda sebagai Marketing Executive
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Sebagai anggota kunci tim penjualan kami, Anda akan:
            </p>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <div className="min-w-5 mt-1 ">•</div>
                <div>
                  Secara proaktif menghasilkan prospek dan mengubahnya menjadi
                  transaksi properti yang sukses.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="min-w-5 mt-1 ">•</div>
                <div>Membangun dan memelihara hubungan klien yang kuat.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="min-w-5 mt-1 ">•</div>
                <div>
                  Tetap update dengan tren pasar untuk memberikan rekomendasi
                  yang informatif.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="min-w-5 mt-1 ">•</div>
                <div>
                  Bekerja sama dengan tim PrimePro Indonesia untuk mencapai
                  target kolektif dan individu.
                </div>
              </li>
            </ul>
          </div>

          {/* Application */}
          <div className="bg-gradient-to-r from-brand/10 to-brand  rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Cara Mendaftar</h2>
            <p className="leading-relaxed mb-6">
              Jika Anda siap mengambil langkah berikutnya dalam karir Anda,
              kirimkan CV/resume Anda ke:
            </p>
            <div className="flex flex-col md:flex-row gap-6 items-center justify-center mb-8">
              <div className="flex items-center gap-2">
                <LuMail className="h-5 w-5" />
                <Link
                  href="mailto:primeproagent@gmail.com"
                  className="hover:underline"
                >
                  primeproagent@gmail.com
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <LuMapPin className="h-5 w-5" />
                <span>Jl Kemang Raya No. 1, Jakarta Selatan 12730</span>
              </div>
            </div>
            <div className="text-center">
              <Link
                href="mailto:primeproagent@gmail.com"
                className={cn(buttonVariants())}
              >
                Kirim Lamaran Sekarang
              </Link>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-10 mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Bergabunglah dengan PrimePro Indonesia hari ini
            </h2>
            <p className="text-gray-600 text-lg">
              dan buka peluang karir yang memberdayakan kesuksesan Anda!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
