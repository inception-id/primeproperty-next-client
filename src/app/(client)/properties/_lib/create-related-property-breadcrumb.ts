import { Property } from "@/lib/api/properties/type";
import { env } from "@/lib/env";

export const createRelatedPropertySchema = (property: Property) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${env.NEXT_PUBLIC_HOST_URL}/properties/${property.id}#related`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: `${property.building_type} di ${property.province}`,
        item: `${env.NEXT_PUBLIC_HOST_URL}/properties/${property.province}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: `${property.building_type} di ${property.regency}`,
        item: `${env.NEXT_PUBLIC_HOST_URL}/properties/${property.province}/${property.regency}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${property.building_type} di ${property.street}`,
        item: `${env.NEXT_PUBLIC_HOST_URL}/properties/${property.province}/${property.regency}/${property.street}`,
      },
    ],
  };
};
