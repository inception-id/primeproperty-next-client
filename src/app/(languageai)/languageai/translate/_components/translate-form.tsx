"use client";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import TranslateLanguageSelection
    from "@/app/(languageai)/languageai/translate/_components/translate-language-selection";
import {useContext} from "react";
import {TranslateContext} from "@/app/(languageai)/languageai/translate/_components/translate-provider";
import {UseCompletionHelpers} from "@ai-sdk/react";
import {LuLoader} from "react-icons/lu";
import {toast} from "react-toastify";
import {createTranslateSystemPrompt} from "@/app/(languageai)/languageai/translate/_lib/createTranslateSystemPrompt";
import {createTranslation} from "@/lib/api/translation/createTranslation";
import {useLoginStore} from "@/app/(auth)/auth/login/_lib/useLoginStore";
import {useShallow} from "zustand/react/shallow";
import {fetchCookieToken} from "@/lib/fetchCookieToken";

const TranslateForm = () => {
    const {complete, isLoading, completion} =
        useContext<UseCompletionHelpers>(TranslateContext);

    const {updateStore} = useLoginStore(
        useShallow((state) => ({
            updateStore: state.updateStore,
        }))
    )

    const handleAction = async (formData: FormData) => {
        const content = formData.get("translate_content") as string;
        const content_language = formData.get("content_language") as string;
        const target_language = formData.get("target_language") as string;

        if (!content) {
            toast.error("Please enter your text");
            return;
        }

        if (!target_language) {
            toast.error("Please enter target language");
            return;
        }

        const ai_system_prompt = createTranslateSystemPrompt(
            content_language,
            target_language,
        );

        try {
            const token = await fetchCookieToken();
            if (!token) {
                updateStore("openLoginDialog", true)
                return;
            }

            await complete(content, {
                body: {
                    system: ai_system_prompt,
                },
            });
        } catch (e) {
            console.error(e);
            toast.error("Something went wrong, please try again");
        } finally {
            // no need to handle if error
            if (completion) {
                const createTranslationPayload = {
                    ai_system_prompt: ai_system_prompt,
                    content_language,
                    target_language,
                    content,
                    completion,
                    updated_completion: completion,
                };

                await createTranslation(createTranslationPayload);
            }
        }
    };
    return (
        <form action={handleAction} className="flex flex-col">
            <Textarea
                autoFocus
                name="translate_content"
                placeholder="Enter text"
                className="focus-visible:ring-0 focus-visible:ring-offset-0 h-96 lg:h-[90vh] lg:flex-1 resize-none"
            />
            <TranslateLanguageSelection/>
            <div className="flex justify-end pr-4">
                <Button type="submit" disabled={isLoading}>
                    {isLoading ? <LuLoader className="animate-spin"/> : "Translate"}
                </Button>
            </div>
        </form>
    );
};

export default TranslateForm;
