import { type NextRequest, NextResponse } from 'next/server';

/**
 * Authentication check
 * The point of a CSRF is to pass this check,
 * because the request is fired from the victim's browser
 * Thus the HTTP request is including the victim's cookies
 * and authentication token
 */
async function getCurrentUser(token?: string) {
    return { userId: 'your-user-id' };
}
async function transferMoney({ from, to }: { from: string; to: string }) {
    // (notice a secondary security issue:
    // we log sensitive information without a proper logging system)
    console.log('Successfully sent money from ' + from + ' to ' + to);
}

//  ***
// 🔨 PRACTICE HERE: 
//    Use a "POST" endpoint instead!
//    Useful documentation: https://nextjs.org/docs/app/building-your-application/routing/route-handlers#convention
// ***
export async function GET(req: NextRequest) {
    const { userId } = await getCurrentUser(req.cookies.get('token')?.value);
    const accountId = req.nextUrl.searchParams.get('accountId')!;
    await transferMoney({ from: userId, to: accountId });
    return NextResponse.json({ message: 'Transfered money to ' + accountId });
}
