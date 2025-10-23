import { LuBookOpen, LuBuilding2, LuComputer, LuNetwork } from "react-icons/lu";
import Image from "next/image";

const SUPPORTS = [
  {
    icon: <LuBuilding2 />,
    title: "Pengembangan",
    description:
      "Pemilihan lokasi, bantuan penyiapan, dan perencanaan pembukaan kantor.",
  },
  {
    icon: <LuBookOpen />,
    title: "Pelatihan",
    description:
      "Penjualan, negosiasi, hukum properti, dan perangkat teknologi.",
  },
  {
    icon: <LuNetwork />,
    title: "Pemasaran",
    description:
      "Kampanye merek bersama, templat media sosial, dan perolehan prospek.",
  },
  {
    icon: <LuComputer />,
    title: "Teknologi",
    description:
      "Akses ke CRM PrimePro Indonesia, aplikasi seluler, dan dasbor analitik",
  },
];

export const Support = () => {
  return (
    <section className="mx-auto my-32 max-w-6xl">
      <div className="max-w-lg flex flex-col gap-4 mb-8 lg:mb-16 sm:items-center sm:mx-auto sm:max-w-4xl sm:text-center">
        <div className="border rounded text-xs py-1 px-2 w-fit bg-primary">
          Dukungan Penuh
        </div>
        <h2 className="text-3xl font-bold sm:text-4xl">
          Dukungan yang akan Anda Terima
        </h2>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="grid gap-4 lg:order-2 lg:grid-cols-2">
          {SUPPORTS.map((supp) => (
            <div
              key={supp.title}
              className="rounded flex flex-col lg:items-center justify-center border p-4"
            >
              <span className="text-primary text-3xl mb-4 rounded-full lg:p-4 lg:border border-primary">
                {supp.icon}
              </span>
              <h3 className="font-semibold text-xl mb-2 lg:text-2xl">
                {supp.title}
              </h3>
              <h4 className="lg:text-lg lg:text-center">{supp.description}</h4>
            </div>
          ))}
        </div>
        <Image
          src="/images/primepro/abby_and_partner.HEIC"
          alt="Abby and Partner"
          width={512}
          height={512}
          className="w-full object-cover rounded-lg"
        />
      </div>
      {/*<div className="container mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded bg-primary px-3 py-1 text-sm text-primary-foreground">
              Dukungan Penuh
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Dukungan yang Akan Anda Terima
            </h2>
          </div>
        </div>
        <div className="mx-auto max-w-5xl py-4 lg:py-12 grid md:grid-cols-2 gap-8">

          <div className="grid gap-8 md:grid-cols-2">
            <Card className="flex flex-col items-center text-center">
              <CardHeader>
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 mx-auto">
                  <LuBuilding2 className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="mt-4">Pengembangan Bisnis</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Pemilihan lokasi, bantuan penyiapan, dan perencanaan pembukaan
                  kantor.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="flex flex-col items-center text-center">
              <CardHeader>
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 mx-auto">
                  <LuBookOpen className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="mt-4">Pelatihan</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Penjualan, negosiasi, hukum properti, dan perangkat teknologi.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="flex flex-col items-center text-center">
              <CardHeader>
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 mx-auto">
                  <LuLayoutGrid className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="mt-4">Pemasaran</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Kampanye merek bersama, templat media sosial, dan perolehan
                  prospek.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="flex flex-col items-center text-center">
              <CardHeader>
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 mx-auto">
                  <LuHeadphones className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="mt-4">Teknologi</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Akses ke CRM PrimePro Indonesia, aplikasi seluler, dan dasbor
                  analitik.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>*/}
    </section>
  );
};
