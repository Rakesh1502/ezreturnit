import React from 'react'
import StepIcon from './StepIcon';

const Step4: React.FC = () => {
    return (
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center lg:space-x-8">
            {/* Image Section */}
            <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
            
              <img
                src="/images/values.jpg"
                alt="Our Values"
                className="w-64 h-64 object-cover shadow-lg"
              />
            </div>
    
            {/* Text Section */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
            {/* Step Icon */}
            <div className="mb-4">
                <StepIcon stepNumber={4}/>
            </div>
              <h2 className="text-3xl font-bold text-gray-800">Buy and print labels</h2>
              <p className="mt-4 text-gray-600">
                So you've found the cheapest shipping label, fastest delivery time or best tracking quality—now what? Simply select your preferred carrier, add shipping insurance (optional) and pay for the label to generate and print all shipping documents.
              </p>
            </div>
          </div>
        </section>
      );
}

export default Step4