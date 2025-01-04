"use server";
import { fetchApi } from "@/lib/api/fetchApi";
import { TApiResponse } from "@/lib/api/ApiResponse";
import {TTextToSpeech} from "@/lib/api/text-to-speech/createTextToSpeech";

export const findTextToSpeechHistory= async (init?: RequestInit): Promise<
  TApiResponse<TTextToSpeech[]>
> => {
  try {
    return await fetchApi("/tts/history", init);
  } catch (e: any) {
    return {
      status: 500,
      data: [],
      message: e.message,
    };
  }
};
