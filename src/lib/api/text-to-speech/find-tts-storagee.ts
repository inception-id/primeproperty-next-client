"use server";
import { fetchApi } from "@/lib/api/fetchApi";
import { TApiResponse } from "@/lib/api/ApiResponse";
import {TTextToSpeechStorage} from "@/lib/api/text-to-speech/create-tts-storage";

export const findTextToSpeechStorage = async (): Promise<TApiResponse<TTextToSpeechStorage[]>> => {
  try {
    return await fetchApi("/tts/find-storage");
  } catch (e: any) {
    return {
      status: 500,
      data: [],
      message: e.message,
    };
  }
};
