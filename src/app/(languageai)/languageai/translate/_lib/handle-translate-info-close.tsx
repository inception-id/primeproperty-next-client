'use server'
import {cookies} from "next/headers";
export const handleTranslateInfoClose= async () => {
    const maxAge =  60 * 60 * 24 * 2 // 2days
    cookies().set("translate-sharing-info", "done", {maxAge }) // 2 days

    return maxAge
}
