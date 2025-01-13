import React from "react";
import StepIcon from "./StepIcon";

const FeatureSection: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row-reverse items-center lg:space-x-8 lg:space-x-reverse">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
          <img
            src="/images/feature.jpg"
            alt="Returns & Refund"
            className="w-64 h-64 object-cover shadow-lg"
          />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
        {/* Step Icon */}
            <div className="mb-4">
                <StepIcon stepNumber={1}/>
            </div>
          <h2 className="text-2xl font-bold text-gray-800">
            Create Account to start generating labels
          </h2>
          <p className="mt-4 text-gray-600">
            We will process, catalog, store, and sell your returns fast.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
