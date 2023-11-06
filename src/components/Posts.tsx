import Link from "next/link";
import type { SanityDocument } from "@sanity/client";
import { Metadata } from "next";
import { urlForImage } from "../../sanity/lib/image";
import Image from "next/image";

//Import React Icons
import { BsDot, BsBoxArrowInUpRight } from "react-icons/bs";

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
    <main className="mt-[10rem]">
      <div className="flex flex-col flex-wrap items-center justify-center gap-y-10 md:flex-row md:gap-x-10 xl:justify-between xl:gap-x-0">
        {posts.map((post) => (
          <div key={post._id} className="h-96 w-full md:w-[24rem]">
            <div className="relative h-1/2 w-full overflow-hidden">
              {post?.mainImage ? (
                <Image
                  src={urlForImage(post.mainImage).url()}
                  fill={true}
                  alt={post?.mainImage?.alt ?? "VBTechGist Image"}
                  className="object-cover"
                />
              ) : (
                "No Image"
              )}
            </div>

            <div className="mt-2 text-left font-semibold text-black">
              <p className="flex items-center text-xs md:text-sm">
                {post?.author ? post.author.name : "VBTechGist Writer"}
                <BsDot />
                <span> {formatDate(post._createdAt)}.</span>
              </p>
              <Link href={post.slug.current}><p className="flex gap-3 justify-between">
                <h1 className="mt-2 text-sm hover:underline sm:text-base md:text-lg lg:text-xl cursor-pointer">
                  {post.title}
                </h1>
                <BsBoxArrowInUpRight className="hover:-translate-y-2 duration-500 mt-2 cursor-pointer" size={30}/>
              </p></Link>
              <p className="mt-2 text-xs md:text-sm">
                {post?.body
                  ? extractFirstWords(post.body[0].children[0].text, 10)
                  : "No Preview Found."}
              </p>
              <div className="mt-4 flex gap-2">
                {post.categories.map((category: SanityDocument) => (
                  <div
                    className="rounded-xl border border-black px-2 py-1 text-xs"
                    key={category._id}
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
