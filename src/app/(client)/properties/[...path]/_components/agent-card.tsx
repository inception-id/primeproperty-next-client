import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { env } from "@/lib/env";
import Image from "next/image";
import { LuCircleUser } from "react-icons/lu";
import { PropertyWithAgent } from "@/lib/api/properties/find-properties";
import { ContactAgentDialog } from "../../_components/contact-agent-dialog";

type AgentCardProps = {
  property: PropertyWithAgent;
};

export const AgentCard = ({ property }: AgentCardProps) => {
  return (
    <Card className="h-fit shadow-lg sticky bottom-4 md:top-4 md:max-w-sm">
      <p className="text-center pt-4 font-semibold hidden md:block">
        Tanya Jawab
      </p>
      <CardHeader className="p-4 pt-2 hidden md:block">
        <div className="flex gap-2 items-center">
          <div className="w-10 h-10">
            {property[3] ? (
              <Image
                src={env.NEXT_PUBLIC_S3_ENDPOINT + property[3]}
                alt={property[2]}
                width={100}
                height={100}
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <LuCircleUser className="w-full h-full text-muted-foreground/50" />
            )}
          </div>
          <div className="flex flex-col ">
            <span className="text-sm">{property[1]}</span>
            <span className="text-xs text-muted-foreground">
              Primepro Agent
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-4 pb-4 pt-4 md:pt-0 cursor-auto ">
        <div className="grid grid-cols-2 gap-4">
          <ContactAgentDialog isWhatsapp={false} propertyWithAgent={property} />
          <ContactAgentDialog isWhatsapp={true} propertyWithAgent={property} />
        </div>
      </CardContent>
    </Card>
  );
};
