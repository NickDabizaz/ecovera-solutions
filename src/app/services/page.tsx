'use client';

import React from 'react';
import ServiceCard from '@/components/ServiceCard';
import { servicesData, whyChooseUs } from '@/data/content';
import { CheckCircle } from 'lucide-react';
import FadeInOnScroll from '@/components/FadeInOnScroll';

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-leaf-green to-deep-forest text-clean-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-rymaneco mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Comprehensive sustainable solutions tailored to your business needs
          </p>
        </div>
      </section>      {/* Services Grid Section */}
      <section className="bg-clean-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="section-title">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesData.map((service, index) => (
              <FadeInOnScroll key={index} delay={index * 150}>
                <div className="bg-stone-grey rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <ServiceCard
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                  />
                  <div className="mt-6 pt-6 border-t border-charcoal-grey/20">
                    <p className="text-charcoal-grey leading-relaxed">
                      {service.fullDescription}
                    </p>
                  </div>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-stone-grey py-20">
        <div className="container mx-auto px-4">
          <h2 className="section-title">{whyChooseUs.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-clean-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <CheckCircle size={48} className="mx-auto mb-4 text-leaf-green" />
                <h3 className="text-lg font-bold font-rymaneco text-deep-forest mb-3">
                  {reason.title}
                </h3>
                <p className="text-charcoal-grey text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="bg-clean-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Service Details</h2>
          <div className="space-y-12">
            {servicesData.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } items-center gap-12`}
              >
                <div className="lg:w-1/2">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-leaf-green rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl font-bold text-clean-white">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold font-rymaneco text-deep-forest">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-lg text-charcoal-grey leading-relaxed mb-6">
                    {service.fullDescription}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-deep-forest">Key Benefits:</h4>
                    <ul className="space-y-1">
                      <li className="flex items-center text-charcoal-grey">
                        <CheckCircle size={16} className="text-leaf-green mr-2" />
                        Measurable environmental impact
                      </li>
                      <li className="flex items-center text-charcoal-grey">
                        <CheckCircle size={16} className="text-leaf-green mr-2" />
                        Cost-effective implementation
                      </li>
                      <li className="flex items-center text-charcoal-grey">
                        <CheckCircle size={16} className="text-leaf-green mr-2" />
                        Ongoing support and monitoring
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="bg-stone-grey rounded-lg p-8 h-64 flex items-center justify-center">
                    <div className="text-center">
                      <ServiceCard
                        icon={service.icon}
                        title=""
                        description=""
                      />
                      <p className="text-charcoal-grey mt-4">
                        {service.title} Visualization
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-deep-forest text-clean-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-rymaneco text-center mb-12 text-clean-white">
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Assessment', description: 'We analyze your current practices and identify opportunities for improvement.' },
              { step: '02', title: 'Planning', description: 'We develop a customized sustainability strategy tailored to your goals.' },
              { step: '03', title: 'Implementation', description: 'We execute the plan with minimal disruption to your operations.' },
              { step: '04', title: 'Monitoring', description: 'We track progress and adjust strategies for optimal results.' },
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-leaf-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-clean-white">
                    {phase.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold font-rymaneco mb-3">
                  {phase.title}
                </h3>
                <p className="text-clean-white/90 leading-relaxed">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-leaf-green text-clean-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-rymaneco mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to discuss how our sustainable solutions can help your business reduce costs, improve efficiency, and contribute to a greener future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-clean-white text-leaf-green rounded-full text-lg font-medium hover:bg-stone-grey transition-colors duration-300 shadow-lg"
            >
              Get Started Today
            </a>
            <a
              href="/about"
              className="inline-block px-8 py-3 border-2 border-clean-white text-clean-white rounded-full text-lg font-medium hover:bg-clean-white hover:text-leaf-green transition-colors duration-300"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
