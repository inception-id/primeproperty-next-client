import { Button } from "@/components/ui/button";
import { LuSave } from "react-icons/lu";
import { useTranslateStore } from "@/app/(languageai)/languageai/translate/_lib/useTranslateStore";
import { useShallow } from "zustand/react/shallow";
import { createTranslation } from "@/lib/api/translation/createTranslation";
import { toast } from "react-toastify";
import {updateTranslation} from "@/lib/api/translation/updateTranslation";

const SaveTranslationButton = () => {
  const {
    aiSystemPrompt,
    contentLanguage,
    targetLanguage,
    content,
    completion,
      updateStore,
      updatedCompletion,
      translationId
  } = useTranslateStore(
    useShallow((state) => ({
      aiSystemPrompt: state.aiSystemPrompt,
      contentLanguage: state.contentLanguage,
      targetLanguage: state.targetLanguage,
      content: state.content,
      completion: state.completion,
      updatedCompletion: state.updatedCompletion,
      updateStore: state.updateStore,
      translationId: state.translationId
    })),
  );

  const onSaveClick = async () => {
    try {
      if (translationId) {
        const updatedTranslation = await  updateTranslation(translationId, updatedCompletion);
        if (updatedTranslation.data.id) {
          toast.success("Translation updated");
          return;
        } else {
          toast.error(translation.message);
          return;
        }
      }

      const createTranslationPayload = {
        ai_system_prompt: aiSystemPrompt,
        content_language: contentLanguage,
        target_language: targetLanguage,
        content,
        completion,
        updated_completion: updatedCompletion,
      };
      const translation = await createTranslation(createTranslationPayload);
      if (translation.data.id) {
        updateStore("translationId", translation.data.id);
        toast.success("Saved successfully.");
        return;
      } else {
        toast.error(translation.message);
        return;
      }

    } catch (e) {
      console.error(e);
      toast.error("Fail to save, please try again");
    }
  };

  return (
    <Button
      type="button"
      variant="secondary"
      onClick={onSaveClick}
      disabled={!completion}
    >
      <LuSave />
      <span className="hidden lg:block">Save</span>
    </Button>
  );
};

export default SaveTranslationButton;
