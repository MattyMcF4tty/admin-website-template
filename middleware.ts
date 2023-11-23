import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';


export function middleware(request: NextRequest) {

  //Reroute to admin dashboard when trying to go to /admin. as dashboard is the default admin page.
  if (request.nextUrl.pathname === '/admin') {
    const url = request.nextUrl.clone();
    url.pathname = '/admin/dashboard';
    return NextResponse.redirect(url);
  }
}

//makes sure this middleware only runs on /admin
export const config = {
  matcher: '/admin',
};
