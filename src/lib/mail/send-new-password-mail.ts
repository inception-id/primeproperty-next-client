"use server";

import { mailTransporter } from "@/lib/mail/mail-transporter";
import { env } from "@/lib/env";
import { createNewPasswordTemplate } from "./templates/new-password";

export const sendNewPasswordMail = async (
  email: string,
  resetPasswordToken: string,
) => {
  try {
    const resetPasswordLink = `${env.NEXT_PUBLIC_HOST_URL}/auth/reset-password?t=${resetPasswordToken}`;
    return await mailTransporter.sendMail({
      from: env.SMTP_FROM, // sender address
      to: email, // list of receivers
      subject: "Primepro Agent Account Setup", // Subject line
      html: createNewPasswordTemplate(resetPasswordLink), // html body
    });
  } catch (e) {
    throw e;
  }
};
