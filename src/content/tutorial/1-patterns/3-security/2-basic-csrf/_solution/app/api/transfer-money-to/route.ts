import { type NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';

/**
 * Authentication check
 * The point of a CSRF is to pass this check,
 * because the request is fired from the victim's browser
 * Thus the HTTP request is including the victim's cookies
 * and authentication token
 */
async function getCurrentUser(token?: string) {
    // Notice a secondary security issue here:
    // we log sensitive information without a proper logging system !
    // Don't do that in production.
    console.log("Successfully authenticated user with token: ", token);
    return { userId: '1234' };
}
async function transferMoney(
    { from, to }: { from: string; to: string }) {
    console.log('Successfully sent money from ' + from + ' to ' + to);
}

//  ***
// 🔨 SOLUTION: 
//    Use a "POST" endpoint, to limit CSRF risk
//    Useful documentation: 
//    https://nextjs.org/docs/app/building-your-application/routing/route-handlers#convention
// ***
export async function POST(req: NextRequest) {
    const { userId } = await getCurrentUser(req.cookies.get('auth_token'));
    const accountId = req.body['accountId'];
    await transferMoney({ from: userId, to: accountId });
    return NextResponse.json(
        {
            message: 'Transfered money to ' + accountId
        });
}
