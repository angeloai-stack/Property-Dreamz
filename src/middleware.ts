// Preview-access gate — blocks all production routes until a valid token cookie is present.
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const BYPASS_TOKEN = process.env.PREVIEW_TOKEN ?? "preview2025";

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  // Always forward pathname so the root layout can read it
  const reqHeaders = new Headers(request.headers);
  reqHeaders.set("x-pathname", pathname);

  // Skip redirect logic in local development
  if (process.env.NODE_ENV === "development") {
    return NextResponse.next({ request: { headers: reqHeaders } });
  }

  // Pass through: coming-soon page, Next.js internals, API routes, static assets
  if (
    pathname.startsWith("/coming-soon") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/favicon.ico" ||
    pathname === "/icon.png" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml"
  ) {
    return NextResponse.next({ request: { headers: reqHeaders } });
  }

  // Preview bypass via cookie
  const cookieToken = request.cookies.get("preview_access")?.value;
  if (cookieToken === BYPASS_TOKEN) {
    return NextResponse.next({ request: { headers: reqHeaders } });
  }

  // Preview bypass via URL param — set cookie and redirect clean
  const queryToken = searchParams.get("preview");
  if (queryToken === BYPASS_TOKEN) {
    const destination = new URL(pathname, request.url);
    const response = NextResponse.redirect(destination);
    response.cookies.set("preview_access", BYPASS_TOKEN, {
      httpOnly: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24, // 24 hours
    });
    return response;
  }

  return NextResponse.redirect(new URL("/coming-soon", request.url));
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
