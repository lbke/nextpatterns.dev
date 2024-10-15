import { NextResponse } from 'next/server'

export async function GET() {
    // Simulate a delay of 3 seconds
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Generate a random number between 1 and 1000
    const viewCount = Math.floor(Math.random() * 1000) + 1

    // Return the number as JSON
    return NextResponse.json({ data: viewCount })
}
