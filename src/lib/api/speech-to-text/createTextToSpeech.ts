import { TApiResponse } from "@/lib/api/ApiResponse";
import { fetchApi } from "@/lib/api/fetchApi";

export type TSpeechToText = {
  id: number;
  user_id: string;
  created_at: string;
  updated_at: string;
  audio_url: string;
  transcription_text: string;
  language: string | null;
};

export const createSpeechToText = async (
  audio_url: string,
  transcription_text: string,
  language: string,
): Promise<TApiResponse<TSpeechToText>> => {
  try {
    return await fetchApi("/transcription/create", {
      method: "POST",
      body: JSON.stringify({ audio_url, transcription_text, language }),
    });
  } catch (e) {
    throw e;
  }
};
