import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const theme = request.cookies.get("theme")?.value;

  const response = NextResponse.next();

  if (theme === "dark" || theme === "light") {
    response.headers.set("x-theme", theme);
  }

  return response;
}

// Aplica o middleware a todas as rotas
export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};
