import { NextResponse } from 'next/server';

/**
 * Set no cache neaders on request. We server side render and our page is tiny.
 * So everytime a user comes to the page we should rereques the root page.
 * 
 * This should not be used with the favicon or anything like that
 */
export function middleware() {
  const response = NextResponse.next();

  // Set Cache-Control and other headers
  response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  response.headers.set('Pragma', 'no-cache');
  response.headers.set('Expires', '0');

  return response;
}

// O
export const config = {
  matcher: '/',
}
