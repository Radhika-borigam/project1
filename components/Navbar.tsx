"use client"; // Ensures client-side rendering in Next.js

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSignOut = () => setIsLoggedIn(false);
  const handleSignIn = () => setIsLoggedIn(true);

  return (
    <nav
      className={`fixed top-0 w-full z-50 ${
        isScrolled ? "bg-black shadow-lg" : "bg-black"
      } transition duration-300`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between h-[80px]">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white">
          NexShield
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="text-gray-300 hover:text-blue-400">
            Home
          </Link>
          <Link href="/features" className="text-gray-300 hover:text-blue-400">
            Features
          </Link>
          <div className="relative" ref={dropdownRef}>
            <button
              className="text-gray-300 hover:text-blue-400 flex items-center"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Pages <span className="ml-1">&#x25BC;</span>
            </button>
            {dropdownOpen && (
              <div className="absolute bg-black shadow-md mt-2 py-2 w-40 rounded-lg">
                <Link
                  href="/subpage1"
                  className="block px-4 py-2 text-gray-300 hover:bg-blue-500"
                >
                  Subpage 1
                </Link>
                <Link
                  href="/subpage2"
                  className="block px-4 py-2 text-gray-300 hover:bg-blue-500"
                >
                  Subpage 2
                </Link>
              </div>
            )}
          </div>
          <Link href="/support" className="text-gray-300 hover:text-blue-400">
            Support
          </Link>
        </div>

        {/* Sign In/Sign Out and Mobile Menu */}
        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <button
              onClick={handleSignOut}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Sign Out
            </button>
          ) : (
            <>
              <button
                onClick={handleSignIn}
                className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition"
              >
                Sign In
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Sign Up
              </button>
            </>
          )}

          {/* Hamburger Icon for Mobile */}
          <button
            className="block md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="space-y-2">
              <span className="block w-8 h-1 bg-gray-400"></span>
              <span className="block w-8 h-1 bg-gray-400"></span>
              <span className="block w-8 h-1 bg-gray-400"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black">
          <Link href="/" className="block px-4 py-2 text-gray-300">
            Home
          </Link>
          <Link href="/features" className="block px-4 py-2 text-gray-300">
            Features
          </Link>
          <Link href="/pages" className="block px-4 py-2 text-gray-300">
            Pages
          </Link>
          <Link href="/support" className="block px-4 py-2 text-gray-300">
            Support
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
