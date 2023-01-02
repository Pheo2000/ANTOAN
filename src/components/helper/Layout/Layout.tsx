import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { useState } from "react";

import Sidebar from "@/components/Sidebar";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.VFC<LayoutProps> = ({ children }) => {
  const [widthSlider, setWidthSlider] = useState(250);

  return (
    <div>
      <section className="flex transition-all ease-out duration-1000">
        <section className={`h-screen w-64`} style={{ width: widthSlider }}>
          <Sidebar />
        </section>
        <div style={{ width: `calc(100% - ${widthSlider}px)` }}>
          <Header />
          {children}
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default Layout;
