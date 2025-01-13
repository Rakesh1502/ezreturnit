import React from "react";
import StepIcon from "./StepIcon";

const AboutSection: React.FC = () => {
  return (
    <section className="bg-white-100 py-16">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center lg:space-x-8">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
          <img
            src="/images/about-us.jpg"
            alt="About Us"
            className="w-64 h-64 object-cover shadow-lg"
          />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
        {/* Step Icon */}
        <div className="mb-4">
                <StepIcon stepNumber={2}/>
            </div>
          <h2 className="text-3xl font-bold text-gray-800">Enter Adresses</h2>
          <p className="mt-4 text-gray-600">
            Enter sender and receipent Adresses
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
