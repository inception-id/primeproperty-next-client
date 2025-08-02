import { findPropertyByAgent } from "@/lib/api/properties/find-property-by-agent";
import { AgentBio } from "./_components";
import { redirect } from "next/navigation";
import { PropertyList } from "../../properties/_components/list";
import { Faq } from "../../properties/_components/faq";
import { createAgentMetadata } from "./_lib/create-agent-metadata";
import { Metadata } from "next";

export const revalidate = 0;

type AgentPageProps = {
  params: { name: string };
};

export const generateMetadata = async ({
  params,
}: AgentPageProps): Promise<Metadata> => createAgentMetadata(params);
export default async function AgentPage({ params }: AgentPageProps) {
  const agentWithProperties = await findPropertyByAgent(params.name);
  if (!agentWithProperties.data?.agent) {
    redirect("/agents");
  }
  return (
    <div className="flex flex-col gap-8 container mx-auto p-4">
      <AgentBio
        agent={agentWithProperties.data?.agent}
        propertiesWithAgent={agentWithProperties.data.properties}
      />
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-bold">Property List</h2>
        <PropertyList
          searchParams={{}}
          propertiesWithAgent={agentWithProperties.data.properties}
        />
      </div>

      <Faq />
    </div>
  );
}
