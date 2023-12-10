import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {   
  const url = request.nextUrl.clone()   

  // Redirect to dashboard when going to /admin. As dashboard is the default page of /admin
  if (url.pathname === '/admin') {
    url.pathname = '/admin/dashboard'
    return NextResponse.redirect(url)   
  } 

  // Redirect to list when going to /prebooking. As list is the default page of /prebooking
  if (url.pathname === '/admin/prebooking') {
    url.pathname = '/admin/prebooking/list'    
    return NextResponse.redirect(url)   
  } 

  // Continue with the request if no redirection is needed
  return NextResponse.next();
}