import { Facebook, Instagram, WhatsApp } from "@/assets/algo-icons";
import React from "react";
import IconButton from "../buttons/icon-button";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#DFF2EB] via-[#B9E5E8] to-[#DFF2EB] opacity-40 blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container px-6 py-16 flex gap-10">
        {/* Logo & Intro */}
        <div className="max-w-md">
          <h4 className="text-2xl font-bold tracking-wide mb-4 text-teal-900/80">ShoeHub</h4>
          <p className="text-lg">
            Creating impact through clean design and seamless experience. Join
            us on our journey!
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-black/60 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:text-green-500 transition-all">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-500 transition-all">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-500 transition-all">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-500 transition-all">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Important Links */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-black/60 mb-4">Important Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:text-green-500 transition-all">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-500 transition-all">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-500 transition-all">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-500 transition-all">
                Support
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="max-w-md">
          <h3 className="text-lg font-semibold text-black/60 mb-4">Contact Us</h3>
          <p className="text-sm text-gray-400 mb-2">
            📍 123 Main Street, Dhaka, Bangladesh
          </p>
          <p className="text-sm text-gray-400 mb-2">
            📞{" "}
            <a href="tel:+880123456789" className="hover:text-green-500">
              +880 1234 56789
            </a>
          </p>
          <p className="text-sm text-gray-400 mb-4">
            ✉️{" "}
            <a href="mailto:info@example.com" className="hover:text-green-500">
              info@example.com
            </a>
          </p>
          <div className="flex gap-1">
            <IconButton icon={Facebook} />
            <IconButton icon={WhatsApp} />
            <IconButton icon={Instagram} />
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="relative z-10 text-center text-sm text-gray-500 py-6 border-t border-white/10">
        &copy; {new Date().getFullYear()} ShoeHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
