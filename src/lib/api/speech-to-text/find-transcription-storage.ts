"use server";
import { fetchApi } from "@/lib/api/fetchApi";
import { TApiResponse } from "@/lib/api/ApiResponse";
import { TSpeechToTextStorage } from "@/lib/api/speech-to-text/createTranscriptionStorage";

export const findSpeechToTextStorage = async (): Promise<
  TApiResponse<TSpeechToTextStorage[]>
> => {
  try {
    return await fetchApi("/transcription/find-storage");
  } catch (e: any) {
    return {
      status: 500,
      data: [],
      message: e.message,
    };
  }
};
