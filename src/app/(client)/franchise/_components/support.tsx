import {
  LuBookOpen,
  LuBuilding2,
  LuHeadphones,
  LuLayoutGrid,
} from "react-icons/lu";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
export const SupportSection = () => {
  return (
    <section className="w-full py-16 px-4 ">
      <div className="container mx-auto">
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
        <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
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
    </section>
  );
};
