"use client";
import React from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import SearchProducts from "@/components/search-products";
import { usePathname } from "next/navigation";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const isProductPage = pathname.includes("/shop");
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
      {!isProductPage && <SearchProducts />}
    </React.Fragment>
  );
};

export default Layout;
