"use client";
import type { SanityDocument } from "@sanity/client";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper/modules";

import sample from "../../public/background.jpg";

// {hotPosts = []}: {hotPosts: SanityDocument []}
export default function App() {
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
        <SwiperSlide className="relative">
          <Image src={sample} alt="This is the sample" />
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="absolute inset-0 top-[65%] md:top-[60%] px-4 text-left font-semibold text-white">
            <p className="text-xs sm:text-sm md:text-base">
              Authors name and date.
            </p>
            <h1 className="mt-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">
              This is a very long heading.
            </h1>
            <p className="mt-2 text-xs sm:text-sm md:text-base">
              Some beginning sentences of the blog and some other sample
              sentences to get what I want.
            </p>
            <div className="flex gap-2 mt-4">
              <div className="rounded-xl border border-white py-1 px-2 text-xs">
                Web Developer
              </div>
              <div className="rounded-xl border border-white py-1 px-2 text-xs">Hot</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-red-400">Slide 2</SwiperSlide>
        <SwiperSlide className="bg-red-400">Slide 3</SwiperSlide>
        <SwiperSlide className="bg-red-400">Slide 4</SwiperSlide>
        <SwiperSlide className="bg-red-400">Slide 5</SwiperSlide>
        <SwiperSlide className="bg-red-400">Slide 6</SwiperSlide>
      </Swiper>
    </div>
  );
}
