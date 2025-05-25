// src/app/not-found.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Search } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import SEOHead from '@/components/SEOHead';

export default function NotFound() {
  return (
    <>
      <SEOHead 
        seo={{
          title: "Page Not Found - Ecovera Solutions",
          description: "The page you're looking for doesn't exist. Return to Ecovera Solutions homepage for sustainable business solutions.",
          keywords: "404, page not found, ecovera solutions"
        }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-stone-grey via-clean-white to-leaf-green/10 flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Large 404 Number */}
          <div className="mb-8">
            <h1 className="text-9xl md:text-[12rem] font-bold font-rymaneco text-leaf-green/20 leading-none">
              404
            </h1>
          </div>
          
          {/* Error Message */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold font-rymaneco text-deep-forest mb-4">
              Oops! Page Not Found
            </h2>            <p className="text-lg text-charcoal-grey max-w-md mx-auto leading-relaxed">
              The page you&apos;re looking for seems to have wandered off into the digital wilderness. 
              Let&apos;s get you back on the path to sustainability!
            </p>
          </div>
          
          {/* Illustration */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-leaf-green/10 rounded-full flex items-center justify-center">
              <Search size={64} className="text-leaf-green" />
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">            <Link
              href="/"
              className="btn-primary inline-flex items-center rounded-full text-lg shadow-lg focus-visible"
            >
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              Go to Homepage
            </Link>            
            <button
              onClick={() => window.history.back()}
              className="btn-secondary inline-flex items-center rounded-full text-lg focus-visible"
            >
              <ArrowLeft size={20} className="mr-2" />
              Go Back
            </button>
          </div>
          
          {/* Additional Links */}
          <div className="mt-12 pt-8 border-t border-stone-grey/30">
            <p className="text-charcoal-grey mb-4">
              Looking for something specific? Try these popular pages:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/about"
                className="text-leaf-green hover:text-deep-forest font-medium transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/services"
                className="text-leaf-green hover:text-deep-forest font-medium transition-colors"
              >
                Our Services
              </Link>
              <Link
                href="/contact"
                className="text-leaf-green hover:text-deep-forest font-medium transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
          
          {/* Fun Eco Message */}
          <div className="mt-8 p-4 bg-leaf-green/5 rounded-lg">            <p className="text-sm text-charcoal-grey italic">
              🌱 Fun fact: While you were looking for this page, a tree somewhere just converted more CO₂ into oxygen. 
              Nature doesn&apos;t have 404 errors – it just keeps growing! 🌿
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
