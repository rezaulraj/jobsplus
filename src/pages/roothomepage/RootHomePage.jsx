import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import heroImage from "../../assets/home/banner_bg.webp";
import rightImage from "../../assets/home/bg-blue-main.webp";
import herologo from "../../assets/home/hero-logo.svg";

const RootHomePage = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gray-100">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="hidden lg:block absolute right-0 bottom-0 max-w-lg h-full z-10">
        <img
          src={rightImage}
          alt="Career professionals"
          className="w-full h-full object-contain"
          onError={() => console.error("Failed to load rightImage")}
          loading="lazy"
        />
        <div className="absolute bottom-6 right-1 flex flex-col items-center justify-center z-20">
          <a href="#" className="flex flex-col items-center text-center">
            <div className="w-36 h-36 bg-white rounded-full">
              <img
                src={herologo}
                alt="Hero Logo"
                className="w-36 h-36 object-contain"
                onError={() => console.error("Failed to load herologo")}
              />
            </div>
            <span className="text-lg text-gray-200 mt-1 font-lato">
              <span className="text-4xl font-bold">Earn Extra Income</span>{" "}
              <br />
              find a freelance side hustles
            </span>
          </a>
        </div>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setExpanded(false)}
            className="absolute inset-0 bg-black/50 z-20"
          ></motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-30 w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <AnimatePresence>
            {expanded && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                onClick={() => setExpanded(false)}
                className="absolute -top-20 right-2 text-white hover:text-red-400 border-2 border-white/50 rounded-full p-1.5 transition-all"
              >
                <AiOutlineClose size={24} />
              </motion.button>
            )}
          </AnimatePresence>
          {/* <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight text-center md:text-left">
            Find Your <span className="text-blue-400">Dream Career</span> Today
          </h1> */}
          <div className="flex flex-col md:flex-row gap-3 items-stretch">
            <input
              type="text"
              placeholder="Search jobs..."
              className="flex-1 px-4 py-3 bg-white/90 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              onFocus={() => setExpanded(true)}
            />
            <AnimatePresence>
              {expanded && (
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <select className="px-4 py-3 w-full sm:w-40 bg-white/90 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-lato">
                    <option value="">Select City</option>
                    <option value="dhaka">Dhaka</option>
                    <option value="chittagong">Chittagong</option>
                    <option value="khulna">Khulna</option>
                  </select>
                  <select className="px-4 py-3 w-full sm:w-40 bg-white/90 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-lato">
                    <option value="">Min Salary</option>
                    <option value="10000">10,000</option>
                    <option value="20000">20,000</option>
                    <option value="30000">30,000</option>
                  </select>
                </motion.div>
              )}
            </AnimatePresence>
            <button className="px-6 py-3 bg-blue-600 text-white font-semibold font-lato rounded-xl hover:bg-blue-700 transition-all">
              Search Jobs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RootHomePage;
