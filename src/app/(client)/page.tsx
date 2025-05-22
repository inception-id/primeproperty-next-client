import Link from "next/link";
import { PopularProperties, PropertiesFilter } from "./properties/_components";
import { LuHouse } from "react-icons/lu";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";

export const revalidate = 0;

const Hero = () => {
  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="w-fit mx-auto flex flex-col gap-2 items-center justify-center">
        <Image
          src="/images/primepro.png"
          alt="Primepro Hero"
          width={120}
          height={120}
          className="mb-4"
        />
        <h1 className="text-3xl font-extrabold tracking-tight lg:text-4xl">
          PRIMEPRO INDONESIA
        </h1>
        <h2 className="border-b text-base lg:text-xl tracking-tight text-muted-foreground pb-2">
          Your practical ways of selling and buying properties
        </h2>
      </div>
      <div className="flex flex-col gap-4 items-center lg:justify-center">
        <PropertiesFilter searchParams={{}} />

        <Link
          href="/properties"
          className={cn(buttonVariants({ variant: "default" }))}
        >
          <LuHouse />
          Lihat Semua
        </Link>
      </div>
    </div>
  );
};

const Partners = () => {
  const PARTNERS = [
    "/images/banks/bca.png",
    "/images/banks/bni.png",
    "/images/banks/bri.png",
    "/images/banks/bsi.png",
    "/images/banks/mandiri.webp",
    "/images/banks/cimb.png",
    "/images/banks/ocbc.png",
    "/images/banks/panin.png",
    "/images/banks/permata.png",
    "/images/banks/danamon.webp",
    "/images/banks/maybank.png",
    "/images/banks/smbc.png",
  ];
  return (
    <div className="p-4 flex flex-col gap-4 md:gap-8">
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-bold text-center lg:text-3xl">
          Mitra Kami
        </h3>
        <h4 className="text-center text-muted-foreground lg:text-xl ">
          Konsisten memberikan layanan terbaik, menjalin kemitraan dengan
          perbankan untuk kemudahan transaksi Anda
        </h4>
      </div>
      <div className="grid grid-cols-3 place-items-center gap-2 md:grid-cols-4 lg:grid-cols-6">
        {PARTNERS.map((part, index) => (
          <Image
            key={`partner_${index}`}
            src={part}
            alt={part}
            width={150}
            height={100}
            className="w-full h-20 border px-2 object-contain rounded"
          />
        ))}
      </div>
    </div>
  );
};

const VideoThumbnail = () => {
  return (
    <div className="p-4 flex flex-col gap-4">
      <h3 className="text-xl font-bold text-center lg:text-3xl">
        Dedicated To The Joy Of Home
      </h3>
      <iframe
        width="100%"
        src="https://www.youtube.com/embed/0GXsLpqd5Ag?si=vpGT5OyvAeTYO8Sy"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="h-96 md:h-[400px] lg:h-[600px]"
      />
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="container mx-auto flex flex-col gap-8 lg:gap-24">
      <Hero />
      <PopularProperties />
      <Partners />
      <VideoThumbnail />
    </div>
  );
};

export default HomePage;
