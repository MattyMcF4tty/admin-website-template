import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const url = req.nextUrl.clone();

  /* Check if client has permission to access /admin */
  if (url.pathname.startsWith('/admin')) {
    const supabase = createMiddlewareClient({ req, res });

    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
      return NextResponse.rewrite(new URL('/auth/signin', req.url), {
        status: 403,
      });
    }
  }

  /* Redirection logic */

  /* Redirection for admin pages */
  if (url.pathname.startsWith('/admin')) {
    // Redirect to dashboard when going to /admin. As dashboard is the default page of /admin
    if (url.pathname.endsWith('/admin')) {
      return NextResponse.redirect(new URL(url.origin + '/admin/dashboard'));
    }
    // Redirect to list when going to /prebooking. As list is the default page of /prebooking
    if (url.pathname.endsWith('prebooking')) {
      return NextResponse.redirect(new URL(url.origin + '/admin/prebooking/list'));
    }
  }

  // Continue with the request if no redirection is needed
  return res;
}

export const config = {};
