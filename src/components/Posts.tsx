import Link from "next/link";
import type { SanityDocument } from "@sanity/client";
import { Metadata } from "next";
import urlFor from "../../sanity/lib/urlFor";
import Image from "next/image";

//Import React Icons
import { BsDot } from "react-icons/bs";

export const metadata: Metadata = {
  title: "VBTechgist Posts",
};

export default function Posts({ posts = [] }: { posts: SanityDocument[] }) {
  const extractFirstWords = (text: string, wordCount: number) => {
    if (!text) {
      return "";
    }
    if (typeof text !== "string") {
      return "";
    }
    const words = text.split(" ");
    const firstWords = words.slice(0, wordCount).join(" ");
    return `${firstWords}...`;
  };
  function formatDate(inputDate: string): string {
    const date = new Date(inputDate);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  }
  return (
      <main className="mt-10">
        <div className="flex flex-col flex-wrap items-center justify-center gap-y-10 md:flex-row md:gap-x-10 xl:justify-between xl:gap-x-0">
          {posts.map((post) => (
            <div key={post._id} className="h-96 w-full md:w-[24rem]">
              <div className="h-1/2 w-full relative overflow-hidden">
                {post?.mainImage ? (
              <Image
                src={urlFor(post.mainImage).url()}
                fill={true}
                alt={post?.mainImage?.alt ?? "VBTechGist Image"}
                className="object-cover"
              />
            ) : (
              "No Image"
            )}
            </div>
              
          <div className="mt-2 font-semibold text-black text-left">
              <p className="text-xs md:text-sm flex items-center">
                {post?.author ? post.author.name : "VBTechGist Writer"}
                <BsDot />
                <span> {formatDate(post._createdAt)}.</span>
              </p>
              <h1 className="mt-2 text-sm sm:text-base md:text-lg lg:text-xl hover:underline">
                <Link href={post.slug.current}>{post.title}</Link>
              </h1>
              <p className="mt-2 text-xs md:text-sm">
                {post?.body
                  ? extractFirstWords(post.body[0].children[0].text, 10)
                  : "The body of the blog Post."}
              </p>
              <div className="mt-4 flex gap-2">
                {post.categories.map((category: SanityDocument) => (
                  <div
                    className="rounded-xl border border-black px-2 py-1 text-xs"
                    key={category._ref}
                  >
                    {category.title}
                  </div>
                ))}
              </div>
            </div>
          </div>
          ))}
        </div>
      </main>
  );
}
