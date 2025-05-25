'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative h-[70vh] md:h-[85vh] flex items-center justify-center text-center overflow-hidden">
      {/* Animated background image with parallax effect */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <motion.div
          animate={{ 
            scale: [1, 1.02, 1],
            rotate: [0, 0.5, 0]
          }}
          transition={{ 
            duration: 20, 
            ease: "easeInOut", 
            repeat: Infinity, 
            repeatType: "reverse" 
          }}
          className="w-full h-full"
        >
          <Image
            src="/images/hero.png"
            alt="Sustainable solutions background"
            fill
            className="object-cover"
            quality={95}
            priority
          />
        </motion.div>
      </motion.div>
      
      {/* Enhanced gradient overlay with animated particles */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-forest/60 via-leaf-green/30 to-sage-green/50 z-10">
        {/* Floating particles animation */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-clean-white/20 rounded-full"
              animate={{
                x: [0, 100, -100, 0],
                y: [0, -100, 100, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 1.5,
              }}
              style={{
                left: `${10 + i * 15}%`,
                top: `${20 + i * 10}%`,
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Content with enhanced animations */}
      <div className="relative z-20 flex flex-col items-center justify-center p-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ 
            duration: 1.2, 
            delay: 0.3,
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
          className="mb-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold font-rymaneco text-transparent bg-gradient-to-r from-clean-white via-stone-grey/90 to-clean-white bg-clip-text drop-shadow-2xl">
            Ecovera Solutions
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mb-8"
        >
          <p className="text-xl md:text-3xl font-medium max-w-4xl text-clean-white drop-shadow-lg leading-relaxed">
            Dedicated to providing <span className="text-transparent bg-gradient-to-r from-leaf-green to-sage-green bg-clip-text font-bold">sustainable, eco-friendly solutions</span> for a greener tomorrow.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              href="/services"
              className="px-10 py-4 bg-gradient-to-r from-leaf-green to-sage-green text-clean-white rounded-full text-lg font-semibold hover:from-sage-green hover:to-deep-forest transition-all duration-300 shadow-xl hover:shadow-2xl inline-flex items-center gap-2"
            >
              Discover Our Solutions
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              href="/contact"
              className="px-10 py-4 bg-transparent border-2 border-clean-white text-clean-white rounded-full text-lg font-semibold hover:bg-clean-white hover:text-deep-forest transition-all duration-300 shadow-xl hover:shadow-2xl inline-flex items-center gap-2"
            >
              Get Started Today
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-clean-white rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-clean-white rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
