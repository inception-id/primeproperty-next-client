"use server";

import { openai } from "@/lib/openai/openai";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { s3client } from "@/lib/s3cliet";
import { env } from "@/lib/env";

type TResponse = {
  audio_url: string;
  transcription: {
    text: string;
  };
};

export const createTranscription = async (
  formData: FormData,
): Promise<TResponse> => {
  const audioFile = formData.get("audio_file") as File;
  const language = formData.get("language") as string;

  try {
    const bucket = "transcription";
    const buffer = Buffer.from(await audioFile.arrayBuffer());
    const command = new PutObjectCommand({
      Bucket: bucket,
      Key: audioFile.name,
      Body: buffer,
      ACL: "public-read",
    });
    const upload = await s3client.send(command);
    const audio_url = upload.ETag
      ? `${env.S3_ENDPOINT}/${bucket}/${audioFile.name}`
      : "";

    const transcription = await openai.audio.transcriptions.create({
      file: audioFile,
      model: "whisper-1",
      language,
    });

    // can't pass return {audio_url, transcription} directly
    // Warning: Only plain objects can be passed to Client Components from Server Components. Classes or other objects with methods are not supported.
    return { audio_url, transcription: { text: transcription.text } };
  } catch (e) {
    throw e;
  }
};
