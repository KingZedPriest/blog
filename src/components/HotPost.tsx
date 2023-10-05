"use client"
import { groq } from "next-sanity";
import { client } from "../../sanity/lib/client";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// import required modules
import { Autoplay } from 'swiper/modules';

export default function App() {
    
  return (
    <div className="h-[30rem] mt-20">
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="bg-red-400">Slide 1</SwiperSlide>
        <SwiperSlide className="bg-red-400">Slide 2</SwiperSlide>
        <SwiperSlide className="bg-red-400">Slide 3</SwiperSlide>
        <SwiperSlide className="bg-red-400">Slide 4</SwiperSlide>
        <SwiperSlide className="bg-red-400">Slide 5</SwiperSlide>
        <SwiperSlide className="bg-red-400">Slide 6</SwiperSlide>
      </Swiper>
    </div>
  );
}
