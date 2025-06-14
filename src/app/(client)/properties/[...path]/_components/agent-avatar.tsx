import Image from "next/image";
import { LuCircleUser } from "react-icons/lu";
import { env } from "@/lib/env";
import { PropertyWithAgent } from "@/lib/api/properties/find-properties";
import { cn } from "@/lib/utils";

type AgentAvatarProps = {
  property: PropertyWithAgent;
  className?: string;
};

export const AgentAvatar = ({ property, className }: AgentAvatarProps) => {
  return (
    <div className={cn("flex gap-2 items-center", className)}>
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
        <span className="text-xs text-muted-foreground">PrimePro Agent</span>
      </div>
    </div>
  );
};
