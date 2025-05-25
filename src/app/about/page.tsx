'use client';

import React from 'react';
import Image from 'next/image';
import { aboutContent } from '@/data/content';
import { Globe, Lightbulb, ShieldCheck, SunMedium } from 'lucide-react';
import FadeInOnScroll from '@/components/FadeInOnScroll';

// Icon mapping for values
const iconMap = {
  Globe,
  Lightbulb,
  ShieldCheck,
  SunMedium,
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-deep-forest to-leaf-green text-clean-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-rymaneco mb-6">
            About Ecovera Solutions
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Leading the way in sustainable innovation for a greener tomorrow
          </p>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="bg-clean-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-start gap-12">
            <div className="lg:w-2/3">
              <h2 className="section-title text-left mb-8">{aboutContent.companyStory.title}</h2>
              <div className="space-y-6">
                {aboutContent.companyStory.content.map((paragraph, index) => (
                  <p key={index} className="text-lg text-charcoal-grey leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div className="lg:w-1/3">
              <Image
                src="/images/hero.png"
                alt="Our Story"
                width={400}
                height={300}
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-stone-grey py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-clean-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold font-rymaneco text-deep-forest mb-6">
                {aboutContent.mission.title}
              </h3>
              <p className="text-lg text-charcoal-grey leading-relaxed">
                {aboutContent.mission.content}
              </p>
            </div>
            <div className="bg-clean-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold font-rymaneco text-deep-forest mb-6">
                {aboutContent.vision.title}
              </h3>
              <p className="text-lg text-charcoal-grey leading-relaxed">
                {aboutContent.vision.content}
              </p>
            </div>
          </div>
        </div>
      </section>      {/* Team Section */}
      <section className="bg-clean-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aboutContent.team.map((member, index) => (
              <FadeInOnScroll key={index} delay={index * 200}>
                <div className="bg-stone-grey rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-32 h-32 mx-auto mb-4 bg-leaf-green rounded-full flex items-center justify-center">
                    <span className="text-4xl font-bold text-clean-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold font-rymaneco text-deep-forest mb-2">
                    {member.name}
                  </h3>
                  <p className="text-leaf-green font-semibold mb-3">
                    {member.title}
                  </p>
                  <p className="text-charcoal-grey text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-deep-forest text-clean-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-rymaneco text-center mb-12 text-clean-white">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutContent.values.map((value, index) => {
              const IconComponent = iconMap[value.icon as keyof typeof iconMap];
              return (
                <div 
                  key={index} 
                  className="text-center p-6 rounded-lg bg-leaf-green/20 backdrop-blur-sm hover:bg-leaf-green/30 transition-colors duration-300"
                >
                  {IconComponent && (
                    <IconComponent size={48} className="mx-auto mb-4 text-clean-white" />
                  )}
                  <h3 className="text-xl font-bold font-rymaneco mb-3">
                    {value.title}
                  </h3>
                  <p className="text-clean-white/90 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-leaf-green text-clean-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-rymaneco mb-6">
            Ready to Work Together?
          </h2>          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help your business become more sustainable and profitable.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-clean-white text-leaf-green rounded-full text-lg font-medium hover:bg-stone-grey transition-colors duration-300 shadow-lg"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
