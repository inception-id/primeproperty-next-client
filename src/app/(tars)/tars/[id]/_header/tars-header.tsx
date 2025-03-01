import TarsCreateDialog from "../_components/tars-create-dialog";
import TarsHeaderModelSelect from "./tars-header-model-select";
import TarsHeaderSheet from "./tars-header-sheet";

const TarsHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <TarsHeaderSheet />
      <TarsHeaderModelSelect />
      <h1 className="hidden md:block px-2 font-semibold">TARS</h1>
      <span className="md:hidden">
        <TarsCreateDialog />
      </span>
    </div>
  );
};

export default TarsHeader;
