import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-deep-forest text-stone-grey mt-auto pt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-8">
          {/* Company Info */}
          <div>
            <h2 className="font-rymaneco text-2xl mb-4 text-clean-white">Ecovera Solutions</h2>
            <p className="mb-4 text-stone-grey">
              Dedicated to providing sustainable, eco-friendly solutions for a greener tomorrow.
            </p>            <div className="flex items-center space-x-4 mt-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-sky-blue transition-colors p-2 rounded-full hover:bg-sky-blue/10"
                aria-label="Visit our Facebook page"
              >
                <FontAwesomeIcon icon={faFacebookF} size="lg" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-sky-blue transition-colors p-2 rounded-full hover:bg-sky-blue/10"
                aria-label="Follow us on Twitter"
              >
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-sky-blue transition-colors p-2 rounded-full hover:bg-sky-blue/10"
                aria-label="Follow us on Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-sky-blue transition-colors p-2 rounded-full hover:bg-sky-blue/10"
                aria-label="Subscribe to our YouTube channel"
              >
                <FontAwesomeIcon icon={faYoutube} size="lg" />
              </a>
            </div>
          </div>          {/* Quick Links */}
          <div>
            <h2 className="font-rymaneco text-xl mb-4 text-clean-white">Quick Links</h2>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="link-hover focus-visible p-1 rounded">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="link-hover focus-visible p-1 rounded">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="link-hover focus-visible p-1 rounded">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="link-hover focus-visible p-1 rounded">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h2 className="font-rymaneco text-xl mb-4 text-clean-white">Our Services</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="hover:text-sky-blue transition-colors">
                  Sustainable Consulting
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-sky-blue transition-colors">
                  Green Energy Solutions
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-sky-blue transition-colors">
                  Waste Reduction
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-sky-blue transition-colors">
                  Eco-friendly Product Design
                </Link>
              </li>
            </ul>
          </div>          {/* Contact Info */}
          <div>
            <h2 className="font-rymaneco text-xl mb-4 text-clean-white">Contact Us</h2>
            <address className="not-italic">
              <ul className="space-y-4 text-stone-grey">
                <li className="flex items-start">
                  <MapPin className="mr-2 h-5 w-5 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>123 Eco Street, Green City, Country</span>
                </li>
                <li className="flex items-center">
                  <Phone className="mr-2 h-5 w-5 flex-shrink-0" aria-hidden="true" />
                  <a href="tel:+15551234567" className="link-hover focus-visible p-1 rounded">
                    +1 (555) 123-4567
                  </a>
                </li>
                <li className="flex items-center">
                  <Mail className="mr-2 h-5 w-5 flex-shrink-0" aria-hidden="true" />
                  <a href="mailto:info@ecoverasolutions.com" className="link-hover focus-visible p-1 rounded">
                    info@ecoverasolutions.com
                  </a>
                </li>
              </ul>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-stone-grey/20 bg-deep-forest py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-stone-grey">
          <p>&copy; {currentYear} Ecovera Solutions. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <Link href="/terms" className="hover:text-sky-blue transition-colors">
              Terms Of Use
            </Link>
            <Link href="/privacy" className="hover:text-sky-blue transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
