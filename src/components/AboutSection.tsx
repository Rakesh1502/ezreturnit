import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Who are we?</h2>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          We help online retailers warehouse and process returns. Your items are shipped to one of our locations where
          we open, inspect them, catalog them, and ultimately re-sell them for you.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
