import { NextResponse, NextRequest } from 'next/server'
import { useAuth } from '@memberstack/react'
 
export function middleware(request: NextRequest) {
  const {isLoggedIn} = useAuth()
 
  // If the user is authenticated, continue as normal
  if (isLoggedIn && request.nextUrl.pathname.startsWith('/auth')) {
      return NextResponse.redirect(new URL('/dashboard', request.url))
  }
  if (!isLoggedIn && request.nextUrl.pathname.startsWith('/dashboards')) {
      return NextResponse.redirect(new URL('/singin', request.url))
    }

  return NextResponse.next()
}