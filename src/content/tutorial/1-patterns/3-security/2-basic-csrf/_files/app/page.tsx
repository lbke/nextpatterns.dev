/**
 * We let users propose new posts
 * Sadly, an attacker misused the "coverUrl" field to run a CSRF attack!
 */
async function getLatestPostsFromDb() {
  return [
    {
      title: 'Next.js is so cool',
      coverUrl:
        '/next-logo.png',
      summary: "Next is really the best framework in the world.",
      author: 'Eric Burel',
    },
    {
      title: 'THIS POST WILL STILL YOUR MONEY!',
      summary: "Check your network logs to observe an unexpected transaction",
      coverUrl: '/api/transfer-money-to?account=attackerId',
      author: 'Hacker4life',
    },
  ];
}

export default async function Home() {
  const latestPosts = await getLatestPostsFromDb();
  return (
    <main className="min-h-screen p-24">
      <h1>Latest posts</h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {!latestPosts.length ? <p>No posts yet</p> : null}
        {latestPosts.map(({ title, coverUrl, author, summary }) => (
          <div className="border-b-4 shadow-lg px-8 py-4 bg-slate-100 rounded" key={title}>
            <h2>{title}</h2>
            <p className="italic">Posted by {author}</p>
            <img src={coverUrl} alt={'cover image'} />
            <p>"{summary}"</p>
          </div>
        ))}
      </div>
    </main>
  );
}
