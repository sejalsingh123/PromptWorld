
import ProfilePageClient from "@components/Profile-client";


export default async function UserProfilePage({ params }) {
  const { id } = await params;

  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/users/${id}/posts`,
    { cache: "no-store" }
  );

  const posts = await res.json();


  return(
    <ProfilePageClient
      posts={posts}
    />
  )
}
