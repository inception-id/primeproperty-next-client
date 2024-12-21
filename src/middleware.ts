import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { decode, JwtPayload } from "jsonwebtoken";
import { refreshSupertokensSession } from "@/lib/supertokens/refreshSupertokensSession";

export async function middleware(request: NextRequest) {
  const accessToken = request.cookies.get("accessToken")?.value as string;
  const loginRedirect = NextResponse.redirect(
    new URL("/auth/login", request.url),
  );
  if (!accessToken) {
    return loginRedirect;
  }

  // Activate token verification if necessary
  // const isSessionVerified = await verifySupertokensSession();
  // if (isSessionVerified.status !== "OK") {
  //   request.cookies.delete("accessToken");
  //   request.cookies.delete("refreshToken");
  //   return loginRedirect;
  // }

  const response = NextResponse.next();
  const jwtPayload = decode(accessToken) as JwtPayload;
  if (new Date().getTime() > Number(jwtPayload.exp) * 1000) {
    const newSession = await refreshSupertokensSession();
    if (newSession?.accessToken?.token && newSession?.refreshToken?.token) {
      request.cookies.set("accessToken", newSession.accessToken.token);
      request.cookies.set("refreshToken", newSession.refreshToken.token);
      return response;
    } else {
      request.cookies.delete("accessToken");
      request.cookies.delete("refreshToken");
      return loginRedirect;
    }
  }

  return response;
}

export const config = {
  matcher: ["/account", "/account/change-password"],
};
