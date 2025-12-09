"use client";

export default function ProfilePageClient({ posts }) {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        {posts[0]?.creator?.username}'s Posts
      </h1>

      {posts.length === 0 ? (
        <p>This user has not posted anything yet.</p>
      ) : (
        posts.map((post) => (
          <div key={post._id} className="border p-3 my-2 rounded">
            <h2 className="font-semibold">{post.prompt}</h2>
            <p className="text-gray-500">{post.tag}</p>
          </div>
        ))
      )}
    </div>
  );
}
