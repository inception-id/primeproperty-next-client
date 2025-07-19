import {
  FindPropertyQuery,
  PropertyWithAgent,
} from "@/lib/api/properties/find-properties";
import {
  generateDescription,
  generateTitle,
  pathParamsToSearchParams,
} from "./create-properties-metadata";
import { env } from "@/lib/env";

export const createPropertySchema = (
  properties: PropertyWithAgent[],
  searchParams: FindPropertyQuery,
  paramsPath?: string[],
) => {
  if (paramsPath) {
    searchParams = pathParamsToSearchParams(paramsPath);
  }
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "RealEstateListing",
        name: generateTitle(searchParams),
        description: generateDescription(searchParams),
        primaryImageOfPage: `${env.NEXT_PUBLIC_S3_ENDPOINT}${properties[0][0].images[0].path}`,
        url: `${env.NEXT_PUBLIC_HOST_URL}/properties`,
      },
      ...properties.map((property) => {
        return {
          "@type": "SingleFamilyResidence",
          address: {
            "@type": "PostalAddress",
            addressCountry: "ID",
            addressLocality:
              `${property[0].street}, ${property[0].regency}`.replaceAll(
                "-",
                " ",
              ),
            addressRegion: property[0].province.replaceAll("-", " "),
          },
          name: property[0].title,
          description: property[0].description.replaceAll("\n", " "),
          floorSize: {
            "@type": "QuantitativeValue",
            unitCode: "MTK",
            value: property[0].measurements.building_area,
          },
          image: [
            `${env.NEXT_PUBLIC_S3_ENDPOINT}${property[0].images[0].path}`,
          ],
          numberOfBathroomsTotal: property[0].specifications.bathrooms,
          numberOfBedrooms: property[0].specifications.bedrooms,
          url: `${env.NEXT_PUBLIC_HOST_URL}/properties/${property[0].id}`,
        };
      }),
    ],
  };
  return jsonLd;
};
