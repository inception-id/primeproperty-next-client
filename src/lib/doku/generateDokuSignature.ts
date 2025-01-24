"use server";
import crypto from "crypto";
import { env } from "@/lib/env";

export const generateDokuSignature = async (
  requestId: string,
  requestTimestamp: string,
  jsonBody: string,
): Promise<string> => {
  const digest = crypto
    .createHash("sha256")
    .update(Buffer.from(jsonBody, "utf8"))
    .digest("base64");

  const signatureComponents =
    "Client-Id:" +
    env.DOKU_CLIENT_ID +
    "\n" +
    "Request-Id:" +
    requestId +
    "\n" +
    "Request-Timestamp:" +
    requestTimestamp +
    "\n" +
    "Request-Target:/checkout/v1/payment" +
    "\n" +
    "Digest:" +
    digest;
  const signature = crypto
    .createHmac("sha256", env.DOKU_SECRET_KEY)
    .update(signatureComponents)
    .digest("base64");
  return "HMACSHA256=" + signature;
};
