import ProfilePageClient from "@components/profile-client";

export default async function UserProfilePage({ params }) {
  const { id } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${id}/posts`,
    { cache: "no-store" }
  );

  const posts = await res.json();

  return <ProfilePageClient posts={posts} />;
}
