"use server";
import { fetchApi } from "@/lib/api/fetchApi";
import { TApiResponse } from "@/lib/api/ApiResponse";
import {TTextToSpeechStorage} from "@/lib/api/text-to-speech/create-tts-storage";

export const deleteTextToSpeechStorage= async (ttsStorageId: number): Promise<TApiResponse<TTextToSpeechStorage>> => {
  try {
    return await fetchApi(`/tts/delete-storage/${ttsStorageId}`, {method: "DELETE"});
  } catch (e: any) {
    throw e
  }
};
