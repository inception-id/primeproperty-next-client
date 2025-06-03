import { findPropertyById } from "@/lib/api/properties/find-property-by-id";
import { PropertyOverview } from "./property-overview";
import { AgentCard } from "./agent-card";
import { PropertyImages } from "./property-images";
import { PropertyNotFound } from "../../_components/not-found";
import { ShareLinks } from "./share-links";
import { LuCircleUser } from "react-icons/lu";
import Image from "next/image";
import { env } from "@/lib/env";
import { ContactAgentDialog } from "../../_components/contact-agent-dialog";

type DynamicPropertyProps = {
  propertyId: number;
};

export const DynamicProperty = async ({ propertyId }: DynamicPropertyProps) => {
  const property = await findPropertyById(propertyId);

  if (!property.data) {
    return <PropertyNotFound searchParams={{}} />;
  }
  return (
    <div className="relative">
      <PropertyImages propertyWithAgent={property.data} />
      <div className="flex flex-col gap-4 lg:gap-8 lg:flex-row p-4 xl:px-0">
        <PropertyOverview property={property.data} />
        <>
          <div className="flex gap-2 items-center lg:hidden">
            <div className="w-10 h-10">
              {property.data[3] ? (
                <Image
                  src={env.NEXT_PUBLIC_S3_ENDPOINT + property.data[3]}
                  alt={property.data[2]}
                  width={125}
                  height={125}
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <LuCircleUser className="w-full h-full text-muted-foreground/50" />
              )}
            </div>
            <div className="flex flex-col ">
              <span className="text-sm">{property.data[1]}</span>
              <span className="text-xs text-muted-foreground">
                PrimePro Agent
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 sticky bottom-0 w-full p-4 border-t bg-background lg:hidden">
            <ContactAgentDialog
              isWhatsapp={false}
              propertyWithAgent={property.data}
            />
            <ContactAgentDialog
              isWhatsapp={true}
              propertyWithAgent={property.data}
            />
          </div>
          <div className="lg:hidden">
            <ShareLinks
              title={property.data[0].title}
              property={property.data}
            />
          </div>
        </>
        <div className="hidden lg:flex flex-col gap-8 lg:sticky lg:top-4 h-fit">
          <AgentCard property={property.data} />
          <ShareLinks title={property.data[0].title} property={property.data} />
        </div>
      </div>
    </div>
  );
};
