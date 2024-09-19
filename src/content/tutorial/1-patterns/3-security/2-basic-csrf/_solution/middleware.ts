import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { createCsrfMiddleware } from '@edge-csrf/nextjs';

const csrfMiddleware = createCsrfMiddleware({
    cookie: {
        secure: process.env.NODE_ENV === 'production',
    },
});

export async function middleware(request: NextRequest) {
    //  ***
    // 🔨 SOLUTION: 
    //    Add a CSRF token to the response
    // ***
    const response = await csrfMiddleware(request);
    if (response.cookies.has('_csrfSecret')) {
        // Don't log that in production
        console.log("SettingCSRF token in cookies:", response.cookies.get('_csrfSecret'))
    }

    // Set an authentication token, for the demo
    response.cookies.set('auth_token', 'foobar', {
        // cookie is not available to client-side JavaScript
        httpOnly: true,
        // cookie is only available on HTTPS in production
        secure: process.env.NODE_ENV === 'production',
        //
        //  ***
        // 🔨 SOLUTION: 
        //    Use sameSite: "strict" or "lax",
        //    so the cookie is NOT included 
        //    in request coming from other domains
        // ***
        // 
        sameSite: 'lax',
        maxAge: 3600 // 1 hour in seconds
    });
    return response;
}