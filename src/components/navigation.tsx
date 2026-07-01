"use client";

import { useState } from "react";
import Link from "next/link";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-gray-900 bg-black/80 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 377 81"
              fill="none"
              width="80"
              className="text-white"
            >
              <path
                fill="currentColor"
                d="M103.704 22.537c17.023 0 29.411 11.829 28.532 33.327H90.781c1.548 5.975 5.684 11.109 13.963 11.109 4.635 0 8.871-1.279 12.068-5.275h14.306l-.241 1.279C128.4 73.926 115.932 80 104.744 80c-17.743 0-29.65-11.988-29.65-28.691 0-16.704 11.907-28.772 28.61-28.772Zm119.96 0c17.103 0 29.411 11.829 28.612 33.327H210.81c1.529 5.975 5.635 11.109 13.974 11.109 4.635 0 8.871-1.279 11.988-5.275h14.306l-.241 1.279c-2.477 10.949-14.945 17.023-26.133 17.023-17.743 0-29.65-11.988-29.65-28.691 0-16.704 11.907-28.772 28.61-28.772ZM0 23.456h15.065v9.681c3.892-6.855 10.107-10.6 18.623-10.6 13.254 0 21.77 9.201 21.77 25.425V79.08H40.393V50.622c0-9.201-4.395-14.236-12.431-14.236-8.511 0-12.907 5.515-12.907 15.756V79.08H0V23.456Zm294.988 55.624V23.456h15.065v9.441c3.652-6.615 9.867-10.36 18.383-10.36 7.071 0 12.907 2.798 16.559 7.835 4.155-5.037 10.37-7.835 18.143-7.835 12.907 0 21.183 8.721 21.183 24.705V79.08h-15.065V50.382c0-9.201-4.155-14.236-11.947-14.236-7.551 0-12.187 5.515-12.187 15.516V79.08h-15.065V50.382c0-9.201-4.155-14.236-11.947-14.236-7.551 0-12.187 5.515-12.187 15.516V79.08h-14.935Zm-71.284-33.567c0-3.278-2.717-5.755-6.609-5.755-3.892 0-6.609 2.477-6.609 5.755 0 3.278 2.717 5.755 6.609 5.755 3.892 0 6.609-2.477 6.609-5.755Zm-27.69 0c0-11.829 9.387-21.03 21.081-21.03 11.694 0 21.081 9.201 21.081 21.03 0 11.829-9.387 21.03-21.081 21.03-11.694 0-21.081-9.201-21.081-21.03Zm-72.324-22.31c17.023 0 29.411 11.829 28.532 33.327h-41.455c1.548 5.975 5.684 11.109 13.963 11.109 4.635 0 8.871-1.279 12.068-5.275h14.306l-.241 1.279c-2.477 10.949-14.945 17.023-26.133 17.023-17.743 0-29.65-11.988-29.65-28.691 0-16.704 11.907-28.772 28.61-28.772Zm-13.963 25.905h27.653c-1.068-6.615-5.444-11.349-13.723-11.349-8.279 0-12.655 4.734-13.93 11.349Z"
              />
            </svg>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-8 md:flex">
          <div className="flex items-center space-x-6">
            <button className="group flex items-center space-x-1 text-sm text-gray-300 transition-colors hover:text-white">
              <span>Product</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform group-hover:translate-y-0.5"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <button className="group flex items-center space-x-1 text-sm text-gray-300 transition-colors hover:text-white">
              <span>Developers</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform group-hover:translate-y-0.5"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <a
              href="#"
              className="text-sm text-gray-300 transition-colors hover:text-white"
            >
              Pricing
            </a>
            <button className="group flex items-center space-x-1 text-sm text-gray-300 transition-colors hover:text-white">
              <span>Company</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform group-hover:translate-y-0.5"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <a
              href="#"
              className="text-sm text-gray-300 transition-colors hover:text-white"
            >
              Blog
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="text-sm text-gray-300 transition-colors hover:text-white"
            >
              Sign in
            </a>
            <a
              href="#"
              className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition-opacity hover:opacity-90"
            >
              Sign up
            </a>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            aria-hidden="true"
            className="block h-8 w-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="border-t border-gray-900 bg-black px-6 py-4 md:hidden">
          <div className="space-y-4">
            <a href="#" className="block text-sm text-gray-300 hover:text-white">
              Product
            </a>
            <a href="#" className="block text-sm text-gray-300 hover:text-white">
              Developers
            </a>
            <a href="#" className="block text-sm text-gray-300 hover:text-white">
              Pricing
            </a>
            <a href="#" className="block text-sm text-gray-300 hover:text-white">
              Company
            </a>
            <a href="#" className="block text-sm text-gray-300 hover:text-white">
              Blog
            </a>
            <div className="border-t border-gray-900 pt-4">
              <a href="#" className="block text-sm text-gray-300 hover:text-white">
                Sign in
              </a>
              <a
                href="#"
                className="mt-4 block rounded-lg bg-white px-4 py-2 text-center text-sm font-medium text-black"
              >
                Sign up
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
