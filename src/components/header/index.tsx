import { Cart } from "@/assets/algo-icons";
import Link from "next/link";
import React from "react";

const navLinks = [
  { label: "Collections", href: "/collections" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  return (
    <header className="w-full absolute top-0 z-50">
      <div className="container mx-auto px-6 py-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-black">
          ShoeHub
        </Link>

        {/* Navigation */}
        <div className="flx gap-12">
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-black font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Call to Action */}
          <Link href="/shop">{<Cart size={6} />}</Link>
        </div>

        {/* Mobile menu icon (optional) */}
        {/* Add a hamburger icon or drawer logic if needed */}
      </div>
    </header>
  );
};

export default Header;
