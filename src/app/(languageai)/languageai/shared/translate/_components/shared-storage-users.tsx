import { TSharedTranslationStorage } from "@/lib/api/translation/find-translation-storage-shared-users";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { LuPlus } from "react-icons/lu";

type SharedTranslateStorageUsersProps = {
  isFetching: boolean;
  searchedEmail: string;
  sharedUsers: TSharedTranslationStorage[];
};
const SharedTranslateStorageUsers = ({
  isFetching,
  searchedEmail,
  sharedUsers,
}: SharedTranslateStorageUsersProps) => {
  if (isFetching) {
    return <div className={cn(buttonVariants(), "w-full animate-pulse")} />;
  }

  if (sharedUsers.length === 0 && searchedEmail) {
    return (
      <Button className="w-full shadow text-pretty" variant="secondary">
        <LuPlus />
        Add &quot;{searchedEmail}&quot; as collaborator
      </Button>
    );
  }

  if (sharedUsers.length === 0) {
    return (
      <div className={cn(buttonVariants({ variant: "ghost" }), "w-full")}>
        No people with access other than you
      </div>
    );
  }

  return (
    <div className="max-h-96 overflow-y-auto">
      {sharedUsers.map((user) => (
        <div
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "w-full justify-between",
          )}
          key={user.id}
        >
          <span>
            {user.shared_user_email} ({user.permission})
          </span>
        </div>
      ))}
    </div>
  );
};

export default SharedTranslateStorageUsers;
