import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaMobile,
  FaWhatsapp,
  FaGoogle,
  FaLock,
} from "react-icons/fa";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    confirmEmail: "",
    mobileCode: "+92",
    mobileNumber: "",
    whatsappAlerts: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center py-8 px-4">
      <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 w-full max-w-xl">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-[#4688F1] mb-2">
            Create a Jobs Plus CV
          </h1>
          <p className="text-gray-600">Create your account to get started</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaUser className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                required
              />
            </div>
          </div>

          <div className="relative">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaEnvelope className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                required
              />
            </div>
          </div>

          <div className="relative">
            <label
              htmlFor="confirmEmail"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Re-type Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                id="confirmEmail"
                name="confirmEmail"
                placeholder="Re-type Email Address"
                value={formData.confirmEmail}
                onChange={handleChange}
                className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                required
              />
            </div>
          </div>

          <div className="relative">
            <label
              htmlFor="mobileNumber"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Mobile Number
            </label>
            <div className="flex space-x-2">
              <div className="relative w-1/4">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaMobile className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="mobileCode"
                  name="mobileCode"
                  value={formData.mobileCode}
                  onChange={handleChange}
                  className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                  readOnly
                />
              </div>
              <div className="relative w-3/4">
                <input
                  type="tel"
                  id="mobileNumber"
                  name="mobileNumber"
                  placeholder="Mobile Number"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                  required
                />
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="whatsappAlerts"
              name="whatsappAlerts"
              checked={formData.whatsappAlerts}
              onChange={handleChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label
              htmlFor="whatsappAlerts"
              className="ml-2 block text-sm text-gray-700 flex items-center"
            >
              <FaWhatsapp className="h-5 w-5 text-green-500 mr-1" />
              Receive highly matched job alerts on WhatsApp
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-[#4688F1] text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-500 transition duration-300 transform hover:-translate-y-1 cursor-pointer"
          >
            Create Account
          </button>
        </form>

        <div className="my-6 flex items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink mx-4 text-gray-500">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <button className="w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-semibold hover:bg-gray-50 transition duration-300 flex items-center justify-center cursor-pointer">
          <FaGoogle className="h-5 w-5 text-red-500 mr-2" />
          Sign in with Google
        </button>

        <div className="text-center mt-6">
          <p className="text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-blue-600 font-semibold hover:underline">
              Login
            </a>
          </p>
        </div>

        <div className="mt-6 p-4 bg-gray-100 rounded-lg">
          <p className="text-xs text-gray-500 text-center">
            By signing up to your account, you agree to Rozee's Terms of
            Services and consent to our Cookie Policy and Privacy Policy, and
            agree to be contacted by employers via Rozee. You also consent to
            receiving marketing messages from Rozee and may opt out from
            receiving such messages by following the unsubscribe link in our
            messages, or as detailed in our terms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
