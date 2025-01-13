import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo Section */}
        <div className="text-2xl font-bold text-gray-800">
          ezreturnit
        </div>

        {/* Links Section */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-800 hover:text-blue-600 transition">
            Pricing
          </a>
          <a href="#" className="text-gray-800 hover:text-blue-600 transition">
            Shipping Calculator
          </a>
          <a href="#" className="text-gray-800 hover:text-blue-600 transition">
            About Us
          </a>
          <a href="#" className="text-gray-800 hover:text-blue-600 transition">
            Contact Us
          </a>
          <a href="#" className="text-gray-800 hover:text-blue-600 transition">
            Sign In
          </a>
        </div>

        {/* Button Section */}
        <div className="flex items-center space-x-4 mt-2 mb-2">
          <a
            href="#"
            className="hidden md:inline-block px-6 py-2 bg-blue-600 text-white text-sm font-bold rounded-lg shadow hover:bg-blue-700 transition"
          >
            START FREE
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
