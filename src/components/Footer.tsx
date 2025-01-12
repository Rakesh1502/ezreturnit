import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h2 className="text-xl font-bold text-gray-800">EzReturnit</h2>
          <p className="text-gray-600 mt-4">
            Returns Made Simple Signup Today!
          </p>
          <ul className="mt-4 text-gray-600 space-y-2">
            <li>📞 800-742-1184</li>
            <li>📍 2910 Belmeade Dr Suite 116 Carrollton, TX 75006</li>
            <li>📧 info@ezreturnit.com</li>
          </ul>
        </div>

        {/* Links */}
        <div>
          <h2 className="text-xl font-bold text-gray-800">Links</h2>
          <ul className="mt-4 text-gray-600 space-y-2">
            <li>› Home</li>
            <li>› About Us</li>
            <li>› Contact</li>
            <li>› Return Policy</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-xl font-bold text-gray-800">Newsletter</h2>
          <p className="text-gray-600 mt-4">
            Subscribe to our newsletter for updates, information, and discounts.
          </p>
          <form className="mt-4">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-4"
            />
            <button
              className="w-full bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="bg-green-600 py-4 mt-8 text-center text-white">
        © 2025 EzReturnit. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
