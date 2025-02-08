import nodemailer from 'nodemailer';
import {env} from "@/lib/env";

export const mailTransporter= nodemailer.createTransport({
    host: env.SMTP_HOST,
    port: Number(env.SMTP_PORT),
    secure: env.SMTP_PORT === "465", // true for port 465, false for other ports
    auth: {
        user: env.SMTP_USER,
        pass: env.SMTP_PASS,
    },
});