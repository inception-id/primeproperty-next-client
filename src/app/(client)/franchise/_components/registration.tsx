export const RegistrationSection = () => {
  return (
    <section className="w-full py-16 px-4  bg-muted">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Cara Mendaftar
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Proses sederhana untuk memulai perjalanan franchise Anda dengan
              PrimePro Indonesia
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-3xl">
          <div className="flex items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary bg-primary text-primary-foreground">
              1
            </div>
            <div className="ml-4 flex-1">
              <h3 className="text-xl font-bold">Konsultasi</h3>
              <p className="text-muted-foreground">
                Diskusikan pasar dan tujuan Anda dengan tim kami.
              </p>
            </div>
          </div>
          <div className="my-4 ml-6 h-12 w-0.5 bg-border"></div>
          <div className="flex items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary bg-primary text-primary-foreground">
              2
            </div>
            <div className="ml-4 flex-1">
              <h3 className="text-xl font-bold">Evaluasi</h3>
              <p className="text-muted-foreground">
                Tim kami akan mengevaluasi aplikasi Anda dan menilai kesesuaian.
              </p>
            </div>
          </div>
          <div className="my-4 ml-6 h-12 w-0.5 bg-border"></div>
          <div className="flex items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary bg-primary text-primary-foreground">
              3
            </div>
            <div className="ml-4 flex-1">
              <h3 className="text-xl font-bold">Persetujuan & Pelatihan</h3>
              <p className="text-muted-foreground">
                Setelah disetujui, Anda akan menerima pelatihan komprehensif.
              </p>
            </div>
          </div>
          <div className="my-4 ml-6 h-12 w-0.5 bg-border"></div>
          <div className="flex items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary bg-primary text-primary-foreground">
              4
            </div>
            <div className="ml-4 flex-1">
              <h3 className="text-xl font-bold">Peluncuran</h3>
              <p className="text-muted-foreground">
                Buka kantor franchise PrimePro Indonesia Anda dengan dukungan
                penuh dari tim kami.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
