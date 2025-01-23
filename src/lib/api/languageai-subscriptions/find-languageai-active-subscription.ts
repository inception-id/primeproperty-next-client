"use server";

import {fetchApi} from "@/lib/api/fetchApi";
import {TApiResponse} from "@/lib/api/ApiResponse";

export type TLanguageaiSubscription = {
    id: string;
    user_id: string;
    languageai_subscription_plan_id: number;
    languageai_subscription_payment_id: number;
    created_at: string;
    updated_at: string;
    expired_at: string;
    history_limit: string;
    storage_limit: string;
    translation_limit: string;
    checkbot_limit: string;
    text_to_speech_limit: string;
    speech_to_text_limit: string;
}

export const findLanguageaiActiveSubscription = async (): Promise<
    TApiResponse<TLanguageaiSubscription | null>
> => {
    try {
        return await fetchApi(`/languageai/subscriptions/active`);
    } catch (e: any) {
        return {
            status: 500,
            data: null,
            message: e.message,
        }
    }
};
