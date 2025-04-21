import { FindAgentsQuery } from "@/lib/api/agents/find-agents";
import { AgentsTable, Filter } from "./_components";

export const revalidate = 0;
type AgensPageProps = {
  searchParams: FindAgentsQuery;
};

const AgentsPage = ({ searchParams }: AgensPageProps) => {
  return (
    <div className="w-screen md:w-full h-full flex flex-col gap-4 p-4">
      <Filter />
      <AgentsTable searchParams={searchParams} />
    </div>
  );
};

export default AgentsPage;
