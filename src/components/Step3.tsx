import React from "react";
import StepIcon from "../components/StepIcon"; // Adjust the path as per your folder structure

const Step3: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center lg:space-x-8">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          {/* Step Icon */}
          <div className="mb-4">
            <StepIcon stepNumber={3}/>
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Compare courier services</h2>
          <p className="mt-4 text-gray-600">
            Select your carrier , it's time to ship! Easyship will automatically compare Top courier services to find the best deal. Our intelligent selection tool will highlight the cheapest, fastest and best value option.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0">
          <img
            src="/images/mission.jpg"
            alt="Our Mission"
            className="w-64 h-64 object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Step3;
