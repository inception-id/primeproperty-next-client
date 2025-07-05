import { FindPropertyQuery } from "@/lib/api/properties/find-properties";
import { findPropertyById } from "@/lib/api/properties/find-property-by-id";
import { PURCHASE_STATUS, PurchaseStatus } from "@/lib/enums/purchase-status";
import { env } from "@/lib/env";
import { Metadata } from "next";
import { toTitleCase } from "@/lib/to-title-case";

export const generateTitle = (searchParams: FindPropertyQuery) => {
  const propertyType = searchParams.buiding_type
    ? searchParams.buiding_type
    : "Properti";
  const purchaseType = searchParams.purchase_status
    ? PURCHASE_STATUS[
        searchParams.purchase_status as PurchaseStatus
      ].toLowerCase()
    : "dijual";
  let location = "";
  if (searchParams.street) {
    location += " ";
    location += searchParams.street.replaceAll("-", " ");
  }
  if (searchParams.regency) {
    location += " ";
    location += searchParams.regency.replaceAll("-", " ");
  }
  if (!searchParams.regency && searchParams.province) {
    location += " ";
    location += searchParams.province.replaceAll("-", " ");
  }

  const fullLocation = `${propertyType} ${purchaseType} di ${location ? location : "Indonesia"}`;
  const date = new Date();

  return `${toTitleCase(fullLocation)} | Harga Terbaru ${date.toLocaleString("id-ID", { month: "long" })} ${date.getFullYear()} Primepro Indonesia`;
};

export const generateDescription = (searchParams: FindPropertyQuery) => {
  const propertyType = searchParams.buiding_type
    ? searchParams.buiding_type
    : "Properti";
  const purchaseType = searchParams.purchase_status
    ? PURCHASE_STATUS[
        searchParams.purchase_status as PurchaseStatus
      ].toLowerCase()
    : "dijual";
  let location = "";
  if (searchParams.street) {
    location += " jalan ";
    location += searchParams.street.replaceAll("-", " ");
  }
  if (searchParams.regency) {
    location += " ";
    location += searchParams.regency.replaceAll("-", " ");
  }
  if (!searchParams.regency && searchParams.province) {
    location += " ";
    location += searchParams.province.replaceAll("-", " ");
  }

  const fullLocation = `${propertyType} ${purchaseType} Murah di ${location ? location : "Indonesia"}`;
  return toTitleCase(fullLocation);
};

const generateKeyword = (searchParams: FindPropertyQuery) => {
  const propertyType = searchParams.buiding_type
    ? searchParams.buiding_type
    : "Properti";
  const purchaseType = searchParams.purchase_status
    ? PURCHASE_STATUS[
        searchParams.purchase_status as PurchaseStatus
      ].toLowerCase()
    : "dijual";

  let location = "";
  if (searchParams.street) {
    location += searchParams.street.replaceAll("-", " ");
    location += ",";
  }
  if (searchParams.regency) {
    location += searchParams.regency.replaceAll("-", " ");
    location += ",";
  }
  if (searchParams.province) {
    location += searchParams.province.replaceAll("-", " ");
    location += ",";
  }

  return `${propertyType}, ${purchaseType}, ${location ?? "Indonesia"}, Primepro Indonesia`;
};

const generateCanonical = (searchParams: FindPropertyQuery) => {
  if (Object.values(searchParams).length > 0) {
    const searchParamsStr = new URLSearchParams(searchParams);
    return `?${searchParamsStr.toString()}`;
  }

  return "";
};

export const pathParamsToSearchParams = (
  paramsPath: string[],
): FindPropertyQuery => {
  const searchParams: FindPropertyQuery = {
    purchase_status:
      paramsPath[0] === "disewa"
        ? PurchaseStatus.ForRent
        : PurchaseStatus.ForSale,
    buiding_type: paramsPath?.[1],
    province: paramsPath?.[2],
    regency: paramsPath?.[3],
    street: paramsPath?.[4],
  };
  return searchParams;
};

export const generatePropertiesMetadata = async (
  searchParams: FindPropertyQuery,
  paramsPath?: string[],
): Promise<Metadata> => {
  const isList = paramsPath
    ? Number.isNaN(+paramsPath[paramsPath.length - 1])
    : true;
  const propertyId =
    paramsPath && !isList ? +paramsPath[paramsPath.length - 1] : 0;
  if (!isList) {
    const property = await findPropertyById(propertyId);
    if (property.data) {
      return {
        title: property.data[0].title,
        description: property.data[0].description,
        keywords: property.data[0].site_path
          .replaceAll("-", " ")
          .replaceAll("/", ","),
        twitter: {
          title: property.data[0].title,
          site: "@primeproindonesia",
          creator: "@primeproindonesia",
          card: "summary_large_image",
          images: [`${env.NEXT_PUBLIC_HOST_URL}/images/primepro.png`],
        },
        openGraph: {
          title: property.data[0].title,
          description: property.data[0].description,
          siteName: "Primepro Indonesia",
          locale: "id_ID",
        },
        appleWebApp: true,
        applicationName: "Primepro Indonesia",
        alternates: {
          canonical: `${env.NEXT_PUBLIC_HOST_URL}/properties/${propertyId}`,
        },
      };
    }
  }
  if (paramsPath) {
    searchParams = pathParamsToSearchParams(paramsPath);
  }

  return {
    title: generateTitle(searchParams),
    description: generateDescription(searchParams),
    keywords: generateKeyword(searchParams),
    twitter: {
      title: generateTitle(searchParams),
      site: "@primeproindonesia",
      creator: "@primeproindonesia",
      card: "summary_large_image",
      images: [`${env.NEXT_PUBLIC_HOST_URL}/images/primepro.png`],
    },
    openGraph: {
      title: generateTitle(searchParams),
      description: generateDescription(searchParams),
      siteName: "Primepro Indonesia",
      locale: "id_ID",
    },
    appleWebApp: true,
    applicationName: "Primepro Indonesia",
    alternates: {
      canonical:
        paramsPath && paramsPath?.length > 0
          ? `${env.NEXT_PUBLIC_HOST_URL}/properties/${paramsPath.join("/")}`
          : `${env.NEXT_PUBLIC_HOST_URL}/properties${generateCanonical(searchParams)}`,
    },
  };
};
