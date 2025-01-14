import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section relative bg-gradient-to-b from-[#E7F6FA] to-[#F8FBFC] py-16">
      <div className="container mx-auto text-center px-6">
        {/* Small badge at the top */}
        <div className="inline-block bg-white shadow-lg px-6 py-2 rounded-full mb-6">
          <p className="text-sm font-medium text-gray-700">
            <span className="font-bold text-green-500">✓</span> Sign-up and Ship in minutes
          </p>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          How the World’s Top eCommerce Brands Save on Shipping
        </h1>

        {/* Description */}
        <p className="text-base text-gray-700 mb-6 leading-relaxed">
          Ezshipit combines the global scale of 550+ courier services, with the buying power of our community of
          <span className="font-semibold"> 100,000+ eCommerce sellers</span>—delivering exclusive volume discounts for everyone.
        </p>

        {/* Features Section */}
        <div className="flex justify-center items-center space-x-6 text-gray-700 text-sm">
          <div className="flex items-center space-x-1">
            <span className="text-green-500 font-bold">✓</span>
            <span>Sign-up and get started for free</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-green-500 font-bold">✓</span>
            <span>Save up to 50% on shipping labels</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-green-500 font-bold">✓</span>
            <span>One global account for every courier</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
