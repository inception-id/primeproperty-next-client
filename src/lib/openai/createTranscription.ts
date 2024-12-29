'use server'

import {openai} from "@/lib/openai/openai";

export const createTranscription = async (formData: FormData) => {
    const audioFile = formData.get("audio_file") as File;
    const language = formData.get("language") as string;

    try {

            const transcription = await openai.audio.transcriptions.create({
                file: audioFile,
                model: "whisper-1",
                language,
            });
            return transcription.text
    } catch (e) {
       throw e;
    }
}