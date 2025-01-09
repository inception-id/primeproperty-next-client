import {TApiResponse} from "@/lib/api/ApiResponse";
import {fetchApi} from "@/lib/api/fetchApi";

export type TTranslationStorage = {
    id: number;
    user_id: string;
    translation_id: string;
    created_at: string;
    updated_at: string;
    content_language: string;
    target_language: string;
    content: string;
    updated_completion: string;
};

export const createTranslationStorage = async (translation_id: string, updated_completion: string): Promise<TApiResponse<TTranslationStorage>> => {
    try {
        return await fetchApi("/translation/create-storage", {
            method: "POST",
            body: JSON.stringify({translation_id, updated_completion}),
        });
    } catch (e) {
        throw e;
    }
};
