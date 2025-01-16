import { TApiResponse } from "@/lib/api/ApiResponse";
import { fetchApi } from "@/lib/api/fetchApi";
import {TSpeechToTextStorage} from "@/lib/api/speech-to-text/createTranscriptionStorage";


export const deleteTranscriptionStorage = async (
  speech_to_text_id: number,
): Promise<TApiResponse<TSpeechToTextStorage>> => {
  try {
    return await fetchApi(`/transcription/delete-storage/${speech_to_text_id}`, {
      method: "DELETE",
    });
  } catch (e) {
    throw e;
  }
};
