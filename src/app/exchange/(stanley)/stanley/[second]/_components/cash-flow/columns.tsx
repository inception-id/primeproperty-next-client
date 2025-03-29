import { TicmiCashFlow } from "@/app/exchange/(stanley)/_server/getTicmiAnnualCashflow";
import { ColumnDef } from "@tanstack/react-table";

export const columns = (
  outstandingShares: number,
): ColumnDef<TicmiCashFlow>[] => {
  return [
    {
      header: "PERIOD",
      accessorKey: "period",
    },
    {
      header: "DIVIDEND",
      accessorKey: "dividend",
      cell: ({ row }) => {
        return (
          (row.original.arusKasDariAktivitasPendanaanAbstrak
            .pembayaranDividenDariAktivitasPendanaan || 0) / outstandingShares
        )
          .toFixed()
          .toLocaleString();
      },
    },
  ];
};
