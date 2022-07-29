import React from "react";
import { NavLink } from "react-router-dom";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="flex justify-between items-center">
      <NavLink className="flex items-center gap-2" to="/">
        <img
          src="/assets/icons/icon-384x384.png"
          className="w-10 h-10"
          alt="logo"
        />
        <h1 className="text-2xl font-medium">Explorer</h1>
      </NavLink>
      <div className="flex items-center gap-4 font-medium text-lg">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-white text-slate-800 px-2 py-1 rounded "
              : "px-2 py-1 rounded hover:outline"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-white text-slate-800 px-2 py-1 rounded "
              : "px-2 py-1 rounded hover:outline "
          }
          to="/mars"
        >
          Mars
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-white text-slate-800 px-2 py-1 rounded "
              : " px-2 py-1 rounded hover:outline"
          }
          to="/exoplanets"
        >
          Exoplanets
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
