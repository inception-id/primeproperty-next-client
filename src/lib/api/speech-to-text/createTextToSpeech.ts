import { TApiResponse } from "@/lib/api/ApiResponse";
import { fetchApi } from "@/lib/api/fetchApi";

export type TSpeechToText = {
  id: number;
  user_id: string;
  created_at: string;
  updated_at: string;
  audio_url: string | null;
  transcription_text: string;
};

export const createSpeechToText = async (
  transcription_text: string,
): Promise<TApiResponse<TSpeechToText>> => {
  try {
    return await fetchApi("/transcription/create", {
      method: "POST",
      body: JSON.stringify({ transcription_text }),
    });
  } catch (e) {
    throw e;
  }
};
