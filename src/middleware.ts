import { NextRequest, NextResponse } from "next/server";
import { verifySupertokensSession } from "./lib/supertokens/verify-supertokens-session";
import { refreshSupertokensSession } from "./lib/supertokens/refresh-supertokens-session";

export async function middleware(request: NextRequest) {
  const accessToken = request.cookies.get("accessToken")?.value;
  if (!accessToken) {
    return NextResponse.redirect(new URL("/auth", request.url));
  }

  const response = NextResponse.next();
  try {
    const sessionVerification = await verifySupertokensSession(accessToken);
    if (sessionVerification.status !== "OK") {
      const refreshToken = request.cookies.get("refreshToken")?.value as string;
      const newSession = await refreshSupertokensSession(refreshToken);
      if (newSession.status === "OK") {
        response.cookies.set("accessToken", newSession.accessToken.token);
        response.cookies.set("refreshToken", newSession.refreshToken.token);
      } else {
        response.cookies.delete("accessToken");
        response.cookies.delete("refreshToken");
      }
    }

    return response;
  } catch (error) {
    console.error("MIDDLEWARE ERRROR:\n", error);
    return response;
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     * - auth (authentication routes)
     * - supertokens (SuperTokens routes)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|icon.png|apple-icon.png|sitemap.xml|robots.txt|auth|supertokens).*)",
  ],
};
