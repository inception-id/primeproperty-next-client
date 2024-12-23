import { LuPen } from "react-icons/lu";
import { useShallow } from "zustand/react/shallow";
import { Button } from "@/components/ui/button";
import {useLanguageStore} from "@/app/(admin)/admin/language/_lib/store";
import { Row } from "@tanstack/table-core";
import {TLanguage} from "@/lib/api/languages/createLanguage";

const UpdateLanguageDialogTrigger = ({
  row,
}: {
  row: Row<TLanguage>;
}) => {
  const { updateStore } = useLanguageStore(
    useShallow((state) => ({
      updateStore: state.updateStore,
    })),
  );
  return (
    <Button
      size="icon"
      onClick={() => {
        updateStore("updateTarget", row.original);
        updateStore("openUpdateDialog", true);
      }}
    >
      <LuPen />
    </Button>
  );
};

export default UpdateLanguageDialogTrigger;
