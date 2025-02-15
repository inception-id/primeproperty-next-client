"use server";
import { fetchApi } from "@/lib/api/fetchApi";
import { TApiResponse } from "@/lib/api/ApiResponse";
import { TTextToSpeechStorage } from "@/lib/api/text-to-speech/create-tts-storage";

export const updateTextToSpeechStorage = async (
  ttsStorageId: number,
  title: string,
): Promise<TApiResponse<TTextToSpeechStorage>> => {
  try {
    return await fetchApi(`/tts/storage/${ttsStorageId}`, {
      method: "PUT",
      body: JSON.stringify({ title }),
    });
  } catch (e: any) {
    throw e;
  }
};
