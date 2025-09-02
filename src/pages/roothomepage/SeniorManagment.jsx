import React, { useState, useRef, useEffect } from "react";
import companyLogo from "../../assets/home/seniorcom.jpg";

const SeniorManagment = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const [showArrows, setShowArrows] = useState(false);

  const seniorJobs = [
    {
      image: companyLogo,
      title: "Software Development Manager",
      companyname: "Contour Software",
    },
    {
      image: companyLogo,
      title: "Senior Project Manager",
      companyname: "Systems Limited",
    },
    {
      image: companyLogo,
      title: "IT Director",
      companyname: "Techlogix",
    },
    {
      image: companyLogo,
      title: "Chief Technology Officer",
      companyname: "Avanza Solutions",
    },
    {
      image: companyLogo,
      title: "Operations Director",
      companyname: "Netsol Technologies",
    },
    {
      image: companyLogo,
      title: "Finance Director",
      companyname: "TPL Corp",
    },
  ];

  const checkArrows = () => {
    if (containerRef.current) {
      const { scrollWidth, clientWidth } = containerRef.current;
      setShowArrows(scrollWidth > clientWidth);
    }
  };

  useEffect(() => {
    checkArrows();
    window.addEventListener("resize", checkArrows);
    return () => window.removeEventListener("resize", checkArrows);
  }, []);

  const nextSlide = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      const itemWidth = container.scrollWidth / seniorJobs.length;
      const maxScroll = container.scrollWidth - container.clientWidth;

      const newScrollPosition = Math.min(
        container.scrollLeft + itemWidth * 2,
        maxScroll
      );

      container.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  const prevSlide = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      const itemWidth = container.scrollWidth / seniorJobs.length;

      const newScrollPosition = Math.max(
        container.scrollLeft - itemWidth * 2,
        0
      );

      container.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <div className="flex-grow text-center">
            <h2 className="text-2xl font-bold text-gray-700">
              Senior Management Jobs
            </h2>
          </div>
          <div className="flex-shrink-0">
            <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
              View All &rarr;
            </button>
          </div>
        </div>

        <div className="relative">
          {showArrows && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 bg-white rounded-full p-3 shadow-md hover:shadow-lg transition-shadow z-10"
                aria-label="Previous jobs"
              >
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 bg-white rounded-full p-3 shadow-md hover:shadow-lg transition-shadow z-10"
                aria-label="Next jobs"
              >
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </>
          )}

          <div
            ref={containerRef}
            className="flex overflow-x-hidden scroll-smooth gap-2 py-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <style>{`
              .flex::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            {seniorJobs.map((job, index) => (
              <div
                key={index}
                className="w-56 flex-shrink-0 shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300 rounded-lg"
              >
                {/* Fixed height container for uniform images */}
                <div className="w-full bg-gray-200 overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={job.image}
                    alt={job.companyname}
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-[15px] font-semibold text-gray-900 mb-1 line-clamp-1">
                    {job.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{job.companyname}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeniorManagment;
