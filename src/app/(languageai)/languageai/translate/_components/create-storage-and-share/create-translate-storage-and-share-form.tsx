import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import { createTranslationStorage } from "@/lib/api/translation/createTranslationStorage";
import { z } from "zod";
import { useShallow } from "zustand/react/shallow";
import { fetchCookieToken } from "@/lib/fetchCookieToken";
import { decode, JwtPayload } from "jsonwebtoken";
import { useLanguageaiStorageSharingStore } from "@/app/(languageai)/_lib/use-languageai-storage-sharing-store";
import { LuLoader } from "react-icons/lu";
import { createSharedTranslationStorage } from "@/lib/api/translation/create-shared-translation-storage";
import { sendShareStorageEmail } from "@/lib/mail/send-share-storage-email";
import { ELanguageaSubscriptionLimit } from "@/lib/enums/languageai-subscription-limit";
import { useLanguageaiSubscriptionStore } from "@/app/(languageai)/_lib/use-languageai-subscription-store";

type CreateTranslateStorageAndShareFormProps = {
  translationId: number;
  updatedCompletion: string;
};

const CreateTranslateStorageAndShareForm = ({
  translationId,
  updatedCompletion,
}: CreateTranslateStorageAndShareFormProps) => {
  const { updateSubscriptionStore } = useLanguageaiSubscriptionStore(
    useShallow((state) => ({
      updateSubscriptionStore: state.updateStore,
    })),
  );

  const { loadingText, updateStore } = useLanguageaiStorageSharingStore(
    useShallow((state) => ({
      loadingText: state.loadingText,
      updateStore: state.updateStore,
    })),
  );

  const handleSaveAndShare = async (formData: FormData) => {
    const title = formData.get("title") as string;
    const email = formData.get("email") as string;
    updateStore("loadingText", "Checking your input");
    if (!title) {
      toast.error("Please enter a title");
      return;
    }
    if (!email) {
      toast.error("Please add one collaborator");
      return;
    }
    const parsedEmail = z.string().email().safeParse(email);
    if (!parsedEmail.success) {
      toast.error("Invalid email");
      return;
    }

    try {
      const token = (await fetchCookieToken()) as string;
      const decodedToken = decode(token) as JwtPayload;
      if (email === decodedToken.email) {
        toast.error("You cannot share with yourself");
        return;
      }
      // Implement save and share logic here
      updateStore("loadingText", "Saving your translation");
      const translationStorage = await createTranslationStorage(translationId, {
        title,
        updated_completion: updatedCompletion,
      });
      if (translationStorage.status === 402) {
        updateSubscriptionStore(
          "limitDialog",
          ELanguageaSubscriptionLimit.Storage,
        );
        return;
      }
      updateStore("loadingText", "Creating shared storage...");
      const sharedTranslationStorage = await createSharedTranslationStorage(
        parsedEmail.data,
        translationStorage.data.id,
      );
      if (sharedTranslationStorage.status === 400) {
        toast.error(sharedTranslationStorage.message);
        return;
      }
      updateStore(
        "loadingText",
        `Sending invitation to ${sharedTranslationStorage?.data.shared_user_email}`,
      );
      const sendEmail = await sendShareStorageEmail(
        title,
        `/languageai/shared/translate`,
        sharedTranslationStorage.data.shared_user_email,
      );
      toast.success(`Invitation sent to ${sendEmail.accepted[0]}`);
      return;
    } catch (error) {
      console.error(error);
      toast.error("Failed to save and share translation");
    } finally {
      updateStore("loadingText", "");
    }
  };

  return (
    <form action={handleSaveAndShare}>
      <Label>Translation title</Label>
      <Input
        placeholder="Anything you want"
        type="text"
        name="title"
        className="mb-4"
      />
      <Label>Collaborators</Label>
      <Input
        placeholder="Search or add email"
        type="email"
        name="email"
        className="mb-4"
      />
      <div className="flex justify-end">
        <Button disabled={loadingText !== ""}>
          {loadingText === "" ? (
            "Save and share"
          ) : (
            <div className="flex items-center gap-2">
              <LuLoader className="animate-spin" />
              {loadingText}
            </div>
          )}
        </Button>
      </div>
    </form>
  );
};

export default CreateTranslateStorageAndShareForm;
