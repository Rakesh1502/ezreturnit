import React from "react";

const ContactUs: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        {/* Contact Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-700">
            <i className="fas fa-envelope"></i> Contact Us!
          </h1>
          <p className="text-gray-600 mt-2">
            Fill out the form below to receive a free and confidential initial consultation.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium">
                Name*
              </label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium">
                Email*
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Country */}
            <div>
              <label htmlFor="country" className="block text-gray-700 font-medium">
                Country
              </label>
              <select
                id="country"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>United Kingdom</option>
                <option>India</option>
              </select>
            </div>

            {/* Message */}
            <div className="col-span-1 md:col-span-2">
              <label htmlFor="message" className="block text-gray-700 font-medium">
                Message*
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            {/* Recaptcha */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="not-robot"
                  className="mr-2"
                />
                <label htmlFor="not-robot" className="text-gray-700 font-medium">
                  I'm not a robot
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="col-span-1 md:col-span-2 items-center">
              <button
                type="submit"
                className="w-half bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg"
              >
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>

        {/* Google Map */}
        <div className="mt-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1765400594716!2d-122.08568248487625!3d37.42206597982645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5e8ed79082b%3A0xc109e180b7f2c6d2!2sGoogleplex!5e0!3m2!1sen!2sin!4v1619482310187!5m2!1sen!2sin"
            width="100%"
            height="400"
            allowFullScreen
            loading="lazy"
            className="border-0 rounded-lg"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
