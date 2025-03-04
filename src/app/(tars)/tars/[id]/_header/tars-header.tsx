import Link from "next/link";
import TarsModelSelect from "./tars-model-select";
import TarsThemeButton from "./tars-theme-button";

// type TarsHeaderProps = {
//   defaultModelId: number | null;
// };

const TarsHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <Link href="/tars" className="px-2 font-semibold">
        TARS
      </Link>
      <TarsModelSelect className="w-fit max-w-48 border-none ring-offset-transparent focus:ring-transparent gap-2" />
      <TarsThemeButton />
    </div>
  );
};

export default TarsHeader;
