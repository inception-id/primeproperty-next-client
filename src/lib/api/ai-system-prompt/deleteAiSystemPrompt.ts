'use server'

import {fetchApi} from "@/lib/api/fetchApi";
import {TApiResponse} from "@/lib/api/ApiResponse";
import {TAiSystemPrompt} from "@/lib/api/ai-system-prompt/createAiSystemPrompt";

export const deleteAiSystemPrompt = async (id: number): Promise<TApiResponse<TAiSystemPrompt>> => {
   try {
     return await fetchApi(`/ai-system-prompts/delete?id=${id}`, { method: 'DELETE' })
   } catch (e) {
      throw e
   }
}