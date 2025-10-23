export const Services = () => {
  return (
    <section>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Layanan Kami
      </h2>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-6">
        <div className="p-4 border rounded-lg">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Properti Hunian
          </h3>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>Vila mewah, apartemen, rumah tapak.</li>
            <li>Program pembelian rumah pertama kali.</li>
            <li>Layanan manajemen sewa.</li>
          </ul>
        </div>
        <div className="p-4 border rounded-lg ">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Real Estat Komersial
          </h3>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>Ruang kantor, gerai ritel, hotel.</li>
            <li>Negosiasi sewa dan penempatan penyewa.</li>
          </ul>
        </div>
        <div className="p-4 border rounded-lg ">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Investasi &amp; Pengembangan
          </h3>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>Analisis pasar dan studi kelayakan.</li>
          </ul>
        </div>
        <div className="p-4 border rounded-lg ">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Hukum &amp; Konsultasi
          </h3>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>Dokumentasi properti, uji tuntas, layanan notaris.</li>
            <li>
              Konsultasi pajak dan kepemilikan asing (untuk properti HGB dan Hak
              Milik).
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
