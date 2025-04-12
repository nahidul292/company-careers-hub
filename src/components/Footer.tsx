
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-company-700">YourCompany</span>
            </Link>
            <p className="text-gray-600 max-w-xs">
              We're building the future of work. Join us on our mission to transform how teams collaborate worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-company-600" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-company-600" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-company-600" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-company-600" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-600 hover:text-company-600">About Us</Link></li>
              <li><Link to="/team" className="text-gray-600 hover:text-company-600">Our Team</Link></li>
              <li><Link to="/careers" className="text-gray-600 hover:text-company-600">Careers</Link></li>
              <li><a href="#" className="text-gray-600 hover:text-company-600">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-company-600">Terms of Service</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-company-600">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-company-600">Help Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-company-600">Press Kit</a></li>
              <li><a href="#" className="text-gray-600 hover:text-company-600">Events</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-company-600 mt-1 flex-shrink-0" />
                <span className="text-gray-600">123 Innovation Drive, Tech City, CA 94043</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-company-600 flex-shrink-0" />
                <span className="text-gray-600">(123) 456-7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-company-600 flex-shrink-0" />
                <span className="text-gray-600">careers@yourcompany.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-10 pt-6 text-center md:text-left md:flex md:justify-between md:items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} YourCompany, Inc. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-gray-500 text-sm">
              Built with <span className="text-company-600">♥</span> in Tech City
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
