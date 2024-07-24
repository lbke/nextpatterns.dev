
import fs from "fs/promises"
import path from "path"
// We can use NextRequest and NextResponse
// they are just wrappers around JavaScript Request and Response
// import { NextResponse, NextRequest } from "next/server"

// Will not be needed anymore in Next 15
// but in Next 14 this prevents the GET endpoint
// from being statically rendered
export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
    // Photo de Josh Sorenson: https://www.pexels.com/fr-fr/photo/moniteur-d-ordinateur-a-ecran-plat-noir-1714208/
    // Hacky way to have an image file in a known folder
    const filePath = path.resolve("./public/image.jpg")
    console.log("Opening file", filePath)
    const stats = await fs.stat(filePath);
    const fileHandle = await fs.open(filePath)
    const stream = fileHandle.readableWebStream()
    // @ts-ignore
    return new Response(stream, {
        status: 200,
        headers: new Headers({
            // this optional header triggers a download in the browser
            "content-disposition": `attachment; filename=${path.basename(filePath)}`,
            // we could get the mimetype automatically
            "content-type": "image/jpeg",
            "content-length": stats.size + "",
        })

    })
}