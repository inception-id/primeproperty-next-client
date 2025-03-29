import { screenIdx } from "../../../_server/screenIdx";
import { ScreenTable } from "./table";

export const FirstScreen = async () => {
  const stocks = await screenIdx();
  return <ScreenTable data={stocks.results} />;
};
