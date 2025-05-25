'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-clean-white/90 backdrop-blur-md z-50 shadow-sm transition-colors">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-1">
            <Image
              src="/images/logo.png"
              alt="Ecovera Solutions"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold font-rymaneco text-leaf-green hidden md:inline">
              Ec
            </span>
          </Link>          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            <Link 
              href="/" 
              className="nav-link font-medium"
              aria-current="page"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="nav-link font-medium"
            >
              About
            </Link>
            <Link 
              href="/services" 
              className="nav-link font-medium"
            >
              Services
            </Link>
            <Link 
              href="/contact" 
              className="btn-primary focus-visible"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-deep-forest focus:outline-none focus-visible p-2 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav 
            className="md:hidden bg-clean-white rounded-lg shadow-md mt-4 py-4 px-2"
            id="mobile-menu"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="nav-link font-medium p-2 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="nav-link font-medium p-2 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/services"
                className="nav-link font-medium p-2 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="btn-primary focus-visible inline-block text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
