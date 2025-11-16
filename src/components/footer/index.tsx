import { Facebook, Instagram, WhatsApp } from "@/assets/algo-icons";
import React from "react";
import IconButton from "../buttons/icon-button";

const footerLinks = {
  quickLinks: [
    { id: 1, label: "Home", href: "/" },
    { id: 2, label: "Collections", href: "/collections" },
    { id: 3, label: "Shop", href: "/shop" },
    { id: 4, label: "About Us", href: "/about" },
    { id: 4, label: "Contact Us", href: "/contact-us" },
  ],
  importantLinks: [
    { id: 1, label: "Privacy Policy", href: "/privacy-policy" },
    { id: 2, label: "Terms & Conditions", href: "/terms" },
    { id: 3, label: "FAQ", href: "/faq" },
  ],
};

const socialLinks = [
  { id: 1, icon: Facebook, href: "#" },
  { id: 2, icon: WhatsApp, href: "#" },
  { id: 3, icon: Instagram, href: "#" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#DFF2EB] via-[#B9E5E8] to-[#DFF2EB] opacity-40 blur-3xl pointer-events-none" />

      {/* Content */}
      <div
        className="relative z-10 container px-6 py-16 
          flex flex-col md:flex-row gap-10 md:gap-16"
      >
        {/* Logo & Intro */}
        <div className="max-w-md flex flex-col justify-between gap-10 text-center md:text-left">
          <div>
            <h4 className="text-2xl font-bold tracking-wide mb-4 text-teal-900/80">
              nylo
            </h4>
            <p className="text-lg">
              Creating impact through clean design and seamless experience. Join
              us on our journey!
            </p>
          </div>

          <div className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} nylo. All rights reserved.
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex-1 text-center md:text-left">
          <h4 className="text-lg font-semibold text-black/60 mb-4">
            Quick Links
          </h4>

          <ul className="space-y-2 text-gray-400">
            {footerLinks.quickLinks.map((item) => (
              <li key={item.id}>
                <a href={item.href} className="hover:text-primary tr">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Important Links */}
        <div className="flex-1 text-center md:text-left">
          <h4 className="text-lg font-semibold text-black/60 mb-4">
            Important Links
          </h4>
          <ul className="space-y-2 text-gray-400">
            {footerLinks.importantLinks.map((item) => (
              <li key={item.id}>
                <a href={item.href} className="hover:text-primary tr">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="max-w-md mx-auto md:mx-0 text-center md:text-left">
          <h4 className="text-lg font-semibold text-black/60 mb-4">
            Contact Us
          </h4>

          <div className="space-y-2.5 text-gray-400">
            <p className="text-sm flx gap-3 justify-center md:justify-start">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              123 Main Street, Dhaka, Bangladesh
            </p>

            <p className="text-sm flx gap-3 justify-center md:justify-start">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <a href="tel:+880123456789" className="hover:text-green-500">
                +880 1234 56789
              </a>
            </p>

            <p className="text-sm flx gap-3 justify-center md:justify-start">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <a
                href="mailto:info@example.com"
                className="hover:text-green-500"
              >
                info@example.com
              </a>
            </p>
          </div>

          {/* Social */}
          <div className="flex justify-center md:justify-start -ml-3.5 mt-6">
            {socialLinks.map((s) => (
              <IconButton key={s.id} icon={s.icon} color="bg-white" />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
