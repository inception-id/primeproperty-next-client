"use server";

import { mailTransporter } from "@/lib/mail/mail-transporter";
import { env } from "@/lib/env";
import { fetchCookieToken } from "@/lib/fetchCookieToken";
import { decode, JwtPayload } from "jsonwebtoken";
import { createShareStorageEmailTemplate } from "@/lib/mail/share-storage-email-template";

export const sendShareStorageEmail = async (
  storageTitle: string,
  redirectPath: string,
  sendTo: string,
) => {
  try {
    const token = (await fetchCookieToken()) as string;
    const decoded = decode(token) as JwtPayload;
    const redirectLink = `${env.NEXT_PUBLIC_HOST_URL}${redirectPath}`;
    return await mailTransporter.sendMail({
      from: env.SMTP_FROM, // sender address
      to: sendTo, // list of receivers
      subject: `You receive something from ${decoded.email}`, // Subject line
      html: createShareStorageEmailTemplate(
        decoded.email,
        storageTitle,
        redirectLink,
      ), // html body
    });
  } catch (e) {
    throw e;
  }
};
