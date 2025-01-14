import React from "react";

const ShippingCalculator: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-blue-600 text-center mb-4">
          Calculate Shipping
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Check and compare US Postal Service postage rates for domestic shipping with this online calculator.
        </p>
        <form className="bg-white shadow-md rounded-lg p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Dropdown and Signature */}
            <div>
              <label htmlFor="country" className="block text-gray-700 font-medium">
                Country
              </label>
              <select
                id="country"
                className="mt-2 block w-full p-3 border border-gray-300 rounded-lg"
              >
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="UK">United Kingdom</option>
              </select>
            </div>
            <div>
              <span className="block text-gray-700 font-medium">Signature Required</span>
              <div className="mt-2 flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="signature"
                    value="yes"
                    className="form-radio text-blue-600"
                  />
                  <span className="ml-2">Yes</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="signature"
                    value="no"
                    defaultChecked
                    className="form-radio text-blue-600"
                  />
                  <span className="ml-2">No</span>
                </label>
              </div>
            </div>

            {/* From Zip Code */}
            <div>
              <label htmlFor="fromZip" className="block text-gray-700 font-medium">
                From Zip Code
              </label>
              <input
                type="text"
                id="fromZip"
                className="mt-2 block w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter From Zip Code"
              />
            </div>

            {/* To Zip Code */}
            <div>
              <label htmlFor="toZip" className="block text-gray-700 font-medium">
                To Zip Code
              </label>
              <input
                type="text"
                id="toZip"
                className="mt-2 block w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter To Zip Code"
              />
            </div>

            {/* Weight Fields */}
            <div>
              <label htmlFor="weightLbs" className="block text-gray-700 font-medium">
                Weight (lbs)
              </label>
              <input
                type="number"
                id="weightLbs"
                className="mt-2 block w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter Weight in Pounds"
              />
            </div>
            <div>
              <label htmlFor="weightOz" className="block text-gray-700 font-medium">
                Weight (oz)
              </label>
              <input
                type="number"
                id="weightOz"
                className="mt-2 block w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter Weight in Ounces"
              />
            </div>

            {/* Dimensions */}
            <div>
              <label htmlFor="length" className="block text-gray-700 font-medium">
                Length (inches)
              </label>
              <input
                type="number"
                id="length"
                className="mt-2 block w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter Length"
              />
            </div>
            <div>
              <label htmlFor="width" className="block text-gray-700 font-medium">
                Width (inches)
              </label>
              <input
                type="number"
                id="width"
                className="mt-2 block w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter Width"
              />
            </div>
            <div>
              <label htmlFor="height" className="block text-gray-700 font-medium">
                Height (inches)
              </label>
              <input
                type="number"
                id="height"
                className="mt-2 block w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter Height"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center mt-8">
            <button
              type="submit"
              className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
            >
              Calculate
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ShippingCalculator;
