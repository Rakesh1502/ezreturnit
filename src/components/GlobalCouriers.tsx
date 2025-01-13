import React from "react";

const GlobalCouriers: React.FC = () => {
  const couriers = [
    { name: "UPS", logo: "/images/ups-logo.png" },
    { name: "USPS", logo: "/images/usps-logo.png" },
    { name: "FedEx", logo: "/images/fedex-logo.png" },
    { name: "DHL Express", logo: "/images/dhl-logo.png" },
  ];

  return (
    <section className="bg-blue-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          One Global Account, Every Major Courier
        </h2>
        <p className="text-gray-600 mb-12">
          Instantly access exclusive pre-negotiated rates on{" "}
          <span className="font-bold">550+ international and domestic services</span>—or link your
          own carrier business account to easily compare everything in one dashboard.
        </p>
        <div className="items-center grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {couriers.map((courier, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
            >
              <img
                src={courier.logo}
                alt={courier.name}
                className="w-20 h-20 object-contain mb-2"
              />
              <p className="text-gray-800 font-medium">{courier.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalCouriers;
