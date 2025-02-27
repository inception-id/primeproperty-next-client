import { Button } from "@/components/ui/button";
import { TbBallpen } from "react-icons/tb";
import TarsHeaderDialog from "./tars-header-dialog";
import TarsHeaderModelSelect from "./tars-header-model-select";

const TarsHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <TarsHeaderDialog />
      <TarsHeaderModelSelect />
      <Button size="icon" variant="ghost">
        <TbBallpen className="text-3xl" />
      </Button>
    </div>
  );
};

export default TarsHeader;
