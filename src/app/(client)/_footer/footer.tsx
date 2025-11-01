"use client";
import { createOrganizationSchema } from "@/lib/schema";
import Image from "next/image";
import Script from "next/script";
import { MdOutlineLocationOn } from "react-icons/md";
import Link from "next/link";
import {
  LuFacebook,
  LuInstagram,
  LuLinkedin,
  LuYoutube,
  LuMail,
  LuPhone,
  LuCopyright,
} from "react-icons/lu";
import { buttonVariants } from "@/components/ui/button";

const Organization = () => {
  return (
    <div id="organization" className="flex flex-col gap-4">
      <div>
        <div className="flex items-center gap-2">
          <Image
            src="/images/primepro.png"
            alt="PrimePro Indonesia"
            width={25}
            height={25}
            id="logo"
          />
          <h2 className="text-lg font-semibold">PRIMEPRO INDONESIA</h2>
        </div>
        <h3 className="text-muted-foreground text-sm">
          Your private key to exceptional properties
        </h3>
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <LuPhone />
          <p className="text-muted-foreground">+62-821-1616-2995</p>
        </div>
        <div className="flex items-center gap-2">
          <LuMail />
          <p className="text-muted-foreground">primeproagent@gmail.com</p>
        </div>
        <div className="flex items-start gap-2">
          <div className="pt-1">
            <MdOutlineLocationOn />
          </div>
          <div className="text-muted-foreground">
            <p>Kemang Icon Jakarta,</p>
            <p>Jl. Kemang Raya No 1,</p>
            <p>Jakarta Selatan, 12730</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Link
          href="https://www.facebook.com/share/1BHTU7HvZx/"
          className={buttonVariants({ size: "icon", variant: "outline" })}
        >
          <LuFacebook />
        </Link>
        <Link
          href="https://www.instagram.com/primepro_id/"
          className={buttonVariants({ size: "icon", variant: "outline" })}
        >
          <LuInstagram />
        </Link>
        <Link
          href="https://www.linkedin.com/company/primepro-indonesia/"
          className={buttonVariants({ size: "icon", variant: "outline" })}
        >
          <LuLinkedin />
        </Link>
        <Link
          href="https://www.youtube.com/@primeproindonesia"
          className={buttonVariants({ size: "icon", variant: "outline" })}
        >
          <LuYoutube />
        </Link>
      </div>
    </div>
  );
};

const AREA = [
  "jakarta utara",
  "jakarta barat",
  "jakarta pusat",
  "jakarta timur",
  "jakarta selatan",
];

const Houses = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="font-bold text-lg">Rumah</div>
      <div className="flex flex-col gap-2">
        {AREA.map((area) => (
          <Link
            key={`rumah_${area}`}
            title={`Rumah dijual di ${area}`}
            aria-label={`Rumah dijual di ${area}`}
            href={`/properties/dijual/rumah/jakarta/${area.replaceAll(" ", "-")}`}
            className="hover:underline"
          >
            <span className="capitalize">Rumah Dijual</span> di{" "}
            <span className="capitalize">{area}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

const Apartment = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="font-bold text-lg">Apartemen</div>
      <div className="flex flex-col gap-2">
        {AREA.map((area) => (
          <Link
            key={`apartemen_dijual_${area}`}
            title={`Apartemen dijual di ${area}`}
            aria-label={`Apartemen dijual di ${area}`}
            href={`/properties/dijual/apartemen/jakarta/${area.replaceAll(" ", "-")}`}
            className="hover:underline"
          >
            <span className="capitalize">Apartemen Dijual</span> di{" "}
            <span className="capitalize">{area}</span>
          </Link>
        ))}
        {AREA.map((area) => (
          <Link
            key={`apartemen_disewa_${area}`}
            title={`Apartemen disewa di ${area}`}
            aria-label={`Apartemen disewa di ${area}`}
            href={`/properties/disewa/apartemen/jakarta/${area.replaceAll(" ", "-")}`}
            className="hover:underline"
          >
            <span className="capitalize">Apartemen Disewa</span> di{" "}
            <span className="capitalize">{area}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export const BUILDINGS = [
  {
    key: "Rumah",
    value: "/properties?buiding_type=rumah",
  },
  {
    key: "Apartemen",
    value: "/properties?buiding_type=apartemen",
  },
  {
    key: "Tanah",
    value: "/properties?buiding_type=tanah",
  },
  {
    key: "Gedung",
    value: "/properties?buiding_type=gedung",
  },
  {
    key: "Ruko",
    value: "/properties?buiding_type=ruko",
  },
];

const Buildings = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="font-bold text-lg">Properti</div>
      <div className="flex flex-col gap-2">
        {BUILDINGS.map((build) => (
          <Link
            key={`properti_${build.key}`}
            title={`Properti ${build.key}`}
            aria-label={`Properti ${build.key}`}
            href={build.value}
            className="hover:underline"
          >
            {build.key}
          </Link>
        ))}
      </div>
    </div>
  );
};

export const Footer = () => {
  const organizationSchema = createOrganizationSchema();
  return (
    <>
      <Script
        id="website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
        }}
      />
      <footer className="container mx-auto border-t py-16 px-4 lg:px-0 ">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <Buildings />
          <Houses />
          <Apartment />
          <Organization />
        </div>
        <div className="flex items-center lg:justify-center gap-2 text-muted-foreground mt-16">
          <LuCopyright />
          <span className="text-xs ">
            PrimePro Indonesia {new Date().getFullYear()}
          </span>
        </div>
      </footer>
    </>
  );
};
