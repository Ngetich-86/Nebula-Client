'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                Nebula
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link href="/feed" className="hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium">
                Feed
              </Link>
              <Link href="/explore" className="hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium">
                Explore
              </Link>
              <Link href="/messages" className="hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium">
                Messages
              </Link>
              <Link href="/notifications" className="hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium">
                Notifications
              </Link>
            </div>
          </div>

          {/* User Menu */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-md text-sm font-medium">
                Create Post
              </button>
              <div className="relative">
                <button className="flex items-center space-x-2 hover:text-purple-400">
                  <div className="w-8 h-8 rounded-full bg-gray-700"></div>
                  <span className="text-sm font-medium">Profile</span>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/feed" className="block hover:text-purple-400 px-3 py-2 rounded-md text-base font-medium">
              Feed
            </Link>
            <Link href="/explore" className="block hover:text-purple-400 px-3 py-2 rounded-md text-base font-medium">
              Explore
            </Link>
            <Link href="/messages" className="block hover:text-purple-400 px-3 py-2 rounded-md text-base font-medium">
              Messages
            </Link>
            <Link href="/notifications" className="block hover:text-purple-400 px-3 py-2 rounded-md text-base font-medium">
              Notifications
            </Link>
            <button className="w-full text-left bg-purple-600 hover:bg-purple-700 px-3 py-2 rounded-md text-base font-medium">
              Create Post
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
