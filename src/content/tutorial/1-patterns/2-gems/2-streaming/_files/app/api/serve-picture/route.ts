
import fs from "fs/promises"
import path from "path"

// Will not be needed anymore in Next 15
// but in Next 14 this prevents the GET endpoint
// from being statically rendered
export const dynamic = 'force-dynamic'

/**
 * You can add some advanced authorization logic here!
 */
export async function isAllowed(request: Request) {
    return true
}

export async function GET(request: Request) {
    if (!(await isAllowed(request))) {
        return new Response(null, { status: 403 })
    }
    // Photo from Josh Sorenson: https://www.pexels.com/fr-fr/photo/moniteur-d-ordinateur-a-ecran-plat-noir-1714208/
    // This is a hacky way to have an image file in a known folder,
    // your real file should NOT be in the "public" folder
    const filePath = path.resolve("./public/image.jpg")
    console.log("Opening file", filePath)
    const stats = await fs.stat(filePath);
    const fileHandle = await fs.open(filePath)
    // 🔨 PRACTICE HERE: replace this line with a call to "fileHandle.readableWebStream(...)"
    // be careful with the options
    const stream = null
    // At the time of writing (07/2024) there is a tiny issue with typings
    // @ts-ignore see https://github.com/nodejs/node/issues/54041#issuecomment-2260420439
    return new Response(stream, {
        status: 200,
        headers: new Headers({
            // we could get the mimetype automatically
            "content-type": "image/jpeg",
            "content-length": stats.size + "",
        })

    })
}