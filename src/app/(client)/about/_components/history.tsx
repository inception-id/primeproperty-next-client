export const History = () => {
  return (
    <section>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Sejarah Kami
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        PrimePro Indonesia didirikan oleh agen properti berpengalaman yang sudah
        berhasil menangani lebih dari ratusan kasus transaksi, dengan visi untuk
        menciptakan agen properti terpercaya yang mengutamakan kepuasan klien.
        Dimulai dari kantor kecil di Jakarta Selatan, perusahaan ini berkembang
        pesat karena komitmennya terhadap transparansi dan layanan yang
        dipersonalisasi untuk setiap kebutuhan dari klien.
      </p>

      <div className="grid gap-4 mt-6 lg:grid-cols-2">
        <div className="p-4 border rounded-lg border-primary">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Pertumbuhan Awal
          </h3>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>
              {" "}
              Berdiri sebagai kantor agen properti yang berfokus pada properti
              hunian mewah di Jakarta.
            </li>
            <li>
              Membangun hubungan yang kuat dengan pengembang dan investor.
            </li>
            <li>
              Diakui atas praktik bisnis yang etis di pasar yang kompetitif.
            </li>
          </ul>
        </div>
        <div className="p-4 border rounded-lg border-primary">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Ekspansi &amp; Diversifikasi
          </h3>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>
              Memperluas layanan untuk mencakup real estat komersial dan
              manajemen properti.
            </li>
            <li>
              Membuka cabang untuk memenuhi permintaan yang terus meningkat.
            </li>
            <li>
              Membentuk tim hukum internal untuk membantu transaksi properti dan
              uji tuntas.
            </li>
          </ul>
        </div>
        <div className="p-4 border rounded-lg border-primary">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Transformasi Digital
          </h3>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>
              Mengembangkan portal properti daring milik sendiri untuk akses
              klien yang lancar.
            </li>
            <li>
              Bermitra dengan jaringan real estat internasional untuk melayani
              ekspatriat dan investor asing.
            </li>
          </ul>
        </div>
        <div className="p-4 border rounded-lg border-primary">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Kepemimpinan Pasar
          </h3>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>
              Melanjutkan pertumbuhan meskipun menghadapi tantangan ekonomi,
              dengan fokus pada properti mewah dan berkelanjutan.
            </li>
            <li>
              Memperkenalkan alat penilaian properti untuk penetapan harga yang
              akurat.
            </li>
            <li>
              Memperluas portofolio untuk mencakup properti industri dan
              akuisisi lahan.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
