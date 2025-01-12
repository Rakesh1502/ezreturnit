import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-100 via-green-100 to-blue-50 py-16 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800">Sell anywhere, return it here</h1>
        <p className="mt-4 text-gray-600 text-lg">Get up and running today!</p>
        <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
          Sign Up Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
