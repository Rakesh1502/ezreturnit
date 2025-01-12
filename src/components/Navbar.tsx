import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">ezreturnit</Link>
        <ul className="flex space-x-6 text-gray-600 font-medium">
          <li>
            <Link href="/pricing" className="hover:text-green-600">Pricing</Link>
          </li>
          <li>
            <Link href="/calculator" className="hover:text-green-600">Shipping Calculator</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-green-600">About Us</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-green-600">Contact Us</Link>
          </li>
          <li>
            <Link href="/signin" className="hover:text-green-600">Sign In</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
