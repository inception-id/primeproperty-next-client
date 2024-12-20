import {NextResponse} from 'next/server'
import type {NextRequest} from 'next/server'
import {decode, JwtPayload} from "jsonwebtoken";
import {refreshSupertokensSession} from "@/lib/supertokens/refreshSupertokensSession";

export async function middleware(request: NextRequest) {
    const accessToken = request.cookies.get("accessToken")?.value as string;
    const loginRedirect = NextResponse.redirect(new URL('/auth/login', request.url))
    if (!accessToken) {
        return loginRedirect
    }

    const response = NextResponse.next()
        const jwtPayload = decode(accessToken) as JwtPayload;
        if (new Date().getTime() > Number(jwtPayload.exp) * 1000) {
            try {
                const newSession = await refreshSupertokensSession()
                if (newSession?.accessToken?.token && newSession?.refreshToken?.token) {
                    response.cookies.set("accessToken", newSession?.accessToken?.token)
                    response.cookies.set("refreshToken", newSession?.refreshToken?.token)
                    return response
                } else {
                    return loginRedirect
                }
            } catch (error: any) {
                console.error(error.message);
                return loginRedirect
            }
        }

    return response
}

export const config = {
    matcher: ["/account/:path",],
}