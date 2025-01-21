'use server'

import {env} from "@/lib/env";
import {generateDokuSignature} from "@/lib/doku/generateDokuSignature";
import {fetchCookieToken} from "@/lib/fetchCookieToken";
import {decode, JwtPayload} from "jsonwebtoken";

export const createDokuPaymentLink = async (amount: number) => {
    try {
        const accessToken = await fetchCookieToken() as string;
        const user = decode(accessToken) as JwtPayload;
        const requestId = new Date().getTime().toString();
        const requestBody = {
            order: {
                amount: amount,
                invoice_number: requestId,
                currency: "IDR",
                callback_url: `${env.NEXT_PUBLIC_HOST_URL}/account`,
                language: "EN"
            },
            customer: {
                id: user.id,
                email: user.email,
            },
            payment: {
                payment_due_date: 60 // 60 minutes
            },
        }
        const url = `${env.DOKU_API_URL}/checkout/v1/payment`;
        const requestTimestamp = new Date().toISOString().slice(0, 19) + "Z";
        const signature = await generateDokuSignature(requestId, requestTimestamp, JSON.stringify(requestBody))
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Client-Id": env.DOKU_CLIENT_ID,
                "Request-Id": requestId,
                "Request-Timestamp": requestTimestamp,
                "Signature": signature,
            },
            body: JSON.stringify(requestBody)
        });
        const responseBody = await response.json();
        return {
            requestBody,
            responseBody
        }
    } catch (e) {
        throw e
    }
}