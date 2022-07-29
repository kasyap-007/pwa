import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  return (
    <div className=" px-2 py-4 bg-slate-800 text-white ">
      <div className="container mx-auto flex flex-col justify-between min-h-screen">
        <Navbar />
        <main>{props.children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
