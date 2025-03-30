import { getIncomeStatement } from "../../_server/getIncomeStatement";
import { Table } from "./table";

type IncomeStatementProps = {
  code: string;
  listedShares: number;
};

export const IncomeStatement = async ({
  code,
  listedShares,
}: IncomeStatementProps) => {
  const incomeStatement = await getIncomeStatement(code);
  return <Table listedShares={listedShares} data={incomeStatement.data.data} />;
};
