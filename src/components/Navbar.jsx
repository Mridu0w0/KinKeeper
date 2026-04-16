import React from 'react';
import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { RiTimeLine } from "react-icons/ri";
import { GoGraph } from "react-icons/go";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-md px-4 md:px-8">
      {/* LEFT SIDE: Logo & Mobile Menu */}
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
         <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

            <li><NavLink to="/"> <FaHome /> Home</NavLink></li>

            <li><NavLink to="/timeline"><RiTimeLine />TimeLine</NavLink></li>

            <li><NavLink to="/stats"> <GoGraph />Stats</NavLink></li>

          </ul>
        </div>
        
        <NavLink to="/">
          <img src={logo} alt="KinKeeper Logo" className="w-25 h-12" />
        </NavLink>
      </div>

      {/* RIGHT SIDE: Desktop Navigation */}
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium gap-2">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `rounded-lg px-4 py-2 transition-colors ${isActive ? "bg-green-800 text-white" : "hover:bg-gray-100"}`
              }
            >
             <FaHome className="text-lg" />  Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/timeline" 
              className={({ isActive }) => 
                `rounded-lg px-4 py-2 transition-colors ${isActive ? "bg-green-800 text-white" : "hover:bg-gray-100"}`
              }
            >
              <RiTimeLine className="text-lg" /> TimeLine
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/stats" 
              className={({ isActive }) => 
                `rounded-lg px-4 py-2 transition-colors ${isActive ? "bg-green-800 text-white" : "hover:bg-gray-100"}`
              }
            >
              <GoGraph className="text-lg" /> Stats
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;