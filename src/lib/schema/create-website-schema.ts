import { env } from "../env";

export const createWebsiteSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    description:
      "Your private key to exceptional properties. Jual dan beli properti secara online dengan layanan terbaik di PrimePro Indonesia.",
    InLanguage: "id-ID",
    name: "PrimePro Indonesia",
    url: env.NEXT_PUBLIC_HOST_URL,
  };
};
