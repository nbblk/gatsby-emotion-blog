import React, { ReactNode } from "react";
import Footer from "./organisms/Footer";
import Header from "./organisms/Header";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
