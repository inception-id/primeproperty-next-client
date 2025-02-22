import { TSharedTranslationStorage } from "@/lib/api/translation/find-translation-storage-shared-users";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { LuPlus } from "react-icons/lu";
import { useLanguageaiStorageSharingStore } from "@/app/(languageai)/_lib/use-languageai-storage-sharing-store";
import { useShallow } from "zustand/react/shallow";
import { QueryObserverBaseResult } from "@tanstack/react-query";
import RemoveTranslateSharedStorageBtn from "@/app/(languageai)/languageai/shared/translate/_components/remove-shared-storage-btn";

type SharedTranslateStorageUsersProps = {
  isFetching: boolean;
  searchedEmail: string;
  sharedTranslationStorage: TSharedTranslationStorage[];
  refetchList: () => Promise<QueryObserverBaseResult>;
};
const SharedTranslateStorageUsers = ({
  isFetching,
  searchedEmail,
  sharedTranslationStorage,
  refetchList,
}: SharedTranslateStorageUsersProps) => {
  const { loadingText } = useLanguageaiStorageSharingStore(
    useShallow((state) => ({
      loadingText: state.loadingText,
    })),
  );

  if (isFetching) {
    return <div className={cn(buttonVariants(), "w-full animate-pulse")} />;
  }

  if (sharedTranslationStorage.length === 0 && searchedEmail) {
    return (
      <Button
        type="submit"
        className="w-full shadow text-pretty"
        variant="secondary"
        disabled={loadingText !== ""}
      >
        <LuPlus />
        Add &quot;{searchedEmail}&quot; as collaborator
      </Button>
    );
  }

  if (sharedTranslationStorage.length === 0) {
    return (
      <div className={cn(buttonVariants({ variant: "ghost" }), "w-full")}>
        No people with access other than you
      </div>
    );
  }

  return (
    <div className="max-h-96 overflow-y-auto flex flex-col gap-1">
      {sharedTranslationStorage.map((sharedStorage) => (
        <div
          className="w-full justify-between flex items-center"
          key={sharedStorage.id}
        >
          <span>
            {sharedStorage.shared_user_email} ({sharedStorage.permission})
          </span>

          <span>
            <RemoveTranslateSharedStorageBtn
              sharedStorageId={sharedStorage.id}
              refetchList={refetchList}
            />
          </span>
        </div>
      ))}
    </div>
  );
};

export default SharedTranslateStorageUsers;
