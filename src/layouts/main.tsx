import React from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import SearchProducts from "@/components/search-products";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
      <SearchProducts />
    </React.Fragment>
  );
};

export default Layout;
