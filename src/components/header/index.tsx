import React from "react";
import Link from "next/link";
import { Cart } from "@/assets/algo-icons";
import IconButton from "@/components/buttons/icon-button";
import Image from "next/image";
import { User } from "lucide-react";
import { NAV_LINKS } from "./data";

const Header = () => {
  return (
    <header className="w-full absolute top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flx">
          <Image
            src="/logo.svg"
            height={200}
            width={200}
            className="h-16 w-16 -rotate-30 -ml-4"
            alt="logo"
          />
          <span className="text-3xl font-semibold text-emerald-900">nylo</span>
        </Link>

        {/* Navigation */}
        <div className="flx gap-8">
          <nav className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-black font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flx">
            <IconButton icon={Cart} />
            <IconButton icon={User} size={20} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
