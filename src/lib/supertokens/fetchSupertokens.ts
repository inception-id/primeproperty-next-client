'use server'
import {env} from "@/lib/env";

export const fetchSupertokens = async (path: string, init?: RequestInit) => {
    try {
        const url = env.SUPERTOKENS_CONNECTION_URI + path;
        const response = await fetch(url, {
            headers: {
                "Authorization": env.SUPERTOKENS_API_KEY,
                ...init?.headers
            },
            ...init
        });
        return await response.json();
    } catch (e) {
        throw e;
    }
}