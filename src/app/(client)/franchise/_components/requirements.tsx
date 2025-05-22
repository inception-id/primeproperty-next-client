import { LuAward, LuLayoutGrid, LuUsers } from "react-icons/lu";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Requirements = () => {
  return (
    <section className="w-full py-16 bg-muted px-4">
      <div className="container mx-auto">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Kualifikasi
            </div>
            <h2 className="mt-4 text-3xl font-bold">Persyaratan Franchise</h2>
            <ul className="mt-8 grid gap-6">
              <li className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <LuUsers className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <p className="text-base font-medium leading-none">
                    Pengalaman Wirausaha
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Minimal 3 tahun pengalaman wirausaha (lebih disukai di
                    bidang real estate, tetapi tidak wajib).
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <LuLayoutGrid className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <p className="text-base font-medium leading-none">
                    Jaringan Lokal
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Jaringan lokal yang kuat dan pemahaman pasar.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <LuAward className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <p className="text-base font-medium leading-none">
                    Komitmen Etika
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Komitmen terhadap standar etika dan layanan PrimePro
                    Indonesia.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Lokasi Prioritas
            </div>
            <h2 className="mt-4 text-3xl font-bold">
              Lokasi yang Sedang Difokuskan
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Jakarta Pusat</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/images/primepro.png"
                    width={400}
                    height={200}
                    alt="Jakarta Pusat"
                    className="aspect-video rounded-lg object-cover"
                  />
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Bandung</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/images/primepro.png"
                    width={400}
                    height={200}
                    alt="Bandung"
                    className="aspect-video rounded-lg object-cover"
                  />
                </CardContent>
              </Card>
              <Card className="sm:col-span-2">
                <CardHeader className="pb-2">
                  <CardTitle>Bali</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/images/primepro.png"
                    width={800}
                    height={200}
                    alt="Bali"
                    className="aspect-video rounded-lg object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
