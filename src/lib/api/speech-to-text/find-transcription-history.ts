"use server";
import { fetchApi } from "@/lib/api/fetchApi";
import { TApiResponse } from "@/lib/api/ApiResponse";
import { TSpeechToText } from "@/lib/api/speech-to-text/createTextToSpeech";

export const findSpeechToTextHistory = async (
  init?: RequestInit,
): Promise<TApiResponse<TSpeechToText[]>> => {
  try {
    return await fetchApi("/transcription/history", init);
  } catch (e: any) {
    return {
      status: 500,
      data: [],
      message: e.message,
    };
  }
};
