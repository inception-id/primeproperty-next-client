import { S3Client } from "@aws-sdk/client-s3";
import { env } from "@/lib/env";

export const S3_AGENT_BUCKET = "primepro-agents";
export const S3_PROPERTY_BUCKET = "primepro-property";
export const s3client = new S3Client({
  region: "idn",
  endpoint: env.NEXT_PUBLIC_S3_ENDPOINT,
  credentials: {
    accessKeyId: env.S3_ACCESS_KEY,
    secretAccessKey: env.S3_SECRET_KEY,
  },
});
