
'use server'
import {cookies} from "next/headers";

export const embedCookieToken = async (accessToken: string, refreshToken: string) => {
    cookies().set('accessToken', accessToken)
    cookies().set('refreshToken', refreshToken)

    return {accessToken, refreshToken}
}