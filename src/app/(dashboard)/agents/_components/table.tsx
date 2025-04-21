"use client";

import { useAgents } from "@/hooks/agents/use-agents";
import { FindAgentsQuery } from "@/lib/api/agents/find-agents";
import { DataTable } from "@/components/ui/data-table";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { tableColumns } from "./table-columns";

type AgentsTableProps = {
  searchParams: FindAgentsQuery;
};

export const AgentsTable = ({ searchParams }: AgentsTableProps) => {
  const { data, isLoading } = useAgents(searchParams);

  const table = useReactTable({
    data: data?.data ?? [],
    columns: tableColumns,
    getCoreRowModel: getCoreRowModel(),
  });

  return <DataTable isLoading={isLoading} table={table} />;
};
