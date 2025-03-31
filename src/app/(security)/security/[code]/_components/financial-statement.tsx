import { TypographyLead } from "@/components/ui/typography/lead";
import { getMarketInfo, TMarketInfo } from "../_server";
import { TypographyMuted } from "@/components/ui/typography/muted";
import { getBalanceSheet, TBalanceSheet } from "../_server/getBalanceSheet";
import {
  getIncomeStatement,
  TIncomeStatement,
} from "../_server/getIncomeStatement";
import { Table } from "./table";

type FinancialStatementProps = {
  code: string;
};

export type TFinancialStatement = TMarketInfo &
  TBalanceSheet &
  TIncomeStatement;

export const FinancialStatement = async ({ code }: FinancialStatementProps) => {
  const marketInfo = await getMarketInfo(code);
  const balanceSheet = await getBalanceSheet(code);
  const incomeStatement = await getIncomeStatement(code);

  if (
    marketInfo.data.length > 0 &&
    balanceSheet.data.data.length > 0 &&
    incomeStatement.data.data.length > 0
  ) {
    const financialStatements: TFinancialStatement[] = marketInfo.data.map(
      (mktInfo, index: number) => {
        return {
          ...mktInfo,
          ...balanceSheet.data.data[index],
          ...incomeStatement.data.data[index],
        };
      },
    );

    return (
      <>
        <TypographyLead>{code}</TypographyLead>
        <Table
          data={financialStatements}
          listedShares={financialStatements[0].listedShares}
        />
      </>
    );
  }

  return <TypographyMuted>Invalid Stock Code</TypographyMuted>;
};
