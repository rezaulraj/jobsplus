import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import heroImage from "../../assets/home/banner_bg.webp";
import rightImage from "../../assets/home/bg-blue-main.webp";

const RootHomePage = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative h-[70vh] overflow-hidden flex items-center justify-center">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      <img
        src={rightImage}
        alt="Career professionals"
        className="absolute right-0 bottom-0 h-full object-contain z-10"
      />

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

      <div className="relative z-30 w-full max-w-4xl px-4">
        <div className="relative">
          <AnimatePresence>
            {expanded && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                onClick={() => setExpanded(false)}
                className="absolute -top-20 right-3 text-gray-300 hover:text-red-500 border-2 rounded-full p-1"
              >
                <AiOutlineClose size={22} />
              </motion.button>
            )}
          </AnimatePresence>
          {/* <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
            Find Your Dream <span className="text-blue-400">Career</span> Today
          </h1> */}
          <div className="flex flex-col md:flex-row gap-3 items-stretch">
            <input
              type="text"
              placeholder="Search jobs..."
              className="flex-1 px-4 py-2 bg-gray-100 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500"
              onFocus={() => setExpanded(true)}
            />

            <AnimatePresence>
              {expanded && (
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.4 }}
                  className="md:flex gap-3 overflow-hidden"
                >
                  <select className="px-4 py-2 w-full md:w-fit rounded-xl bg-gray-100 border focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Select City</option>
                    <option value="dhaka">Dhaka</option>
                    <option value="chittagong">Chittagong</option>
                    <option value="khulna">Khulna</option>
                  </select>

                  <select className="px-4 py-2 w-full md:w-fit rounded-xl bg-gray-100 border focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Min Salary</option>
                    <option value="10000">10,000</option>
                    <option value="20000">20,000</option>
                    <option value="30000">30,000</option>
                  </select>
                </motion.div>
              )}
            </AnimatePresence>

            <button className="px-6 py-2 bg-[#1D67BD] text-white font-semibold rounded-xl hover:bg-[#125eb6] transition">
              Search Jobs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RootHomePage;
