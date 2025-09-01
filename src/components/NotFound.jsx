import React from "react";
import { Link } from "react-router-dom";
import { FiHome, FiSearch, FiArrowLeft, FiMail } from "react-icons/fi";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full space-y-8 text-center">
        {/* Animated 404 */}
        <div className="relative">
          <h1 className="text-9xl font-bold text-gray-800 opacity-10">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-float">
              <svg
                className="w-48 h-48 text-indigo-500"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M69.8,-23.6C81.9,6.1,79.2,43,59.4,60.9C39.6,78.8,2.7,77.7,-19.8,64.8C-42.3,51.9,-51.5,27.3,-48.5,5.4C-45.5,-16.5,-30.3,-35.7,-8.7,-42.8C12.8,-50,38.7,-45.1,69.8,-23.6Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Content */}
        <div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Lost in Space
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Oops! The page you're looking for seems to have drifted off into the
            digital cosmos.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 transform hover:-translate-y-1"
          >
            <FiHome className="mr-2" />
            Go Home
          </Link>

          <Link
            to="/search"
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
          >
            <FiSearch className="mr-2" />
            Search
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
          >
            <FiArrowLeft className="mr-2" />
            Go Back
          </button>
        </div>

        {/* Additional Help */}
        <div className="pt-8">
          <p className="text-sm text-gray-500">
            Still lost?{" "}
            <a
              href="mailto:support@example.com"
              className="font-medium text-indigo-600 hover:text-indigo-500 inline-flex items-center"
            >
              <FiMail className="mr-1" /> Contact support
            </a>
          </p>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-8 left-8 opacity-10">
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            className="text-indigo-300"
          >
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="currentColor"
              strokeWidth="8"
              fill="none"
            />
          </svg>
        </div>

        <div className="absolute top-8 right-8 opacity-10">
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            className="text-indigo-300"
          >
            <circle
              cx="40"
              cy="40"
              r="30"
              stroke="currentColor"
              strokeWidth="6"
              fill="none"
            />
          </svg>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default NotFound;
