"use server";

import { fetchApi } from "@/lib/api/fetchApi";
import { TApiResponse } from "@/lib/api/ApiResponse";

export type TLanguageaiSubscriptionStats = {
    id: string;
    translation_count: number | null;
    translation_storage_count: number | null;
    checkbot_count: number | null;
    checkbot_storage_count: number | null;
    transcription_count: number | null;
    transcription_storage_count: number | null;
    tts_count: number | null;
    tts_storage_count: number | null;
}

export const findLanguageaiSubscriptionStatistic = async (): Promise<
    TApiResponse<TLanguageaiSubscriptionStats[]| []>
> => {
    try {
        return await fetchApi(`/languageai/subscriptions/stats`);
    } catch (e: any) {
        return {
            status: 500,
            data: [],
            message: e.message,
        }
    }
};
