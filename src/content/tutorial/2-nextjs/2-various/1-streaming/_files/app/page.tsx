export default function FilePage() {
    return (
        <div>
            <h1>Streaming a private image</h1>
            <img src="/api/serve-picture" />
            <a download href="/api/serve-picture">Save image</a>
        </div>
    )
}