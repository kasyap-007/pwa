import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const FourOFour = (props: Props) => {
  return (
    <div className="flex flex-col items-center gap-6">
      <h1 className="text-9xl font-bold">404</h1>
      <p className="text-2xl text-slate-300">Page not found</p>
      <Link
        to="/"
        className="text-base font-medium rounded px-2 py-1 bg-white text-slate-800"
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default FourOFour;
