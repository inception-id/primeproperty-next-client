"use server";
import {cookies} from "next/headers";

export const removeCookieToken = async () => {
    cookies().delete("accessToken");
    cookies().delete("refreshToken");
};
