import React, { useState } from 'react';
import logo from '../../assets/Logo.png';
import { FaSearch, FaWallet } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="max-w-[1410px] mx-auto px-5">
      <div className="flex justify-between items-center">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className={`sm:flex ${isMenuOpen ? 'hidden' : 'hidden'}`}>
          <ul className="flex flex-col sm:flex-row gap-5 text-white">
            <li>Home</li>
            <li>Explore</li>
            <li>Activity</li>
            <li>Community</li>
            <li>Page</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex items-center text-white gap-5 sm:gap-3">
          <FaSearch />
          <button className="flex items-center gap-3 text-white border-2 border-white p-2 rounded-3xl">
            <FaWallet /> Wallet Connect
          </button>
        </div>
        <div className="sm:hidden">
          {/* Mobile menu button */}
          <button
            type="button"
            className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            onClick={toggleMenu}
          >
            {/* Hamburger menu icon */}
            <svg
              className={`h-6 w-6 ${isMenuOpen ? 'hidden' : 'block'}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 12h18M3 6h18M3 18h18"></path>
            </svg>
            {/* Close menu icon */}
            <svg
              className={`h-6 w-6 ${isMenuOpen ? 'block' : 'hidden'}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`sm:hidden ${isMenuOpen ? 'block bg-[#5228E2] w-32 p-5 rounded-lg absolute z-10' : 'hidden'}`}>
        <ul className="flex flex-col text-white gap-3">
          <li>Home</li>
          <li>Explore</li>
          <li>Activity</li>
          <li>Community</li>
          <li>Page</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
