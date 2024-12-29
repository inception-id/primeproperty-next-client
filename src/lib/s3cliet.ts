import {S3Client} from "@aws-sdk/client-s3";
import {env} from "@/lib/env";

export const s3client = new S3Client({
    region: "idn",
    endpoint: env.S3_ENDPOINT,
    credentials: {
        accessKeyId: env.S3_ACCESS_KEY,
        secretAccessKey: env.S3_SECRET_KEY,
    },
});
