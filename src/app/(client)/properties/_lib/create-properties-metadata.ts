import { FindPropertyQuery } from "@/lib/api/properties/find-properties";
import { findPropertyById } from "@/lib/api/properties/find-property-by-id";
import { PURCHASE_STATUS, PurchaseStatus } from "@/lib/enums/purchase-status";
import { env } from "@/lib/env";
import { Metadata } from "next";

const generateTitleOrDesc = (searchParams: FindPropertyQuery) => {
  const propertyType = searchParams.buiding_type
    ? searchParams.buiding_type
    : "Properti";
  const purchaseType = searchParams.purchase_status
    ? PURCHASE_STATUS[
        searchParams.purchase_status as PurchaseStatus
      ].toLowerCase()
    : "dijual";
  const location = `${searchParams.street ?? ""} ${searchParams.regency ?? ""} ${searchParams.province ?? ""} Indonesia`;

  return `${propertyType} ${purchaseType} di ${location} | Primepro Indonesia`;
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
  const location = `${searchParams.street ?? ""}, ${searchParams.regency ?? ""}, ${searchParams.province ?? ""}, Indonesia`;

  return `${propertyType}, ${purchaseType}, ${location}, Primepro Indonesia`;
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
        appleWebApp: true,
        applicationName: "Primepro Indonesia",
        alternates: {
          canonical: `${env.NEXT_PUBLIC_HOST_URL}/properties/${propertyId}`,
        },
      };
    }
  }

  return {
    title: generateTitleOrDesc(searchParams),
    description: generateTitleOrDesc(searchParams),
    keywords: generateKeyword(searchParams),
    appleWebApp: true,
    applicationName: "Primepro Indonesia",
    alternates: {
      canonical:
        paramsPath && paramsPath?.length > 0
          ? `${env.NEXT_PUBLIC_HOST_URL}/properties/${paramsPath.join("/")}`
          : `${env.NEXT_PUBLIC_HOST_URL}/properties`,
    },
  };
};
