import { NextRequest, NextResponse } from 'next/server'
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  
  // Public route'ları tanımla
  const publicRoutes = ['/', '/login', '/register', '/about', '/contact', '/signup-test']
  const isPublicRoute = publicRoutes.some(route => 
    req.nextUrl.pathname === route || req.nextUrl.pathname.startsWith(route + '/')
  )
  
  // Public route ise direkt geç
  if (isPublicRoute) {
    return res
  }
  
  try {
    const supabase = createMiddlewareClient({ req, res })
    
    // Session al
    const { data: { session } } = await supabase.auth.getSession()
    
    // Session yoksa redirect et
    if (!session) {
      return NextResponse.redirect(new URL('/', req.url))
    }
    
    return res
  } catch (error) {
    console.error('Middleware auth error:', error)
    return NextResponse.redirect(new URL('/', req.url))
  }
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)).*)',
  ],
}