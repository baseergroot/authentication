import { jwtVerify } from 'jose'
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function middleware(request) {
  const cookie = await cookies()
  const token = cookie.get('token')?.value
  const pathname = request.nextUrl.pathname

  const authRoutes = ['/login', '/signup']
  const protectedRoutes = ['/', "/logout", "/user"]

  let loggedIn = false

  if (token) {
    try {
      const { payload } = await jwtVerify(
        token,
        new TextEncoder().encode(process.env.JWT_SECRET)
      )
      loggedIn = !!payload
    } catch (e) {
      console.log('Invalid token')
    }
  }

  if (protectedRoutes.includes(pathname) && !loggedIn) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (authRoutes.includes(pathname) && loggedIn) {
    return NextResponse.redirect(new URL('/user', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/login', '/signup', "/logout", "/user"]
}
