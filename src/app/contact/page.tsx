'use client';

import React from 'react';
import ContactForm from '@/components/ContactForm';
import { contactInfo } from '@/data/content';
import { MapPin, Phone, Mail, Clock, Linkedin, Twitter, Facebook } from 'lucide-react';
import FadeInOnScroll from '@/components/FadeInOnScroll';

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-deep-forest via-leaf-green to-deep-forest text-clean-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-rymaneco mb-6">
            {contactInfo.title}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Ready to start your sustainability journey? Let&apos;s connect!
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="bg-stone-grey py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-lg text-charcoal-grey max-w-3xl mx-auto">
              {contactInfo.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <FadeInOnScroll>
              <ContactForm />
            </FadeInOnScroll>

            {/* Contact Information */}
            <FadeInOnScroll delay={200}>
              <div className="space-y-8">
                {/* Contact Details Card */}
                <div className="bg-clean-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold font-rymaneco text-deep-forest mb-6">
                    Contact Information
                  </h3>
                  
                  <div className="space-y-4">
                    {/* Email */}
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-leaf-green rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail size={24} className="text-clean-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-deep-forest">Email</h4>
                        <a 
                          href={`mailto:${contactInfo.details.email}`}
                          className="text-leaf-green hover:text-deep-forest transition-colors"
                        >
                          {contactInfo.details.email}
                        </a>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-leaf-green rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone size={24} className="text-clean-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-deep-forest">Phone</h4>
                        <a 
                          href={`tel:${contactInfo.details.phone.replace(/\s/g, '')}`}
                          className="text-leaf-green hover:text-deep-forest transition-colors"
                        >
                          {contactInfo.details.phone}
                        </a>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-leaf-green rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin size={24} className="text-clean-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-deep-forest">Address</h4>
                        <address className="text-charcoal-grey not-italic">
                          {contactInfo.details.address.street}<br />
                          {contactInfo.details.address.city}, {contactInfo.details.address.state} {contactInfo.details.address.zip}<br />
                          {contactInfo.details.address.country}
                        </address>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-leaf-green rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock size={24} className="text-clean-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-deep-forest">Business Hours</h4>
                        <div className="text-charcoal-grey text-sm space-y-1">
                          <p>{contactInfo.details.hours.weekdays}</p>
                          <p>{contactInfo.details.hours.weekends}</p>
                          <p>{contactInfo.details.hours.closed}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media Card */}
                <div className="bg-clean-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold font-rymaneco text-deep-forest mb-6">
                    Follow Us
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href={contactInfo.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-leaf-green rounded-lg flex items-center justify-center hover:bg-deep-forest transition-colors"
                    >
                      <Linkedin size={24} className="text-clean-white" />
                    </a>
                    <a
                      href={contactInfo.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-leaf-green rounded-lg flex items-center justify-center hover:bg-deep-forest transition-colors"
                    >
                      <Twitter size={24} className="text-clean-white" />
                    </a>
                    <a
                      href={contactInfo.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-leaf-green rounded-lg flex items-center justify-center hover:bg-deep-forest transition-colors"
                    >
                      <Facebook size={24} className="text-clean-white" />
                    </a>
                  </div>
                  <p className="text-sm text-charcoal-grey mt-4">
                    Stay updated with our latest sustainability insights and company news.
                  </p>
                </div>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="bg-clean-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Visit Our Office</h2>
          <FadeInOnScroll>
            <div className="bg-stone-grey rounded-2xl p-8 text-center">
              <MapPin size={64} className="mx-auto mb-4 text-leaf-green" />
              <h3 className="text-xl font-bold font-rymaneco text-deep-forest mb-4">
                Our Location
              </h3>
              <p className="text-charcoal-grey mb-6">
                We&apos;re located in the heart of San Francisco, easily accessible by public transportation.
              </p>
              <div className="bg-clean-white rounded-lg p-6 text-left max-w-md mx-auto">
                <address className="text-charcoal-grey not-italic">
                  <strong className="text-deep-forest">{contactInfo.details.address.street}</strong><br />
                  {contactInfo.details.address.city}, {contactInfo.details.address.state} {contactInfo.details.address.zip}<br />
                  {contactInfo.details.address.country}
                </address>
              </div>
              <p className="text-sm text-charcoal-grey mt-4">
                * Interactive map integration available in future updates
              </p>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-deep-forest text-clean-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-rymaneco text-center mb-12 text-clean-white">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <FadeInOnScroll delay={0}>
              <div className="bg-leaf-green/20 rounded-lg p-6">
                <h3 className="text-lg font-bold mb-3">How quickly can you start a project?</h3>
                <p className="text-clean-white/90">
                  We typically begin initial consultations within 3-5 business days and can start implementation within 2-3 weeks, depending on project scope.
                </p>
              </div>
            </FadeInOnScroll>
            
            <FadeInOnScroll delay={100}>
              <div className="bg-leaf-green/20 rounded-lg p-6">
                <h3 className="text-lg font-bold mb-3">Do you work with small businesses?</h3>
                <p className="text-clean-white/90">
                  Absolutely! We work with businesses of all sizes, from startups to enterprise organizations, tailoring our solutions to fit your budget and needs.
                </p>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={200}>
              <div className="bg-leaf-green/20 rounded-lg p-6">
                <h3 className="text-lg font-bold mb-3">What&apos;s included in a consultation?</h3>
                <p className="text-clean-white/90">
                  Our initial consultation includes a comprehensive sustainability audit, custom recommendations, and a detailed implementation roadmap.
                </p>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={300}>
              <div className="bg-leaf-green/20 rounded-lg p-6">
                <h3 className="text-lg font-bold mb-3">Do you provide ongoing support?</h3>
                <p className="text-clean-white/90">
                  Yes! We offer ongoing monitoring, maintenance, and optimization services to ensure your sustainability initiatives continue to deliver results.
                </p>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-leaf-green text-clean-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-rymaneco mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses already making a positive environmental impact with Ecovera Solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`mailto:${contactInfo.details.email}`}
              className="inline-block px-8 py-3 bg-clean-white text-leaf-green rounded-full text-lg font-medium hover:bg-stone-grey transition-colors duration-300 shadow-lg"
            >
              Email Us Directly
            </a>
            <a
              href={`tel:${contactInfo.details.phone.replace(/\s/g, '')}`}
              className="inline-block px-8 py-3 border-2 border-clean-white text-clean-white rounded-full text-lg font-medium hover:bg-clean-white hover:text-leaf-green transition-colors duration-300"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
