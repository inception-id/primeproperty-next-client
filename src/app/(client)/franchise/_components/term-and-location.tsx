import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import { LuBuilding, LuNetwork, LuThumbsUp } from "react-icons/lu";
const TERMS = [
  {
    icon: <LuBuilding />,
    title: "Pengalaman Wirausaha",
    description:
      "Minimal 3 tahun pengalaman wirausaha (lebih disukai di bidang real estate, tetapi tidak wajib).",
  },
  {
    icon: <LuNetwork />,
    title: "Jaringan Lokal",
    description: "Jaringan lokal yang kuat dan pemahaman pasar.",
  },
  {
    icon: <LuThumbsUp />,
    title: "Komitmen Etika",
    description:
      "Komitmen terhadap standar etika dan layanan PrimePro Indonesia.",
  },
];

const Term = () => {
  return (
    <div>
      <div className="border rounded text-xs py-1 px-2 w-fit bg-primary mb-4">
        Kualifikasi
      </div>
      <h2 className="text-4xl font-medium leading-tight mb-8">
        Persyaratan Franchise
      </h2>
      <div className="flex flex-col gap-4 lg:gap-8">
        {TERMS.map((term) => (
          <div key={term.title}>
            <div className="mb-2 flex items-center gap-3">
              <span className="text-primary text-lg">{term.icon}</span>
              <h3 className="text-2xl font-semibold">{term.title}</h3>
            </div>
            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
              {term.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Location = () => {
  return (
    <div>
      <div className="border rounded text-xs py-1 px-2 w-fit bg-primary mb-4">
        Lokasi
      </div>
      <h2 className="text-4xl font-medium leading-tight mb-8">
        Lokasi yang dibutuhkan
      </h2>

      <div className="grid gap-8 lg:grid-cols-2">
        <Card className="p-4 border-primary">
          <CardTitle className="mb-4">Jakarta Pusat</CardTitle>
          <CardContent className="p-0">
            <Image
              alt="Jakarta"
              src="/images/primepro/jakarta.jpg"
              className="w-full rounded lg:h-80 object-cover"
              width={512}
              height={512}
            />
          </CardContent>
        </Card>
        <Card className="p-4 border-primary">
          <CardTitle className="mb-4">Bandung</CardTitle>
          <CardContent className="p-0">
            <Image
              alt="Bandung"
              src="/images/primepro/bandung.jpg"
              className="w-full rounded lg:h-80 object-cover"
              width={512}
              height={512}
            />
          </CardContent>
        </Card>
        <Card className="p-4 lg:col-span-2 border-primary">
          <CardTitle className="mb-4">Bali</CardTitle>
          <CardContent className="p-0">
            <Image
              alt="Bali"
              src="/images/primepro/bali.jpg"
              className="w-full rounded"
              width={512}
              height={512}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export const TermAndLocation = () => {
  return (
    <section className="container mx-auto my-16 flex flex-col gap-16 lg:gap-32 md:flex-row">
      <Term />
      <Location />
    </section>
  );
};
