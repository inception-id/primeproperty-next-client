"use client";
import { PropertyWithAgent } from "@/lib/api/properties/find-properties";
import { Agent } from "@/lib/api/properties/find-property-by-agent";
import { BuildingType } from "@/lib/enums/building-type";
import { env } from "@/lib/env";
import Image from "next/image";
import { useMemo } from "react";
import { LuInstagram, LuMail } from "react-icons/lu";

export const AgentBio = ({
  agent,
  propertiesWithAgent,
}: {
  agent: Agent;
  propertiesWithAgent: PropertyWithAgent[];
}) => {
  const groupedProperties = useMemo(() => {
    if (propertiesWithAgent) {
      return Object.groupBy(
        propertiesWithAgent,
        (property) => property[0].building_type,
      );
    }
    return {};
  }, [propertiesWithAgent]);
  return (
    <div className="gap-4 flex flex-col sm:flex-row border p-4 rounded w-fit">
      <Image
        alt={agent.fullname}
        src={`${env.NEXT_PUBLIC_S3_ENDPOINT}${agent.profile_picture_url}`}
        width={200}
        height={200}
        className="rounded-full aspect-square object-cover mx-auto sm:mx-0"
      />

      <div className="flex flex-col gap-4">
        <div className="sm:flex flex-col gap-1">
          <h1 className="capitalize font-bold text-xl">{agent.fullname}</h1>
          {agent.description && (
            <h2 className="text-muted-foreground">{agent.description}</h2>
          )}
          <div className="flex items-center gap-1">
            <LuMail className="text-primary" />
            <span>{agent.email}</span>
          </div>
          {agent.instagram && (
            <div className="flex items-center gap-1">
              <LuInstagram className="text-pink-500" />
              <span>{agent.instagram}</span>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="font-bold">Properties Summary</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {Object.keys(groupedProperties).map((key: any) => (
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
