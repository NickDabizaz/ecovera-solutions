'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Leaf,
  Lightbulb,
  Recycle,
  Feather,
  Globe,
  ShieldCheck,
  SunMedium,
} from 'lucide-react';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  image?: string;
  index?: number;
}

// Mapping nama string ke komponen ikon lucide
const iconMap: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = {
  Leaf,
  Lightbulb,
  Recycle,
  Feather,
  Globe,
  ShieldCheck,
  SunMedium,
};

const ServiceCard = ({ icon, title, description, image, index = 0 }: ServiceCardProps) => {
  const IconComponent = iconMap[icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      whileHover={{ 
        y: -12, 
        scale: 1.03,
        rotateY: 5,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
      }}
      className="group relative overflow-hidden bg-gradient-to-br from-white via-clean-white to-stone-grey/20 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-stone-grey/20"
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-leaf-green/5 via-transparent to-deep-forest/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Animated border glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-leaf-green via-sage-green to-deep-forest opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-500" />
      
      <div className="relative p-8 flex flex-col items-center text-center h-full">
        {/* Service Image */}
        {image && (
          <motion.div
            whileHover={{ scale: 1.1, rotate: 2 }}
            transition={{ duration: 0.3, type: "spring" }}
            className="mb-6 relative w-24 h-24 rounded-2xl overflow-hidden shadow-lg"
          >
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              sizes="(max-width: 768px) 96px, 96px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-forest/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        )}
        
        {/* Icon with enhanced animation */}
        <motion.div
          whileHover={{ 
            scale: 1.2, 
            rotate: [0, -5, 5, 0],
            y: -5
          }}
          transition={{ 
            duration: 0.4,
            rotate: { repeat: Infinity, duration: 2 }
          }}
          className="mb-6"
        >
          {IconComponent ? (
            <IconComponent 
              width={56} 
              height={56} 
              className="text-leaf-green group-hover:text-deep-forest transition-all duration-300 drop-shadow-lg" 
            />
          ) : (
            <div className="w-14 h-14 bg-gradient-to-br from-leaf-green to-sage-green rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:from-deep-forest group-hover:to-leaf-green transition-all duration-300 shadow-lg">
              ?
            </div>
          )}
        </motion.div>
        
        {/* Title with gradient text effect */}
        <motion.h3 
          className="text-2xl font-bold font-rymaneco bg-gradient-to-r from-leaf-green to-deep-forest bg-clip-text text-transparent group-hover:from-deep-forest group-hover:to-sage-green mb-4 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          {title}
        </motion.h3>
        
        {/* Description with enhanced styling */}
        <p className="text-charcoal-grey text-base leading-relaxed group-hover:text-deep-forest transition-colors duration-300 flex-grow">
          {description}
        </p>
        
        {/* Animated bottom border */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-leaf-green via-sage-green to-deep-forest transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
          style={{ borderRadius: '0 0 24px 24px' }}
        />
      </div>
    </motion.div>
  );
};

export default ServiceCard;
