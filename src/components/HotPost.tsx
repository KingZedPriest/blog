"use client";
// Import Needed Next.js Tools
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper/modules";

import sample from "../../public/background.jpg";

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
          <div className="absolute inset-0 text-white text-lg font-semibold p-4">This sentence is for sample purposes only.</div>
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
