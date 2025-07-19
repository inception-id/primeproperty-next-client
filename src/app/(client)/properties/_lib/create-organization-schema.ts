import { env } from "@/lib/env";

export const createOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    url: env.NEXT_PUBLIC_HOST_URL,
    name: "Primepro Indonesia",
    legalName: "PT. Prima Berkat Propertindo",
    description: "Your Private Key to Exceptional Properties",
    phone: "+62-821-1616-2995",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Kemang Raya No.1, RT.4/RW.1",
      addressLocality: "Jakarta Selatan",
      addressRegion: "DKI Jakarta",
      postalCode: "12730",
      addressCountry: "ID",
    },
    logo: {
      "@type": "ImageObject",
      url: `${env.NEXT_PUBLIC_HOST_URL}/images/primepro-with-full-text.png`,
      width: 1000,
      height: 1000,
    },
  };
};
