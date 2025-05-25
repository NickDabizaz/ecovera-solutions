import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="font-rymaneco text-xl mb-4">Ecovera Solutions</h2>
            <p className="mb-4 text-gray-200">
              Dedicated to providing sustainable, eco-friendly solutions for a greener tomorrow.
            </p>
            <div className="flex items-center space-x-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-300 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-300 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-300 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-300 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="font-rymaneco text-xl mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-green-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-green-300 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-green-300 transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-green-300 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h2 className="font-rymaneco text-xl mb-4">Our Services</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="hover:text-green-300 transition-colors">
                  Sustainable Consulting
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-green-300 transition-colors">
                  Green Energy Solutions
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-green-300 transition-colors">
                  Waste Reduction
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-green-300 transition-colors">
                  Eco-friendly Product Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="font-rymaneco text-xl mb-4">Contact Us</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>123 Eco Street, Green City, Country</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 flex-shrink-0" />
                <span>info@ecoverasolutions.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-green-950 py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {currentYear} Ecovera Solutions. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <Link href="/terms" className="hover:text-green-300 transition-colors">
              Terms Of Use
            </Link>
            <Link href="/privacy" className="hover:text-green-300 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;