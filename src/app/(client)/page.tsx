import Link from "next/link";
import { PopularProperties, PropertiesFilter } from "./properties/_components";
import { LuHouse } from "react-icons/lu";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import { Faq } from "./properties/_components/faq";
import { createPropertiesFaqSchema } from "./properties/_lib/create-propertis-faq-schema";

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
        <h1 className="text-2xl lg:text-3xl font-extrabold tracking-tight">
          PRIMEPRO INDONESIA
        </h1>
        <h2 className="border-b text-base lg:text-xl tracking-tight text-muted-foreground pb-2">
          Your Private Key to Exceptional Properties
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
    <div className="p-4 flex flex-col gap-4 mb-16">
      <h3 className="text-xl font-bold text-center lg:text-3xl">
        Your Private Real Estate Partner
      </h3>
      <iframe
        width="100%"
        src="https://www.youtube.com/embed/ivN7BfhMv4g?si=zLm4yBwIrF7So1wM"
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
  const faqLd = createPropertiesFaqSchema();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqLd).replace(/</g, "\\u003c"),
        }}
      />
      <div className="container mx-auto flex flex-col gap-8 lg:gap-24">
        <Hero />
        <PopularProperties />
        <Partners />
        <Faq />
        <VideoThumbnail />
      </div>
    </>
  );
};

export default HomePage;
