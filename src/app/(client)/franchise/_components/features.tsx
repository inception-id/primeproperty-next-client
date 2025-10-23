import Image from "next/image";
import { LuCircleCheck } from "react-icons/lu";
const FEATURES = [
  {
    title: "Pengenalan Merek yang Terbukti",
    description: "Memanfaatkan reputasi kami sebagai agen properti terkemuka.",
  },
  {
    title: "Pelatihan & Dukungan Komprehensif",
    description: "Dari teknik penjualan hingga kepatuhan hukum.",
  },
  {
    title: "Teknologi Mutakhir",
    description: "CRM milik kami, alat pemasaran, dan platform properti.",
  },
  {
    title: "Daftar Eksklusif & Kemitraan Pengembang",
    description: "Akses prioritas ke properti premium.",
  },
  {
    title: "Dukungan Pertumbuhan Bisnis Berkelanjutan",
    description: "Pemasaran, perolehan prospek, dan panduan operasional.",
  },
];

export const Features = () => {
  return (
    <section className="mx-auto my-32 max-w-6xl">
      <div className="max-w-lg flex flex-col gap-4 mb-8 lg:mb-16 sm:items-center sm:mx-auto sm:max-w-4xl sm:text-center">
        <div className="border rounded text-xs py-1 px-2 w-fit bg-primary">
          Keunggulan Kami
        </div>
        <h2 className="text-3xl font-bold sm:text-4xl">
          Mengapa Franchise dengan PrimePro Indonesia?
        </h2>
        <h3 className="text-muted-foreground sm:text-2xl">
          PrimePro Indonesia adalah agen terpercaya di bidang properti, yang
          dikenal karena inovasi, branding yang kuat, dan kesuksesan yang
          terbukti. Dengan bergabung dengan jaringan Franchise kami, Anda
          memperoleh akses ke:
        </h3>
      </div>

      <div className="grid gap-8 lg:gap-12 max-w-lg sm:max-w-4xl sm:grid-cols-2 lg:max-w-5xl">
        <ul className="flex flex-col gap-4 lg:order-2 lg:gap-8">
          {FEATURES.map((feat) => (
            <li className="flex gap-4" key={feat.title}>
              <span className="mt-1">
                <LuCircleCheck className="text-primary text-2xl" />
              </span>
              <span>
                <p className="font-bold text-lg lg:text-xl">{feat.title}</p>
                <p className="lg:text-lg">{feat.description}</p>
              </span>
            </li>
          ))}
        </ul>
        <Image
          src="/images/primepro/training.jpg"
          className="rounded-[15px] shadow"
          alt="payments illustration light"
          width={1207}
          height={929}
        />
      </div>
    </section>
  );
};
