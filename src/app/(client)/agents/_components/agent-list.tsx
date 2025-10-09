import Image from "next/image";
import { findAllPropertyAgents } from "@/lib/api/properties/find-all-property-agents";
import { env } from "@/lib/env";
import { LuCircleUser, LuHouse, LuInstagram, LuMail } from "react-icons/lu";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { MdWhatsapp } from "react-icons/md";

const createWhatsappLink = (phone: string) => {
  const whatsappUrl = new URL("https://api.whatsapp.com/send");
  whatsappUrl.searchParams.append("phone", `62${phone}`);
  const text = `Hai, saya ingin tanya jawab terkait properti di Website PrimePro Indonesia \nMohon informasinya terkait hal tersebut.`;
  whatsappUrl.searchParams.append("text", text);
  return whatsappUrl.toString();
};

export const AgentList = async () => {
  const agents = await findAllPropertyAgents();
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {agents.data &&
        agents?.data?.map((agent) => (
          <div
            key={agent.id}
            className="flex items-center gap-2 border rounded p-2 border-primary shadow"
          >
            <div className="w-16 h-16">
              {agent.profile_picture_url ? (
                <Image
                  src={env.NEXT_PUBLIC_S3_ENDPOINT + agent.profile_picture_url}
                  alt={agent.fullname}
                  width={100}
                  height={100}
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <LuCircleUser className="w-full h-full text-muted-foreground/50" />
              )}
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <div className="flex flex-col">
                <h3 className="font-bold capitalize">{agent.fullname}</h3>
                <div className="flex items-center gap-1 text-sm">
                  <LuMail />
                  {agent.email}
                </div>
                {agent.instagram && (
                  <div className="flex items-center gap-1 text-sm">
                    <LuInstagram className="text-pink-500" />
                    {agent.instagram}
                  </div>
                )}
                <p className="text-xs">{agent.description}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Link
                  className={cn(
                    buttonVariants({ size: "sm" }),
                    "bg-green-500 text-background hover:bg-green-400",
                  )}
                  href={createWhatsappLink(agent.phone_number)}
                  title={`Chat with ${agent.fullname}`}
                >
                  <MdWhatsapp />
                  CHAT
                </Link>
                <Link
                  title={`View ${agent.fullname}'s properties`}
                  className={cn(
                    buttonVariants({ size: "sm", variant: "outline" }),
                  )}
                  href={`/agents/${agent.fullname.replaceAll(" ", "-")}`}
                >
                  <LuHouse />
                  PROPERTI
                </Link>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
