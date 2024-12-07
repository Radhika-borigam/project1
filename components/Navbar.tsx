'use client';

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpenDesktop, setDropdownOpenDesktop] = useState(false);
  const [dropdownOpenMobile, setDropdownOpenMobile] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpenDesktop(false);
      }
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
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

  const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <Link href={href} className="text-gray-300 hover:text-blue-400 group">
      {children}
      <span className="block h-0.5 bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200"></span>
    </Link>
  );

  const features = [
    { name: "Digital Marketing", href: "/services/digital-marketing" },
    { name: "Cloud Services", href: "/services/cloud-services" },
    { name: "IT Services", href: "/services/it-services" },
    { name: "DevOps Solutions", href: "/services/devops-solutions" },
    { name: "Custom Software Development", href: "/services/custom-software" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 ${
        isScrolled ? "bg-black shadow-lg" : "bg-black/80 backdrop-blur-sm"
      } transition-all duration-300`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">
            Y9K
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8 items-center">
            <NavLink href="/">Home</NavLink>
            <div className="relative group" ref={dropdownRef}>
              <button
                className="text-gray-300 hover:text-blue-400 flex items-center group"
                onClick={() => setDropdownOpenDesktop(!dropdownOpenDesktop)}
              >
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {dropdownOpenDesktop && (
                <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-black ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    {features.map((feature) => (
                      <Link
                        key={feature.name}
                        href={feature.href}
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-blue-500 hover:text-white"
                        role="menuitem"
                      >
                        {feature.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <NavLink href="/contact">Contact</NavLink>
            <NavLink href="/support">Support</NavLink>
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
                <Link
                  href="/sign-in"
                  className="hidden sm:inline-block px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition"
                >
                  Sign In
                </Link>
                <Link
                  href="/sign-up"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Sign Up
                </Link>
              </>
            )}

            {/* Hamburger Icon for Mobile */}
            <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X className="h-6 w-6 text-gray-400" /> : <Menu className="h-6 w-6 text-gray-400" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-black" ref={menuRef}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" className="block px-3 py-2 text-base font-medium text-gray-300 hover:bg-blue-500 hover:text-white rounded-md">
              Home
            </Link>
            <div className="relative">
              <button
                className="w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:bg-blue-500 hover:text-white rounded-md flex justify-between items-center"
                onClick={() => setDropdownOpenMobile(!dropdownOpenMobile)}
              >
                Features
                <ChevronDown className={`h-4 w-4 transition-transform ${dropdownOpenMobile ? 'rotate-180' : ''}`} />
              </button>
              {dropdownOpenMobile && (
                <div className="pl-4">
                  {features.map((feature) => (
                    <Link
                      key={feature.name}
                      href={feature.href}
                      onClick={() => setMenuOpen(false)} // Close menu after clicking a link
                      className="block px-3 py-2 text-base font-medium text-gray-300 hover:bg-blue-500 hover:text-white rounded-md"
                    >
                      {feature.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/support" className="block px-3 py-2 text-base font-medium text-gray-300 hover:bg-blue-500 hover:text-white rounded-md">
              Support
            </Link>
            <Link href="/sign-in" className="block px-3 py-2 text-base font-medium text-gray-300 hover:bg-blue-500 hover:text-white rounded-md sm:hidden">
              Sign In
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
