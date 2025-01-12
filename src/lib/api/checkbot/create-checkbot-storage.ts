'use server'
import {fetchApi} from "@/lib/api/fetchApi";
import {TApiResponse} from "@/lib/api/ApiResponse";

export type TCheckbotStorage = {
    id: number;
    user_id: string;
    checkbot_id: number
    created_at: string;
    updated_at: string;
    instruction: string;
    content: string;
    updated_completion: string;
};

export const createCheckbotStorage= async (checkbot_id: number, updated_completion: string): Promise<TApiResponse<TCheckbotStorage>> => {

    try {
        return await fetchApi("/checkbot/create-storage", {
            method: "POST",
            body: JSON.stringify({checkbot_id, updated_completion}),
        });
    } catch (e) {
        throw e;
    }
}