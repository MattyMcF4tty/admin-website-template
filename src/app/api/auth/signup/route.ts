import { NextRequest, NextResponse } from 'next/server';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export async function POST(req: NextRequest) {
  const url = new URL(req.url);
  const cookieStore = cookies();

  /* Get form data from request */
  const formData = await req.formData();

  const email = String(formData.get('email'));
  const password = String(formData.get('password'));

  /* Create supabase instance from cookies */
  const supabase = createRouteHandlerClient({
    cookies: () => cookieStore,
  });

  /* Try to sign up user */
  const response = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${url.origin}`,
    },
  });

  /* Redirect user to home page */
  return NextResponse.redirect(url.origin, {
    status: 301,
  });
}
