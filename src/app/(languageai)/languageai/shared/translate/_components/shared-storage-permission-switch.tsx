import { useState } from "react";
import { LanguageeAiStoragePermission } from "@/lib/enums/languageeai-storage-permission";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import { updateSharedTranslationStoragePermission } from "@/lib/api/translation/update-shared-translation-storage-permission";

type TranslateSharedStoragePermissionSwitchProps = {
  sharedStorageId: number;
  defaultPermission: LanguageeAiStoragePermission;
};

const TranslateSharedStoragePermissionSwitch = ({
  sharedStorageId,
  defaultPermission,
}: TranslateSharedStoragePermissionSwitchProps) => {
  const [permission, setPermission] =
    useState<LanguageeAiStoragePermission>(defaultPermission);

  const onUpdate = async (newPermission: LanguageeAiStoragePermission) => {
    try {
      const updatedPermission = await updateSharedTranslationStoragePermission(
        sharedStorageId,
        newPermission,
      );
      setPermission(updatedPermission.data.permission);
      toast.success("Permission updated");
      return;
    } catch (e: any) {
      console.error(e.message);
      toast.error("Fail to update permission, please try again");
      return;
    }
  };

  return (
    <span className="border flex items-center rounded-lg">
      <Button
        type="button"
        variant={
          permission === LanguageeAiStoragePermission.View ? "default" : "ghost"
        }
        onClick={async () => await onUpdate(LanguageeAiStoragePermission.View)}
      >
        view
      </Button>
      <Button
        type="button"
        variant={
          permission === LanguageeAiStoragePermission.Edit ? "default" : "ghost"
        }
        onClick={async () => await onUpdate(LanguageeAiStoragePermission.Edit)}
      >
        edit
      </Button>
    </span>
  );
};

export default TranslateSharedStoragePermissionSwitch;
