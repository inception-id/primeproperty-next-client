"use server";
import OpenAI from "openai";
import { env } from "@/lib/env";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const s3client = new S3Client({
  region: "idn",
  endpoint: env.S3_ENDPOINT,
  credentials: {
    accessKeyId: env.S3_ACCESS_KEY,
    secretAccessKey: env.S3_SECRET_KEY,
  },
});

const openai = new OpenAI({
  apiKey: env.OPENAI_API_KEY,
});
export type TOpenAiVoice =
  | "alloy"
  | "echo"
  | "fable"
  | "onyx"
  | "nova"
  | "shimmer";
export const createSpeech = async (
  voice: TOpenAiVoice,
  response_format: "mp3" | "wav",
  input: string,
) => {
  try {
    const audio = await openai.audio.speech.create({
      model: "tts-1",
      voice,
      response_format,
      input,
    });

    const bucket = "text-to-speech";
    const fileKey = `${new Date().getTime()}.${response_format}`;
    const buffer = Buffer.from(await audio.arrayBuffer());
    const command = new PutObjectCommand({
      Bucket: bucket,
      Key: fileKey,
      Body: buffer,
      ACL: "public-read",
    });
    const upload = await s3client.send(command);
    if (upload.ETag) {
      return `${env.S3_ENDPOINT}/${bucket}/${fileKey}`;
    }
    return "";
  } catch (e) {
    throw e;
  }
};
