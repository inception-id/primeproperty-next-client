import { getBalanceSheet } from "../../_server/getBalanceSheet";
import { Table } from "./table";

type BalanceSheetProps = {
  code: string;
  listedShares: number;
};

export const BalanceSheet = async ({
  code,
  listedShares,
}: BalanceSheetProps) => {
  const balanceSheet = await getBalanceSheet(code);
  return <Table listedShares={listedShares} data={balanceSheet.data.data} />;
};
