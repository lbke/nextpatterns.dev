"use client"
import { useData } from './hooks/useData'

export default function HomePage() {
    // this shortsyntax destructures the return value of "useData",
    // and renames the "data" attribute to "viewCount"
    const { data: viewCount } = useData("/api/view-count")
    return (
        <div className="max-w-2xl mx-auto p-6">
            <p className="italic">You will see a layout shift below after 1 second.</p>
            <div className="border border-pink-500">
                {!!viewCount
                    ? <span>{viewCount} views for this article</span>
                    : null
                }
            </div>
            <h1 className="text-3xl font-bold mb-4">Client-Only JavaScript: Enhancing Web Interactivity</h1>
            <div className='space-y-4 text-gray-700'>


                <p className="mb-4 text-gray-700">
                    Client-only JavaScript has revolutionized the way we build interactive web applications. By executing code directly in the user's browser, we can create dynamic, responsive interfaces that update in real-time without constant server requests. This approach allows for smoother user experiences and reduced server load, making it an essential tool in modern web development.
                </p>

                <p className="mb-4 text-gray-700">
                    One of the key advantages of client-side JavaScript is its ability to handle complex user interactions and state management. Frameworks like React, Vue, and Angular leverage this capability to create sophisticated single-page applications (SPAs) that feel more like native apps than traditional websites. These SPAs can update specific parts of the page without full reloads, leading to faster perceived performance and improved user engagement.
                </p>

                <p className="mb-4 text-gray-700">
                    However, it's important to consider the trade-offs when relying heavily on client-side JavaScript. While it enables rich interactivity, it can also impact initial page load times and SEO if not implemented carefully. Techniques like code splitting, lazy loading, and server-side rendering can help mitigate these issues, allowing developers to strike a balance between interactivity and performance.
                </p>
            </div>
        </div>
    )
} 2