import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/navbar/Navbar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen bg-white dark:bg-nft-dark">
      <Navbar />
      <div>{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;
