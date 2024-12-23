"use client";
import { useShallow } from "zustand/react/shallow";
import { LuPlus, LuX } from "react-icons/lu";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {useLanguageStore} from "@/app/(admin)/admin/language/_lib/store";
import AddLanguageForm from "@/app/(admin)/admin/language/_components/AddLanguageForm";

const AddLanguageDialog = () => {
  const { openAddDialog, updateStore } = useLanguageStore(
    useShallow((state) => ({
      openAddDialog: state.openAddDialog,
      updateStore: state.updateStore,
    })),
  );
  return (
    <Dialog open={openAddDialog}>
      <DialogTrigger
        className={cn(buttonVariants())}
        onClick={() => updateStore("openAddDialog", true)}
      >
        <LuPlus />
          Language
      </DialogTrigger>
      <DialogContent onOverlayClick={() => updateStore("openAddDialog", false)}>
        <div className="flex items-center justify-between mb-4">
          <DialogTitle className="font-semibold">
            Add new language
          </DialogTitle>
          <DialogClose onClick={() => updateStore("openAddDialog", false)}>
            <LuX />
          </DialogClose>
        </div>
          <AddLanguageForm />
      </DialogContent>
    </Dialog>
  );
};

export default AddLanguageDialog;
