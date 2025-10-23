import { LuCircleCheck } from "react-icons/lu";

const FEATURES = [
  {
    title: "Keahlian Lokal, Standar Global",
    description:
      "Pengetahuan mendalam tentang hukum properti Indonesia dan dinamika pasar.",
  },
  {
    title: "Layanan Lengkap",
    description: "Dari pencarian properti hingga dukungan pasca pembelian.",
  },
  {
    title: "Jaringan Terpercaya",
    description:
      "Kemitraan dengan pengembang, bank, dan firma hukum terkemuka.",
  },
  {
    title: "Pendekatan Berpusat pada Pelanggan",
    description: "Solusi yang disesuaikan berdasarkan kebutuhan klien.",
  },
];

export const WhyUs = () => {
  return (
    <section>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Mengapa Memilih Kami?
      </h2>

      <ul className="grid gap-4 lg:grid-cols-2 lg:gap-8 mt-6">
        {FEATURES.map((feat) => (
          <li className="flex gap-4" key={feat.title}>
            <span className="mt-1">
              <LuCircleCheck className="text-green-500 text-2xl" />
            </span>
            <span>
              <p className="font-bold text-lg lg:text-xl">{feat.title}</p>
              <p className="lg:text-lg">{feat.description}</p>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};
