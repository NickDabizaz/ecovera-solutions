import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import SEOHead from "@/components/SEOHead";
import Link from "next/link";
import Image from "next/image";
import { servicesData, missionStatement } from "@/data/content";
import { generateSEOProps } from "@/utils/seo";

export default function Home() {
  return (
    <>
      <SEOHead seo={generateSEOProps('home')} />
      <div className="flex flex-col">
      {/* Hero Section */}
      <HeroSection />

      {/* Overview/Mission Section */}
      <section className="bg-clean-white text-deep-forest py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="section-title">{missionStatement.title}</h2>
            <p className="text-lg text-charcoal-grey leading-relaxed">
              {missionStatement.description}
            </p>
          </div>
            <div className="w-full md:w-1/2">
              <Image
                src={"/images/hero.png"}
                alt="Our Mission"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="bg-gradient-to-br from-stone-grey via-clean-white to-stone-grey/50 py-24 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-leaf-green rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-sage-green rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-deep-forest rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="section-title bg-gradient-to-r from-deep-forest via-leaf-green to-sage-green bg-clip-text text-transparent">
              Our Core Services
            </h2>
            <p className="text-xl text-charcoal-grey max-w-3xl mx-auto mt-4">
              Comprehensive sustainable solutions designed to transform your business and reduce environmental impact
            </p>
          </div>
          
          {/* 2x2 Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {servicesData.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                image={service.image}
                index={index}
              />
            ))}
          </div>
          
          {/* Call-to-action for services */}
          <div className="text-center mt-16">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-leaf-green to-sage-green text-white rounded-full text-lg font-medium hover:from-deep-forest hover:to-leaf-green transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Explore All Services
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Call-To-Action Section */}
      <section className="bg-deep-forest text-clean-white px-4 py-16 md:py-24 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-rymaneco">
            Ready to Go Green?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact Ecovera Solutions today to discuss sustainable solutions for
            your business or home.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-clean-white text-deep-forest rounded-full text-lg font-medium hover:bg-stone-grey transition-colors duration-300 shadow-lg"
          >
            Get in Touch Now
          </Link>
        </div>
      </section>
    </div>
    </>
  );
}
