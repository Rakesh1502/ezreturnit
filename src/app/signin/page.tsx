import React from "react";

const SignIn: React.FC = () => {
  return (
    <section className="min-h-screen bg-gray-50 flex flex-col justify-center items-center py-12">
      <div className="w-full max-w-lg bg-white p-8 shadow-md rounded-md">
        <h1 className="text-3xl font-bold text-blue-600 flex items-center gap-2 mb-4">
          <span>➡</span> Sign In!
        </h1>
        <p className="text-gray-600 mb-6">Fill out the form below with your EzReturnit account credentials.</p>

        {/* Form Section */}
        <form className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-700 font-medium">Email</label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 rounded-md p-2 mt-1 focus:ring focus:ring-blue-200"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-gray-700 font-medium">Password</label>
            <input
              type="password"
              id="password"
              className="border border-gray-300 rounded-md p-2 mt-1 focus:ring focus:ring-blue-200"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* ReCaptcha */}
          <div className="mt-4">
            <div className="w-full bg-gray-100 p-3 border border-gray-300 rounded-md">
              <p className="text-sm text-gray-600">I'm not a robot</p>
              <p className="text-xs text-gray-400">[ReCAPTCHA Placeholder]</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-between items-center mt-6">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md"
            >
              Sign In
            </button>
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md"
            >
              Create Account
            </button>
          </div>
        </form>

        {/* Forgot Password */}
        <div className="mt-4 flex justify-end">
          <a
            href="#"
            className="text-sm text-blue-500 hover:underline flex items-center gap-1"
          >
            🔒 Forgot Password?
          </a>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
