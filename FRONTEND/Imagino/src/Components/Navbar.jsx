import React, { useContext, useState } from "react";
import { assets } from "../assets/assets.js";
import "./navbar.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext.jsx";
const Navbar = () => {
  const {user, setShowLogin, logout, credit,} = useContext(AppContext)
  const Navigate = useNavigate()
  return (
    <div className="mt-2 flex items-center justify-between">
      <Link to="/">
        <div className="flex items-end">
          <img src={assets.logo} alt="" className="w-18 sm:w-22 lg:w-10" />
          <span className="span">Imagino</span>
        </div>
      </Link>
      <div>
        {user ? (
          <div className="flex items-center gap-2 sm:gap-3 ">
            <button onClick={() => Navigate('/buy')} className="flex items-center gap-2 bg-blue-10 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition:all ease duration-700">
              <img className="w-5" src={assets.credit_star} alt="" />
              <p className="text-xs sm:text-sm font-md text-gray-600">Credites Left: {credit}</p>
            </button>
            <p className="text-gray-600 max-sm:hidden pl-4">Hi, {user.name}</p>
            <div className="relative group">
              <img src={assets.profile_icon} className="w-10 drop-shadow" alt="" />
              <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12">
                  <ul className="lint-null m-0 p-2 bg-white rounded-md border text-sm">
                    <li onClick={logout} className="py-1 px-2 cursor-pointer pr-6">LogOut</li>
                  </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2 sm:gap-8">
            <p onClick={() => Navigate('/buy')} className="cursor-pointer">Pricing</p>
            <button onClick={()=>setShowLogin(true)} className="bg-zinc-800 text-white py-2 px-7 sm:px-10 text-sm rounded-full">Login</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
