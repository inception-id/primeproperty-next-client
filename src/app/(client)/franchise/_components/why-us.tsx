import Image from "next/image";
import { LuCircleCheck } from "react-icons/lu";
export const WhyUs = () => {
  return (
    <section className="w-full p-4 py-16">
      <div className="container mx-auto" id="why">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded bg-primary px-3 py-1 text-sm text-primary-foreground">
              Keunggulan Kami
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Mengapa Franchise dengan PrimePro Indonesia?
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              PrimePro Indonesia adalah agen terpercaya di bidang properti, yang
              dikenal karena inovasi, branding yang kuat, dan kesuksesan yang
              terbukti. Dengan bergabung dengan jaringan Franchise kami, Anda
              memperoleh akses ke:
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <Image
            src="/images/primepro/training.jpg"
            width={550}
            height={550}
            alt="Real estate agents in meeting"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
          <div className="flex flex-col justify-center space-y-4">
            <ul className="grid gap-6">
              <li className="flex items-start gap-4">
                <LuCircleCheck className="mt-1 h-6 w-6 flex-none text-primary" />
                <div>
                  <h3 className="font-semibold">
                    Pengenalan Merek yang Terbukti
                  </h3>
                  <p className="text-muted-foreground">
                    Memanfaatkan reputasi kami sebagai agen properti terkemuka.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <LuCircleCheck className="mt-1 h-6 w-6 flex-none text-primary" />
                <div>
                  <h3 className="font-semibold">
                    Pelatihan &amp; Dukungan Komprehensif
                  </h3>
                  <p className="text-muted-foreground">
                    Dari teknik penjualan hingga kepatuhan hukum.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <LuCircleCheck className="mt-1 h-6 w-6 flex-none text-primary" />
                <div>
                  <h3 className="font-semibold">Teknologi Mutakhir</h3>
                  <p className="text-muted-foreground">
                    CRM milik kami, alat pemasaran, dan platform properti.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <LuCircleCheck className="mt-1 h-6 w-6 flex-none text-primary" />
                <div>
                  <h3 className="font-semibold">
                    Daftar Eksklusif &amp; Kemitraan Pengembang
                  </h3>
                  <p className="text-muted-foreground">
                    Akses prioritas ke properti premium.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <LuCircleCheck className="mt-1 h-6 w-6 flex-none text-primary" />
                <div>
                  <h3 className="font-semibold">
                    Dukungan Pertumbuhan Bisnis Berkelanjutan
                  </h3>
                  <p className="text-muted-foreground">
                    Pemasaran, perolehan prospek, dan panduan operasional.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
