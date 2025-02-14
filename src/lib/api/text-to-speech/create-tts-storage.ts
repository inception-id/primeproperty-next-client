import { TApiResponse } from "@/lib/api/ApiResponse";
import { fetchApi } from "@/lib/api/fetchApi";
import { ELanguageAiStorageVisibility } from "@/lib/enums/languageai-storage-visibility";

export type TTextToSpeechStorage = {
  id: number;
  user_id: string;
  text_to_speech_id: number;
  created_at: string;
  updated_at: string;
  input_content: string;
  audio_url: string;
  voice: string;
  title: string | null;
  visibility: ELanguageAiStorageVisibility;
};

export const createTextToSpeechStorage = async (
  tts_id: number,
  title: string,
): Promise<TApiResponse<TTextToSpeechStorage>> => {
  try {
    return await fetchApi("/tts/create-storage", {
      method: "POST",
      body: JSON.stringify({ tts_id, title }),
    });
  } catch (e) {
    throw e;
  }
};
