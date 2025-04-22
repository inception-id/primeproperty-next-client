"use server";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { S3_AGENT_BUCKET, s3client } from "./s3-client";

export const uploadAgentProfilePicture = async (
  agentSupertokensId: string,
  formData: FormData,
): Promise<string | null> => {
  const profilePicture = formData.get("profile_picture") as File;

  try {
    const buffer = Buffer.from(await profilePicture.arrayBuffer());
    const command = new PutObjectCommand({
      Bucket: S3_AGENT_BUCKET,
      Key: agentSupertokensId,
      Body: buffer,
      ACL: "public-read",
    });
    const upload = await s3client.send(command);
    const profilePicturePath = upload.ETag
      ? `/${S3_AGENT_BUCKET}/${agentSupertokensId}`
      : null;

    // can't pass return {audio_url, transcription} directly
    // Warning: Only plain objects can be passed to Client Components from Server Components. Classes or other objects with methods are not supported.
    return profilePicturePath;
  } catch (e) {
    console.error(`Error in S3 ${S3_AGENT_BUCKET} bucket upload:`, e);
    return null;
  }
};
