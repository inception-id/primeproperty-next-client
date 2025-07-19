import { findPropertyById } from "@/lib/api/properties/find-property-by-id";
import { PropertyOverview } from "./property-overview";
import { PropertyImages } from "./property-images";
import { PropertyNotFound } from "../../_components/not-found";
import { ShareLinks } from "./share-links";
import { ContactAgentDialog } from "../../_components/contact-agent-dialog";
import { AgentAvatar } from "./agent-avatar";
import { PropertyWithAgent } from "@/lib/api/properties/find-properties";
import { RelatedSearch } from "./related-search";
import { createRelatedPropertySchema } from "../../_lib/create-related-property-breadcrumb";
import { createDynamicPropertySchema } from "../../_lib/create-dynamic-property-schema";
import { Faq } from "../../_components/faq";
import { createPropertiesFaqSchema } from "../../_lib/create-propertis-faq-schema";

type DynamicPropertyProps = {
  propertyId: number;
};

type AgentCardProps = {
  property: PropertyWithAgent;
};

const MobileAgentCard = ({ property }: AgentCardProps) => {
  return (
    <>
      <AgentAvatar property={property} className="lg:hidden" />
      <div className="grid grid-cols-2 gap-4 sticky bottom-0 w-full p-4 border-t bg-background lg:hidden">
        <ContactAgentDialog isWhatsapp={false} propertyWithAgent={property} />
        <ContactAgentDialog isWhatsapp={true} propertyWithAgent={property} />
      </div>
      <RelatedSearch property={property[0]} className="lg:hidden" />
      <ShareLinks
        title={property[0].title}
        property={property}
        className="lg:hidden"
      />
    </>
  );
};

const DesktopAgentCard = ({ property }: AgentCardProps) => {
  return (
    <div className="hidden lg:flex flex-col gap-4 sticky top-4 h-fit">
      <div className="border rounded p-4 flex flex-col gap-4">
        <AgentAvatar property={property} />
        <div className="grid grid-cols-2 gap-4 w-full border-t pt-4">
          <ContactAgentDialog isWhatsapp={false} propertyWithAgent={property} />
          <ContactAgentDialog isWhatsapp={true} propertyWithAgent={property} />
        </div>
      </div>
      <RelatedSearch property={property[0]} />
      <ShareLinks title={property[0].title} property={property} />
    </div>
  );
};

export const DynamicProperty = async ({ propertyId }: DynamicPropertyProps) => {
  const property = await findPropertyById(propertyId);

  if (!property.data) {
    return <PropertyNotFound searchParams={{}} />;
  }
  const relatedJsonLd = createRelatedPropertySchema(property.data[0]);
  const dynamicJsonLd = createDynamicPropertySchema(property.data[0]);
  const faqLd = createPropertiesFaqSchema();
  return (
    <div className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(relatedJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(dynamicJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqLd).replace(/</g, "\\u003c"),
        }}
      />
      <PropertyImages propertyWithAgent={property.data} />
      <div className="flex flex-col gap-4 lg:gap-8 lg:flex-row p-4 xl:px-0">
        <PropertyOverview property={property.data} />
        <MobileAgentCard property={property.data} />
        <DesktopAgentCard property={property.data} />
      </div>
      <Faq />
    </div>
  );
};
