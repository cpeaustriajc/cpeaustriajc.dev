import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  if (
    process.env.VERCEL_ENV === 'production' &&
    request.nextUrl.pathname === '/studio'
  ) {
    return NextResponse.redirect('/');
  }
}
