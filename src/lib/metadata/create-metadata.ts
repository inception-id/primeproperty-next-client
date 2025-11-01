import { Metadata } from "next";
import { env } from "../env";

type MetadataParams = {
  title: string;
  description: string;
  keywords: string;
  path: string;
};

export const createMetadata = ({
  title,
  description,
  keywords,
  path,
}: MetadataParams): Metadata => {
  return {
    title,
    description,
    keywords,
    twitter: {
      title,
      site: "@primeproindonesia",
      creator: "@primeproindonesia",
      card: "summary_large_image",
      images: [`${env.NEXT_PUBLIC_HOST_URL}/images/primepro.png`],
    },
    openGraph: {
      title,
      description,
      siteName: "Primepro Indonesia",
      locale: "id_ID",
    },
    appleWebApp: true,
    applicationName: "Primepro Indonesia",
    alternates: {
      canonical: `${env.NEXT_PUBLIC_HOST_URL}${path}`,
    },
    robots: "index, follow",
  };
};
