import { Button } from "@/components/ui/button";
import { LuX } from "react-icons/lu";
import { deleteTranslationSharedStorage } from "@/lib/api/translation/delete-translation-shared-storage";
import { toast } from "react-toastify";
import { QueryObserverBaseResult } from "@tanstack/react-query";

type RemoveTranslateSharedStorageBtnProps = {
  sharedStorageId: number;
  refetchList: () => Promise<QueryObserverBaseResult>;
};
const RemoveTranslateSharedStorageBtn = ({
  sharedStorageId,
  refetchList,
}: RemoveTranslateSharedStorageBtnProps) => {
  const onDeleteClick = async () => {
    try {
      const deletedStorage =
        await deleteTranslationSharedStorage(sharedStorageId);
      toast.success(`Removed ${deletedStorage.data.shared_user_email} access`);
      return await refetchList();
    } catch (e: any) {
      console.error(e.message);
      toast.error("Fail to remove access, please try again");
      return;
    }
  };
  return (
    <Button variant="ghost" size="icon" type="button" onClick={onDeleteClick}>
      <LuX />
    </Button>
  );
};

export default RemoveTranslateSharedStorageBtn;
