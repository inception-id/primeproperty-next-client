import { TApiResponse } from "@/lib/api/ApiResponse";
import { fetchApi } from "@/lib/api/fetchApi";
import { TSpeechToTextStorage } from "@/lib/api/speech-to-text/createTranscriptionStorage";

export const updateTranscriptionStorage = async (
  speech_to_text_id: number,
  payload: Pick<TSpeechToTextStorage, "title" | "updated_transcription_text">,
): Promise<TApiResponse<TSpeechToTextStorage>> => {
  try {
    return await fetchApi(
      `/transcription/update-storage/${speech_to_text_id}`,
      {
        method: "PUT",
        body: JSON.stringify(payload),
      },
    );
  } catch (e) {
    throw e;
  }
};
