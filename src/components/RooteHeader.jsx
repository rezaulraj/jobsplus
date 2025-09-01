import React, { useState } from "react";
import logo from "../assets/logo.png";

const RootHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {
      label: "Free CV Review",
      path: "/free-cv-review",
    },
    {
      label: "Login",
      path: "/login",
    },
    {
      label: "Sign Up",
      path: "/register",
    },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="/">
              <img
                className="h-8 w-auto md:h-10"
                src={logo}
                alt="Company Logo"
              />
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <a
              href="#"
              className="px-3 py-2 bg-[#19a31e] hover:bg-[#46B749] uppercase text-white rounded-md text-sm font-semibold font-source hover:text-white transition-colors duration-200"
            >
              Post Jobs
            </a>
            <a
              href="#"
              className="px-3 py-2 bg-[#3682FF] hover:bg-[#1f75ff] uppercase text-white rounded-md text-sm font-semibold font-source hover:text-white  transition-colors duration-200"
            >
              Hire a Freelancer
            </a>
            <a
              href="#"
              className="px-3 py-2 bg-[#202658] uppercase text-white rounded-md text-sm font-semibold font-source hover:text-white hover:bg-[#141a4e] transition-colors duration-200"
            >
              Employees
            </a>

            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.path}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-[#202658] hover:bg-gray-100 transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a
                href="#"
                className="block px-3 py-2 text-center bg-[#19a31e] hover:bg-[#46B749] uppercase text-white rounded-md text-sm font-semibold font-source hover:text-white transition-colors duration-200"
              >
                Post Jobs
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-center bg-[#3682FF] hover:bg-[#1f75ff] uppercase text-white rounded-md text-sm font-semibold font-source hover:text-white  transition-colors duration-200"
              >
                Hire a Freelancer
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-center bg-[#202658] uppercase text-white rounded-md text-sm font-semibold font-source hover:text-white hover:bg-[#141a4e] transition-colors duration-200"
              >
                Employees
              </a>

              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.path}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default RootHeader;
