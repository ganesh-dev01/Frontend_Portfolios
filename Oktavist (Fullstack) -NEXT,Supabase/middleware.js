import { NextResponse } from 'next/server';

export function middleware(req) {
    const { pathname } = req.nextUrl;


    const authToken = req.cookies.get('authToken');
    const userauthToken = req.cookies.get('userauthToken');


    if (pathname.startsWith('/Admin') && !authToken) {

        const loginUrl = new URL('/Typecheck', req.url);
        return NextResponse.redirect(loginUrl);
    }

    if (pathname.startsWith('/User/Home') && !userauthToken) {

        const loginUrl = new URL('/Typecheck', req.url);
        return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/Admin', '/User/Home'],
};
