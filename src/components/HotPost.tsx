"use client";
import type { SanityDocument } from "@sanity/client";
import { client } from "../../sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import urlFor from "../../sanity/lib/urlFor";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper/modules";

export default function App({ hotPosts = [] }: { hotPosts: SanityDocument[] }) {
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
  return (
    <div className="mt-20 h-[30rem]">
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {hotPosts.map((hotPost) => (
          <SwiperSlide key={hotPost._id} className="relative">
            
              {hotPost?.mainImage ? (
                <Image
                  src={urlFor(hotPost.mainImage).url()}
                  fill
                  alt={hotPost?.mainImage?.alt ?? "VBTechGist Image"}
                  className="cursor-pointer"
                />
              ) : (
                "No Image"
              )}
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <div className="absolute inset-0 top-[60%] px-4 text-left font-semibold text-white">
              <p className="text-xs sm:text-sm md:text-base">
                {hotPost?.author ? hotPost.author.name : "VBTechGist Writer"}
              </p>
              <h1 className="mt-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">
              <Link href={hotPost.slug.current}>
                {hotPost.title}
                </Link>
              </h1>
              <p className="mt-2 text-xs sm:text-sm md:text-base">
                {hotPost?.body
                  ? extractFirstWords(hotPost.body[0].children[0].text, 10)
                  : "The body of the blog Post."}
              </p>
              <div className="mt-4 flex gap-2">
                <div className="rounded-xl border border-white px-2 py-1 text-xs">
                  Web Developer
                </div>
                <div className="rounded-xl border border-white px-2 py-1 text-xs">
                  Hot
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
