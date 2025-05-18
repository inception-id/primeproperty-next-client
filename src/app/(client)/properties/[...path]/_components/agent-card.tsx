import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { env } from "@/lib/env";
import Image from "next/image";
import { LuCircleUser } from "react-icons/lu";
import { PropertyWithAgent } from "@/lib/api/properties/find-properties";
import { ContactAgentDialog } from "../../_components/contact-agent-dialog";
import { cn } from "@/lib/utils";

type AgentCardProps = {
  property: PropertyWithAgent;
};

export const AgentCard = ({ property }: AgentCardProps) => {
  return (
    <Card
      className={cn(
        "h-fit lg:max-w-sm rounded-none lg:rounded-md flex flex-col gap-4",
        "fixed left-0 bottom-0 w-full p-4 lg:static",
      )}
    >
      <CardHeader className="p-0 hidden md:block">
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
      <CardContent className="cursor-auto p-0">
        <div className="grid grid-cols-2 gap-4">
          <ContactAgentDialog isWhatsapp={false} propertyWithAgent={property} />
          <ContactAgentDialog isWhatsapp={true} propertyWithAgent={property} />
        </div>
      </CardContent>
    </Card>
  );
};
