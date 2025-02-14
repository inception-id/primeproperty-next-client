import { TApiResponse } from "@/lib/api/ApiResponse";
import { fetchApi } from "@/lib/api/fetchApi";
import {ELanguageAiStorageVisibility} from "@/lib/enums/languageai-storage-visibility";

export type TSpeechToTextStorage = {
  id: number;
  user_id: string;
  text_to_speech_id: number;
  created_at: string;
  updated_at: string;
  audio_url: string;
  updated_transcription_text: string;
  language: string | null;
  title: string | null;
  visibility: ELanguageAiStorageVisibility
};


export const createSpeechToTextStorage = async (
  speech_to_text_id: number,
  payload: Pick<TSpeechToTextStorage, 'title' | 'updated_transcription_text'>
): Promise<TApiResponse<TSpeechToTextStorage>> => {
  try {
    return await fetchApi("/transcription/create-storage", {
      method: "POST",
      body: JSON.stringify({ speech_to_text_id, ...payload}),
    });
  } catch (e) {
    throw e;
  }
};
