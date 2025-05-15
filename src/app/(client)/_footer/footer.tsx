"use client";
import { BUILDING_TYPES } from "@/lib/enums/building-type";
import { PROVINCES } from "@/lib/enums/provinces";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { MdCopyright } from "react-icons/md";

const PropertyTypes = () => {
  return (
    <div className="grid gap-4">
      <div className="font-bold">Jenis Properti</div>
      <div className="grid grid-cols-2 gap-2">
        <Link href={`/properties/dijual`} className="hover:underline">
          Dijual
        </Link>

        <Link href={`/properties/disewa`} className="hover:underline">
          Disewa
        </Link>
        <Link href={`/properties/disewa`} className="hover:underline">
          Dijual &amp; Disewa
        </Link>
      </div>
    </div>
  );
};

const PropertyArea = () => {
  return (
    <div className="grid gap-2">
      <div className="font-bold">Wilayah</div>
      <div className="grid grid-cols-2 gap-2">
        {PROVINCES.map((province, index) => (
          <Link
            key={`${index}_${province.domain_name}_footer`}
            href={`/properties?province=${province.domain_name.toLowerCase()}`}
            className="hover:underline"
          >
            {province.domain_name}
          </Link>
        ))}
      </div>
    </div>
  );
};

const BuildingTypes = () => {
  return (
    <div className="grid gap-2">
      <div className="font-bold">Daftar Properti</div>
      <div className="grid grid-cols-3 gap-2">
        {BUILDING_TYPES.map((buildingType, index) => (
          <Link
            key={`${index}_${buildingType.value}_footer`}
            href={`/properties?buiding_type=${buildingType.value.toLowerCase()}`}
            className="hover:underline"
          >
            {buildingType.value}
          </Link>
        ))}
      </div>
    </div>
  );
};

const Brand = () => {
  return (
    <div className=" grid gap-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 font-semibold">
          <Image
            src="/images/primepro.png"
            alt="Primepro"
            width={50}
            height={50}
          />
          <span>
            <div>Primepro</div>
            <div>Indonesia</div>
          </span>
        </div>
        <div className="md:hidden text-muted-foreground">
          {new Date().getFullYear()}
        </div>
      </div>

      <div className="text-sm text-justify">
        Primepro Indonesia adalah situs teknologi jual beli dan sewa properti
        terdepan di Indonesia, yang hadir sejak tahun 2024 dan telah melayani
        jutaan orang di Indonesia. Primepro Indonesia senantiasa berkomitmen
        untuk membuat pengalaman &quot;Jual Beli dan Sewa Properti Lebih
        Mudah&quot; dengan dukungan dari developer terkemuka serta agen
        profesional.
      </div>
    </div>
  );
};

export const Footer = () => {
  const params = useParams();
  const pathname = usePathname();
  return (
    <footer className="mt-8">
      <div
        className={cn(
          "container mx-auto p-4 border-t grid gap-8",
          pathname.includes("/properties") &&
            params?.path?.length === 1 &&
            !Number.isNaN(+params.path[0]) &&
            "max-w-6xl",
        )}
      >
        <div className="grid gap-8 md:grid-cols-4 lg:gap-12">
          <Brand />
          <div className="grid gap-8">
            <PropertyTypes />
            <PropertyArea />
          </div>
          <BuildingTypes />
        </div>

        <div className="flex flex-col gap-2 text-sm lg:justify-center lg:flex-row text-muted-foreground">
          <span>Developed by Primepro Indonesia</span>
          <span className="flex items-center gap-1">
            <MdCopyright />
            {new Date().getFullYear()} PRIMEPRO INDONESIA. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};
