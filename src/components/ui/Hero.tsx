import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <header className="flex flex-col justify-center items-center gap-2 ">
      <img
        src="/assets/icons/icon-384x384.png"
        className="w-60 h-60 animate-pulse"
        alt="logo"
      />
      <h1 className="text-5xl font-medium">PWA demo</h1>
      <p className="text-2xl text-slate-300">
        A simple progressive web app demo
      </p>
    </header>
  );
};

export default Hero;
