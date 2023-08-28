"use client";
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
              <p className="text-xl font-bold text-black cursor-pointer">VBTECHGIST</p>
            </div>
          </div>
          <div className="hidden md:flex">
            <a
              href="#"
              className="rounded-md hover:bg-black px-3 py-2 text-sm font-semibold text-black hover:text-white duration-500"
            >
              Home
            </a>
            <a
              href="#"
              className="rounded-md hover:bg-black px-3 py-2 text-sm font-semibold text-black hover:text-white duration-500"
            >
              Latest News
            </a>
            <a
              href="#"
              className="rounded-md hover:bg-black px-3 py-2 text-sm font-semibold text-black hover:text-white duration-500"
            >
              About Us
            </a>
            <a
              href="#"
              className="rounded-md hover:bg-black px-3 py-2 text-sm font-semibold text-black hover:text-white duration-500"
            >
              Contact Us
            </a>
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
          <a
            href="#"
            className="block rounded-md hover:bg-black px-3 py-2 text-base font-semibold text-black hover:text-white duration-500um"
          >
            Home
          </a>
          <a
            href="#"
            className="block rounded-md hover:bg-black px-3 py-2 text-base font-semibold text-black hover:text-white duration-500um"
          >
            Latest News
          </a>
          <a
            href="#"
            className="block rounded-md hover:bg-black px-3 py-2 text-base font-semibold text-black hover:text-white duration-500um"
          >
            About Us
          </a>
          <a
            href="#"
            className="block rounded-md hover:bg-black px-3 py-2 text-base font-semibold text-black hover:text-white duration-500um"
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
}
