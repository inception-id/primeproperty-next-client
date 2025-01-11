"use server";
import { cookies } from "next/headers";

export const setSplashCookie = async () => {
  const cookieStore = await cookies();
  cookieStore.set("show-splash", "done", {
    maxAge: 60 * 60 * 24 * 7, // 1 week
  });
};
