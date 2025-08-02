import { findPropertyByAgent } from "@/lib/api/properties/find-property-by-agent";
import { env } from "@/lib/env";
import { toTitleCase } from "@/lib/to-title-case";
import { Metadata } from "next";

export const createAgentMetadata = async (params: {
  name: string;
}): Promise<Metadata> => {
  const agentWithProperties = await findPropertyByAgent(params.name);
  return {
    title: toTitleCase(agentWithProperties.data?.agent.fullname ?? ""),
    description: agentWithProperties.data?.agent.description,
    twitter: {
      title: agentWithProperties.data?.agent.fullname,
      site: "@primeproindonesia",
      creator: "@primeproindonesia",
      card: "summary_large_image",
      images: [
        `${env.NEXT_PUBLIC_HOST_URL}${agentWithProperties.data?.agent.profile_picture_url}`,
      ],
    },
    openGraph: {
      title: agentWithProperties.data?.agent.fullname,
      description: agentWithProperties.data?.agent.description || "",
      siteName: "Primepro Indonesia",
      locale: "id_ID",
    },
    appleWebApp: true,
    applicationName: "Primepro Indonesia",
    alternates: {
      canonical: `${env.NEXT_PUBLIC_HOST_URL}/agents/${agentWithProperties.data?.agent.fullname.replaceAll(" ", "-")}`,
    },
    robots: "index, follow",
  };
};
