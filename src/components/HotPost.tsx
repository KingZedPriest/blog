"use client";
import type { SanityDocument } from "@sanity/client";
import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "../../sanity/lib/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper/modules";

//Import React Icons
import { BsDot } from "react-icons/bs";

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
    <div className="mt-20 h-[36rem]">
      <Swiper
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {hotPosts.map((hotPost) => (
          <SwiperSlide key={hotPost._id} className="relative">
            {hotPost?.mainImage ? (
              <Image
                src={urlForImage(hotPost.mainImage).url()}
                fill
                alt={hotPost?.mainImage?.alt ?? "VBTechGist Image"}
                className="cursor-pointer"
              />
            ) : (
              "No Image"
            )}
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <div className="absolute inset-0 top-[70%] px-4 text-left font-semibold text-white">
              <p className="text-xs sm:text-sm md:text-base flex items-center">
                {hotPost?.author ? hotPost.author.name : "VBTechGist Writer"}
                <BsDot />
                <span> {formatDate(hotPost._createdAt)}.</span>
              </p>
              <h1 className="mt-2 text-lg sm:text-xl md:text-2xl lg:text-3xl hover:underline">
                <Link href={hotPost.slug.current}>{hotPost.title}</Link>
              </h1>
              <p className="mt-2 text-xs sm:text-sm md:text-base">
                {hotPost?.body
                  ? extractFirstWords(hotPost.body[0].children[0].text, 10)
                  : "The body of the blog Post."}
              </p>
              <div className="mt-4 flex gap-2">
                {hotPost.categories.map((category: SanityDocument) => (
                  <div
                    className="rounded-xl border border-white px-2 py-1 text-xs"
                    key={category._ref}
                  >
                    {category.title}
                  </div>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
