"use client";
import Link from "next/link";
export default function Error() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-[5rem] font-bold sm:text-[6rem] md:text-[7rem] lg:text-[8rem]">
        404
      </h1>
      <h1 className="mt-4 text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem]">
        PAGE NOT FOUND
      </h1>
      <h4 className="mt-2 text-base text-gray-600 sm:text-lg md:text-xl lg:text-2xl">
        Please Continue To Our{" "}
        <Link href="/" className="text-black duration-500 hover:text-gray-600">
          Home Page.
        </Link>
      </h4>
    </main>
  );
}
