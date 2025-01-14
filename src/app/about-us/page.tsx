import React from "react";

const AboutPage: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        {/* Image Section */}
        <div className="w-full lg:w-3/4 mb-8">
          <img
            src="/images/about-us.jpg"
            alt="About Us"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-3/4">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-gray-600 leading-relaxed">
            Over the past 20 years, online orders have seen exponential growth.
            Everyone likes to order online because it’s simple, convenient, and, in some cases, cheaper. However, returns are not good for consumers and are profit killers for vendors. 
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            We process returns in a timely manner and work with you to sell, recycle, or ship them back to you. 
            Join us to see how EzReturnit can save you time, money, and headaches.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
