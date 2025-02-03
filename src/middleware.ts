import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { refreshSupertokensSession } from "@/lib/supertokens/refreshSupertokensSession";
import {decodeJwt} from "jose";

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
  const jwtPayload = decodeJwt(accessToken);
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
  matcher: [
    "/account",
    "/account/change-password",
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    // "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|home|auth|languageai).*)",
  ],
};
