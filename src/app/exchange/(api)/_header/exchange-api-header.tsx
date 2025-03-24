import { HeaderDesktop } from "./header-desktop";
import { HeaderMobile } from "./header-mobile";

export const ExchangeApiHeader = () => {
  return (
    <div className="w-full bg-background shadow">
      <HeaderMobile />
      <HeaderDesktop />
    </div>
  );
};
