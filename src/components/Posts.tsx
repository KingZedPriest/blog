import Link from "next/link";
import type { SanityDocument } from "@sanity/client";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'VBTechgist Posts',
  }

export default function Posts({ posts = [] }: { posts: SanityDocument[] }) {
    const title = posts.length === 0 ? `No Post Available.` : `${posts.length} Posts.`
  return (
    <>
      <main className="container mx-auto grid grid-cols-1 divide-y divide-blue-100">
        <h1 className="text-2xl p-4 font-bold">{title}</h1>
        {posts.map((post) => (
          <Link key={post._id} href={post.slug.current} className="p-4 hover:bg-blue-50">
            <h2>{post.title}</h2>
          </Link>
        ))}
      </main>
    </>
  );
}