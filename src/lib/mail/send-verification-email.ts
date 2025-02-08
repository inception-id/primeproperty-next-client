"use server";

import { mailTransporter } from "@/lib/mail/mail-transporter";
import { env } from "@/lib/env";
import { createVerificationEmailTemplate } from "@/lib/mail/create-verification-email-template";
import { createEmailVerificationToken } from "@/lib/supertokens/create-email-verification-token";

export const sendVerificationEmail = async (
  supertokensUserId: string,
  email: string,
) => {
  try {
    const verificationToken = await createEmailVerificationToken(
      supertokensUserId,
      email,
    );
    return await mailTransporter.sendMail({
      from: env.SMTP_FROM, // sender address
      to: email, // list of receivers
      subject: "Verify your email", // Subject line
      html: createVerificationEmailTemplate(
        `${env.NEXT_PUBLIC_HOST_URL}/auth/login?t=${verificationToken.token}`,
      ), // html body
    });
  } catch (e) {
    throw e;
  }
};
