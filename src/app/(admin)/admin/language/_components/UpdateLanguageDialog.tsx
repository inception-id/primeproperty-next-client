"use client";
import { useShallow } from "zustand/react/shallow";
import { LuX } from "react-icons/lu";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import {useLanguageStore} from "@/app/(admin)/admin/language/_lib/store";
import UpdateLanguageForm from "@/app/(admin)/admin/language/_components/UpdateLanguageForm";

const UpdateLanguageDialog = () => {
  const { openUpdateDialog, updateStore } = useLanguageStore(
    useShallow((state) => ({
      openUpdateDialog: state.openUpdateDialog,
      updateStore: state.updateStore,
    })),
  );
  return (
    <Dialog open={openUpdateDialog}>
      <DialogContent
        onOverlayClick={() => updateStore("openUpdateDialog", false)}
      >
        <div className="flex items-center justify-between mb-4">
          <DialogTitle className="font-semibold">
            Update language
          </DialogTitle>
          <DialogClose onClick={() => updateStore("openUpdateDialog", false)}>
            <LuX />
          </DialogClose>
        </div>
          <UpdateLanguageForm />
      </DialogContent>
    </Dialog>
  );
};

export default UpdateLanguageDialog;
