import React, { use } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const NavBar = () => {
    const {detail} = use(AuthContext);
    console.log(detail);
  return (
    <nav className="w-full fixed top-0 left-0 z-50 glass-nav">
      <div className="mx-auto max-w-[1440px] flex items-center justify-between py-4 px-6">
        {/* Left: Logo */}
        <div className="text-xl font-semibold text-white nav-title">
          HomeHero
        </div>

        {/* Middle: Navigation Links */}
        <ul className="hidden md:flex gap-10 text-white font-medium absolute left-1/2 -translate-x-1/2">
          <NavLink to='/' className="hover:text-purple-300 transition">Home</NavLink>
          <NavLink to='/services' className="hover:text-purple-300 transition">Services</NavLink>
          <NavLink to='/myservices' className="hover:text-purple-300 transition">My Services</NavLink>
          <NavLink to='addservices' className="hover:text-purple-300 transition">Add Services</NavLink>
          <NavLink to='mybookings' className="hover:text-purple-300 transition">My Bookings</NavLink>
          <NavLink to='/profile' className="hover:text-purple-300 transition">Profile</NavLink>
        </ul>

        {/* Right: Buttons */}
        <div className="flex items-center gap-4">
          <button className="px-5 py-2 rounded-full bg-white/10 border border-white/30 text-white font-semibold shadow-lg hover:bg-white/20 transition-all duration-300">
            Login
          </button>
          <button className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 to-purple-700 text-white font-semibold shadow-lg hover:from-purple-600 hover:to-purple-800 transition-all duration-300">
            Register
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
