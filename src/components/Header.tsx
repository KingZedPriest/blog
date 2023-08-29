"use client";
import Link from "next/link"; 
import { useState } from "react";
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
             <Link href="/"> <p className="text-xl font-bold text-black cursor-pointer">VBTECHGIST</p></Link>
            </div>
          </div>
          <div className="hidden md:flex">
            <Link
              href="/"
              className="rounded-md hover:bg-black px-3 py-2 text-base font-semibold text-black hover:text-white duration-500"
            >
              Home
            </Link>
            <Link
              href="/latest" prefetch
              className="rounded-md hover:bg-black px-3 py-2 text-base font-semibold text-black hover:text-white duration-500"
            >
              Latest News
            </Link>
            <Link
              href="/about"
              className="rounded-md hover:bg-black px-3 py-2 text-base font-semibold text-black hover:text-white duration-500"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="rounded-md hover:bg-black px-3 py-2 text-base font-semibold text-black hover:text-white duration-500"
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
        <div className="md:hidden">
          <Link
            href="/"
            className="block rounded-md hover:bg-black px-3 py-2 text-base font-semibold text-black hover:text-white duration-500um"
          >
            Home
          </Link>
          <Link
            href="/latest" prefetch
            className="block rounded-md hover:bg-black px-3 py-2 text-base font-semibold text-black hover:text-white duration-500um"
          >
            Latest News
          </Link>
          <Link
            href="/about"
            className="block rounded-md hover:bg-black px-3 py-2 text-base font-semibold text-black hover:text-white duration-500um"
          >
            About Us
          </Link>
          <Link
            href="/about"
            className="block rounded-md hover:bg-black px-3 py-2 text-base font-semibold text-black hover:text-white duration-500um"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}
