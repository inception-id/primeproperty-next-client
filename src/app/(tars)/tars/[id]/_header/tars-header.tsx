import TarsHeaderDialog from "./tars-header-dialog";
import TarsHeaderModelSelect from "./tars-header-model-select";
import TarsHeaderRefresh from "./tars-header-refresh";

const TarsHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <TarsHeaderDialog />
      <TarsHeaderModelSelect />
      <TarsHeaderRefresh />
    </div>
  );
};

export default TarsHeader;
