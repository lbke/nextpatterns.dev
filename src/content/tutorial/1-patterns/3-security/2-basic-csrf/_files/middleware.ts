import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    //  ***
    // 🔨 PRACTICE HERE: 
    //    Add CSRF token to the response
    //    You can use the "@edge-csrf/nextjs" package
    //    (it's already installed in this demo)
    // ***
    const response = NextResponse.next();
    // Set an authentication token, for the demo
    response.cookies.set('auth_token', 'foobar', {
        // cookie is not available to client-side JavaScript
        httpOnly: true,
        // cookie is only available on HTTPS in production
        secure: process.env.NODE_ENV === 'production',
        //
        //  ***
        // 🔨 PRACTICE HERE: 
        //    Use sameSite: "strict" or "lax",
        //    so the cookie is NOT included 
        //    in request coming from other domains
        // ***
        // 
        sameSite: process.env.NODE_ENV !== 'production' ? 'lax' : 'none',
        maxAge: 3600 // 1 hour in seconds
    });
    //
    return response;
}