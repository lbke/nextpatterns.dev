/**
 * We let users propose new posts
 * Sadly, an attacker misused the "coverUrl" field to run a CSRF attack!
 */
async function getLatestPostsFromDb() {
  return [
    {
      title: 'Next.js is so cool',
      coverUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/394px-Nextjs-logo.svg.png',
      summary: "Next is really the best framework in the world.",
      author: 'Eric Burel',
    },
    {
      title: 'THIS POST WILL STILL YOUR MONEY!',
      summary: "Check your network log to observe an unexpected transaction",
      coverUrl: '/api/transfer-money-to?account=attackerId',
      author: 'Hacker4life',
    },
  ];
}

export default async function Home() {
  const latestPosts = await getLatestPostsFromDb();
  return (
    <main className="flex min-h-screen flex-col p-24 prose">
      <h1>Latest posts</h1>
      <div>
        {!latestPosts.length ? <p>No posts yet</p> : null}
        {latestPosts.map(({ title, coverUrl, author, summary }) => (
          <div className="border-b-4 shadow-lg px-8 py-4">
            <h2>{title}</h2>
            <p className="italic">Posted by {author}</p>
            <img src={coverUrl} alt={title + ' cover image'} />
            <p>{summary}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
