import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import freshImage from "../../assets/home/fresh-section.webp";

const FreshJob = () => {
  const [currentJobIndex, setCurrentJobIndex] = useState(0);

  const freshJobs = [
    {
      title: "Content Writer / Storyteller",
      company: "Easy tech",
      location: "Lahore, Pakistan",
    },
    {
      title: "Frontend Developer",
      company: "Tech Solutions Inc.",
      location: "Islamabad, Pakistan",
    },
    {
      title: "UX/UI Designer",
      company: "Creative Minds",
      location: "Karachi, Pakistan",
    },
    {
      title: "Data Analyst",
      company: "DataPro Analytics",
      location: "Rawalpindi, Pakistan",
    },
    {
      title: "Project Manager",
      company: "BuildIt Constructions",
      location: "Faisalabad, Pakistan",
    },
    {
      title: "Digital Marketing Specialist",
      company: "WebGrowth Agency",
      location: "Peshawar, Pakistan",
    },
    {
      title: "Mobile App Developer",
      company: "AppWorks Studio",
      location: "Lahore, Pakistan",
    },
    {
      title: "DevOps Engineer",
      company: "CloudTech Solutions",
      location: "Islamabad, Pakistan",
    },
    {
      title: "Sales Executive",
      company: "TradeLink Enterprises",
      location: "Karachi, Pakistan",
    },
    {
      title: "Customer Support Representative",
      company: "HelpDesk Pakistan",
      location: "Multan, Pakistan",
    },
    {
      title: "Network Administrator",
      company: "NetSecure Ltd",
      location: "Lahore, Pakistan",
    },
    {
      title: "Graphic Designer",
      company: "DesignHub Creative",
      location: "Islamabad, Pakistan",
    },
    {
      title: "Backend Developer",
      company: "ServerSide Technologies",
      location: "Karachi, Pakistan",
    },
    {
      title: "Quality Assurance Engineer",
      company: "BugFree Solutions",
      location: "Rawalpindi, Pakistan",
    },
    {
      title: "Business Analyst",
      company: "StrategyPlus Consultants",
      location: "Lahore, Pakistan",
    },
    {
      title: "HR Specialist",
      company: "TalentFind Recruiters",
      location: "Islamabad, Pakistan",
    },
    {
      title: "Content Marketing Manager",
      company: "BuzzContent Creators",
      location: "Karachi, Pakistan",
    },
    {
      title: "Full Stack Developer",
      company: "WebInnovate Labs",
      location: "Lahore, Pakistan",
    },
    {
      title: "SEO Specialist",
      company: "RankHigher Agency",
      location: "Islamabad, Pakistan",
    },
    {
      title: "Financial Analyst",
      company: "MoneyMatters Advisors",
      location: "Karachi, Pakistan",
    },
  ];

  const handlePrev = () => {
    setCurrentJobIndex((prevIndex) =>
      prevIndex === 0 ? freshJobs.length - 8 : prevIndex - 8
    );
  };

  const handleNext = () => {
    setCurrentJobIndex((prevIndex) => (prevIndex + 8) % freshJobs.length);
  };

  const visibleJobs = freshJobs.slice(currentJobIndex, currentJobIndex + 8);

  return (
    <div className="container mx-auto px-4 py-10 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        <a href="#" className="rounded-xl overflow-hidden shadow-md h-full">
          <img src={freshImage} alt="Fresh Jobs" className="w-full h-full" />
        </a>

        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-800">
              Featured Jobs in Pakistan
            </h2>
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 transition"
              >
                <IoIosArrowBack size={22} className="text-blue-600" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 transition"
              >
                <IoIosArrowForward size={22} className="text-blue-600" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-1 flex-grow">
            {visibleJobs.map((job, index) => (
              <a
                href="#"
                key={index}
                className="p-2 rounded-lg bg-gray-50 hover:bg-blue-50  transition duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-1 truncate">
                  {job.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {job.company}, {job.location}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default FreshJob;
