import { CardDescription, CardTitle } from "@/components/ui/card";
import { PropertyWithAgent } from "@/lib/api/properties/find-properties";
import { Agent } from "@/lib/api/properties/find-property-by-agent";
import { BuildingType } from "@/lib/enums/building-type";
import { env } from "@/lib/env";
import Image from "next/image";
import { LuInstagram } from "react-icons/lu";

export const AgentBio = ({
  agent,
  propertiesWithAgent,
}: {
  agent: Agent;
  propertiesWithAgent: PropertyWithAgent[];
}) => {
  const groupedProperties = Object.groupBy(
    propertiesWithAgent,
    (property) => property[0].building_type,
  );
  return (
    <div className="gap-4 flex flex-col sm:flex-row border p-4 rounded">
      <Image
        alt={agent.fullname}
        src={`${env.NEXT_PUBLIC_S3_ENDPOINT}${agent.profile_picture_url}`}
        width={200}
        height={200}
        className="rounded-full aspect-square object-cover mx-auto sm:rounded sm:mx-0"
      />

      <div className="flex flex-col gap-4">
        <div className="sm:flex flex-col gap-1">
          <CardTitle>
            <h1 className="capitalize ">{agent.fullname}</h1>
          </CardTitle>
          {agent.instagram && (
            <div className="text-accent-foreground flex items-center gap-1">
              <LuInstagram />
              <span>{agent.instagram}</span>
            </div>
          )}
          <CardDescription>
            {agent.description && <h2>{agent.description}</h2>}
          </CardDescription>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="font-bold">Properties Summary</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {Object.keys(groupedProperties).map((key) => (
              <div key={key} className="flex items-center gap-2">
                <h3 className="capitalize text-muted-foreground w-28">
                  {key}:
                </h3>
                <div className="font-bold">
                  {groupedProperties?.[key as BuildingType]?.length}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
