// src/pages/rss.xml.js
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

/** YYYY-MM-DD => Date object */
export function parseDate(dateStr: string): Date {
  const parsed = dateStr.split("-").map((n) => parseInt(n, 10))
  if (parsed.length !== 3) throw new Error("Invalide date " + dateStr)
  const date = new Date(parsed[0], parsed[1] - 1, parsed[2])
  return date
}

export async function GET(context: any) {
  const lessons = await getCollection('tutorial', ((t: any) => t.data.type === "lesson"));
  const parts = await getCollection('tutorial', ((t: any) => t.data.type === "part"));
  return rss({
    title: 'NextPatterns',
    description: 'Master Next.js, one pattern at a time',
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: context.site,
    items: lessons
      .map((lesson: any) => ({
        // Assumes all RSS feed item properties are in post frontmatter
        title: lesson.data.title,
        pubDate: parseDate(lesson.data.publishedAt || "2024-09-10").toUTCString(),
        // Generate a `url` from each post `slug`
        // This assumes all blog posts are rendered as `/blog/[slug]` routes
        // https://docs.astro.build/en/guides/content-collections/#generating-pages-from-content-collections
        //link: `/blog/${post.slug}/`,
      })),
  });
}