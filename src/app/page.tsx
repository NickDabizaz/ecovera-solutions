import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import Link from "next/link";
import Image from "next/image";
import { servicesData, missionStatement } from "@/data/content";

export default function Home() {
  return (
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
      <section className="bg-stone-grey py-20">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Our Core Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
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
  );
}
