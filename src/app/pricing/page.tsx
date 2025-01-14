import React from "react";

const PricingPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Pricing</h1>
        <p className="text-lg text-gray-600 mb-8">
          Choose a plan that suits your business needs. Transparent and flexible pricing.
        </p>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Basic</h2>
            <p className="text-gray-600 mb-6">Perfect for small businesses</p>
            <p className="text-4xl font-bold text-blue-600 mb-4">$10/month</p>
            <ul className="text-gray-600 mb-6 space-y-2">
              <li>✓ 5 Return Requests</li>
              <li>✓ Email Support</li>
              <li>✓ Basic Analytics</li>
            </ul>
            <button className="w-2/3 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
              Choose Plan
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Pro</h2>
            <p className="text-gray-600 mb-6">For growing businesses</p>
            <p className="text-4xl font-bold text-blue-600 mb-4">$25/month</p>
            <ul className="text-gray-600 mb-6 space-y-2">
              <li>✓ 50 Return Requests</li>
              <li>✓ Priority Email Support</li>
              <li>✓ Advanced Analytics</li>
            </ul>
            <button className="w-2/3 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
              Choose Plan
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Enterprise</h2>
            <p className="text-gray-600 mb-6">Custom solutions for enterprises</p>
            <p className="text-4xl font-bold text-blue-600 mb-4">Contact Us</p>
            <ul className="text-gray-600 mb-6 space-y-2">
              <li>✓ Unlimited Requests</li>
              <li>✓ Dedicated Support</li>
              <li>✓ Custom Integrations</li>
            </ul>
            <button className="w-2/3 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
