// Footer.jsx
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Logo & Branding */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-bold mb-2">HomeHero</h2>
          <p className="text-gray-400 text-sm">
            Connecting you with trusted local household service providers.
          </p>
        </div>

        {/* Quick Links */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="text-gray-400 space-y-1">
            <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="/services" className="hover:text-white transition-colors">Services</a></li>
            <li><a href="/my-services" className="hover:text-white transition-colors">My Services</a></li>
            <li><a href="/my-bookings" className="hover:text-white transition-colors">My Bookings</a></li>
            <li><a href="/profile" className="hover:text-white transition-colors">Profile</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="text-gray-400 text-sm">Email: support@homehero.com</p>
          <p className="text-gray-400 text-sm">Phone: +1 (555) 123-4567</p>
          <p className="text-gray-400 text-sm">Address: 123 Main St, Your City</p>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
              <FaFacebookF size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <FaTwitter size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
              <FaInstagram size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} HomeHero. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
