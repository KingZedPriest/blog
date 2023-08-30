"use client";
import Link from "next/link";
import { useState } from "react";
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="fixed top-0 z-10 bg-white w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                {" "}
                <p className="cursor-pointer text-xl font-bold text-black">
                  VBTECHGIST
                </p>
              </Link>
            </div>
          </div>
          <div className="hidden md:flex">
            <Link
              href="/"
              className="rounded-[2rem] px-3 py-2 text-base font-semibold text-black duration-500 hover:bg-black hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/latest"
              prefetch
              className="rounded-[2rem] px-3 py-2 text-base font-semibold text-black duration-500 hover:bg-black hover:text-white"
            >
              Latest News
            </Link>
            <Link
              href="/about"
              className="rounded-[2rem] px-3 py-2 text-base font-semibold text-black duration-500 hover:bg-black hover:text-white"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="rounded-[2rem] px-3 py-2 text-base font-semibold text-black duration-500 hover:bg-black hover:text-white"
            >
              Contact Us
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black hover:text-gray-600 focus:text-black focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div
          className={`mb-2 transition-opacity duration-500 md:hidden ${
            menuOpen ? "opacity-100" : "opacity-0"
          } shadow-md`}
        >
          <Link
            href="/"
            className="duration-500 block rounded-[2rem] px-3 py-2 text-base font-semibold text-black hover:bg-black hover:text-white"
          >
            Home
          </Link>
          <Link
            href="/latest"
            prefetch
            className="duration-500 block rounded-[2rem] px-3 py-2 text-base font-semibold text-black hover:bg-black hover:text-white"
          >
            Latest News
          </Link>
          <Link
            href="/about"
            className="duration-500 block rounded-[2rem] px-3 py-2 text-base font-semibold text-black hover:bg-black hover:text-white"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="duration-500 block rounded-[2rem] px-3 py-2 text-base font-semibold text-black hover:bg-black hover:text-white"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}
