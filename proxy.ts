import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const COOKIE_NAME = "devis_session";

async function hasValidSession(request: NextRequest) {
  const cookie = request.cookies.get(COOKIE_NAME)?.value;
  if (!cookie) return false;
  const secretKey = process.env.SESSION_SECRET;
  if (!secretKey) return false;

  try {
    const { payload } = await jwtVerify(cookie, new TextEncoder().encode(secretKey), { algorithms: ["HS256"] });
    return payload.auth === true;
  } catch {
    return false;
  }
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/devis/login" || pathname === "/api/devis/login") {
    return NextResponse.next();
  }

  const authed = await hasValidSession(request);
  if (!authed) {
    if (pathname.startsWith("/api/")) {
      return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
    }
    const loginUrl = new URL("/devis/login", request.url);
    loginUrl.searchParams.set("next", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/devis/:path*", "/api/devis/:path*"],
};
