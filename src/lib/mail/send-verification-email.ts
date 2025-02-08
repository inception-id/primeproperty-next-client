"use server";

import { mailTransporter } from "@/lib/mail/mail-transporter";
import { env } from "@/lib/env";
import { createVerificationEmailTemplate } from "@/lib/mail/create-verification-email-template";

export const sendVerificationEmail = async (email: string) => {
  const info = await mailTransporter.sendMail({
    from: env.SMTP_FROM, // sender address
    to: email, // list of receivers
    subject: "Verify your email", // Subject line
    html: createVerificationEmailTemplate(`${env.NEXT_PUBLIC_HOST_URL}`), // html body
  });
  console.log(info);
  return info;
};
