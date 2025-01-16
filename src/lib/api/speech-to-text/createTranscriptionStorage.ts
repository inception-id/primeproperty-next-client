import { TApiResponse } from "@/lib/api/ApiResponse";
import { fetchApi } from "@/lib/api/fetchApi";

export type TSpeechToTextStorage = {
  id: number;
  user_id: string;
  text_to_speech_id: number;
  created_at: string;
  updated_at: string;
  audio_url: string;
  updated_transcription_text: string;
  language: string | null;
};

export const createSpeechToTextStorage = async (
  speech_to_text_id: number,
  updated_transcription_text: string,
): Promise<TApiResponse<TSpeechToTextStorage>> => {
  try {
    return await fetchApi("/transcription/create-storage", {
      method: "POST",
      body: JSON.stringify({ speech_to_text_id, updated_transcription_text }),
    });
  } catch (e) {
    throw e;
  }
};
