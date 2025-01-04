import { TApiResponse } from "@/lib/api/ApiResponse";
import { fetchApi } from "@/lib/api/fetchApi";

export type TTextToSpeech = {
  id: number;
  user_id: string;
  created_at: string;
  updated_at: string;
  input_content: string;
  audio_url: string;
  voice: string;
};

export const createTextToSpeech = async (
  input_content: string,
  audio_url: string,
  voice: string,
): Promise<TApiResponse<TTextToSpeech>> => {
  try {
    return await fetchApi("/tts/create", {
      method: "POST",
      body: JSON.stringify({ input_content, audio_url, voice }),
    });
  } catch (e) {
    throw e;
  }
};
