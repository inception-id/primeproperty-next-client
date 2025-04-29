"use client";
import { useProperties } from "@/hooks";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { getTableColumns } from "./table-columns";
import { DataTable } from "@/components/ui/data-table";
import { useAgentTokenData } from "@/hooks/agents/use-agent-token-data";
import { FindPropertyQuery } from "@/lib/api/properties/find-properties";
import { Pagination } from "./pagination";

type PropertiesTableProps = {
  searchParams: FindPropertyQuery;
};

export const PropertiesTable = ({ searchParams }: PropertiesTableProps) => {
  const agent = useAgentTokenData();
  const property = useProperties(searchParams);

  const table = useReactTable({
    data: property.data?.data?.data ?? [],
    columns: getTableColumns(agent?.data?.role),
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <>
      <div className="flex-1 h-full overflow-y-auto">
        <DataTable
          table={table}
          isLoading={agent.isLoading || property.isFetching}
        />
      </div>
      <Pagination
        searchParams={searchParams}
        currentPage={searchParams?.page ? +searchParams.page : 1}
        totalPages={property?.data?.data?.total_pages ?? 1}
      />
    </>
  );
};
