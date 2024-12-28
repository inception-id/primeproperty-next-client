import {Button} from "@/components/ui/button";
import {LuSave} from "react-icons/lu";
import {useTranslateStore} from "@/app/(languageai)/languageai/translate/_lib/useTranslateStore";
import {useShallow} from "zustand/react/shallow";
import {createTranslation} from "@/lib/api/translation/createTranslation";
import {toast} from "react-toastify";

const SaveTranslationButton = () => {
    const {aiSystemPrompt, contentLanguage, targetLanguage, content, completion } = useTranslateStore(
        useShallow((state) => ({
            aiSystemPrompt: state.aiSystemPrompt,
            contentLanguage: state.contentLanguage,
            targetLanguage: state.targetLanguage,
            content: state.content,
            completion: state.completion,
            updatedCompletion: state.updatedCompletion
        })),
    );

    const onSaveClick = async () => {
        try {
            const createTranslationPayload = {
                ai_system_prompt: aiSystemPrompt,
                content_language: contentLanguage,
                target_language: targetLanguage,
                content,
                completion,
                updated_completion: completion,
            };
            const translation = await createTranslation(createTranslationPayload);
            if (translation.data.id) {
                toast.success("Saved successfully.");
                return;
            }

            toast.error(translation.message);
            return;
        } catch (e) {
            console.error(e)
            toast.error("Fail to save, please try again");
        }
    }

    return (
        <Button
            type="button"
            variant="secondary"
            onClick={onSaveClick}
            disabled={!completion}
        >
            <LuSave/>
            <span className="hidden lg:block">Save</span>
        </Button>
    )
};

export default SaveTranslationButton;