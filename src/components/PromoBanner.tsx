import React from "react";

const PromoBanner: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-lg py-12 px-8 ml-20 mr-20 mb-10">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 ml-10">
            Ready to save on all your shipping?
          </h2>
          <p className="mb-6 ml-10">
            Try for free. Everybody loves free.
          </p>
          <button className="bg-white text-blue-900 font-bold ml-10 py-2 px-6 rounded-lg hover:bg-gray-100 transition">
            Start Free Plan
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
          <img
            src="/images/shipping-boxes.png"
            alt="Shipping Boxes"
            className="max-w-md lg:max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
