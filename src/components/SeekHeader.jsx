import React, { useState, useRef, useEffect } from "react";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaEnvelope,
  FaFileAlt,
  FaShoppingBag,
  FaSearch,
  FaCog,
  FaKey,
  FaSignOutAlt,
  FaChevronDown,
  FaChevronUp,
  FaTimes,
  FaBars,
} from "react-icons/fa";
import logo from "../assets/logo.png";
const SeekHeader = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const searchRef = useRef(null);
  const profileRef = useRef(null);
  const mobileNavRef = useRef(null);

  const navItems = [
    {
      label: "Dashboard",
      path: "/dashboard",
      icon: <FaHome className="h-5 w-5" />,
    },
    {
      label: "Profile",
      path: "/profile",
      icon: <FaUser className="h-5 w-5" />,
    },
    {
      label: "Jobs",
      icon: <FaBriefcase className="h-5 w-5" />,
      subNav: [
        {
          label: "My Job Applications",
          path: "/my-job-apply",
          icon: <FaFileAlt className="h-4 w-4" />,
        },
        {
          label: "My Alerts",
          path: "/my-alerts",
          icon: <FaEnvelope className="h-4 w-4" />,
        },
        {
          label: "Saved Jobs",
          path: "/saved-jobs",
          icon: <FaBriefcase className="h-4 w-4" />,
        },
      ],
    },
    {
      label: "Message",
      path: "/message",
      icon: <FaEnvelope className="h-5 w-5" />,
    },
    {
      label: "CV Manager",
      path: "/cv-manager",
      icon: <FaFileAlt className="h-5 w-5" />,
    },
    {
      label: "Products",
      icon: <FaShoppingBag className="h-5 w-5" />,
      subNav: [
        {
          label: "CV Written Service",
          path: "/cv-writing",
          icon: <FaFileAlt className="h-4 w-4" />,
        },
        {
          label: "Career Coaching",
          path: "/career-coaching",
          icon: <FaUser className="h-4 w-4" />,
        },
        {
          label: "Interview Preparation",
          path: "/interview-prep",
          icon: <FaBriefcase className="h-4 w-4" />,
        },
      ],
    },
  ];

  const userData = {
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    role: "Software Developer",
  };

  const sampleSuggestions = [
    "Frontend Developer",
    "Remote Jobs",
    "React Jobs",
    "UX Designer",
    "Product Manager",
  ];

  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setTimeout(() => {
        searchRef.current?.focus();
      }, 300);
    }
  };

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (value.length > 1) {
      const filtered = sampleSuggestions.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
      if (
        mobileNavRef.current &&
        !mobileNavRef.current.contains(event.target) &&
        !event.target.closest(".mobile-nav-toggle")
      ) {
        setIsMobileNavOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg">
      <div
        className={`fixed top-0 left-0 w-full bg-white shadow-md transform transition-all duration-500 ease-in-out z-50 ${
          isSearchOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-6xl mx-auto p-4">
          <div className="flex items-center border-b-2 border-blue-500 pb-2">
            <input
              ref={searchRef}
              type="text"
              placeholder="Search for jobs, companies, or keywords..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="flex-grow p-2 text-lg focus:outline-none"
            />
            <button
              className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
              onClick={toggleSearch}
            >
              <FaTimes className="h-6 w-6" />
            </button>
          </div>
          {suggestions.length > 0 && (
            <div className="mt-4 bg-white rounded-md shadow-lg overflow-hidden">
              {suggestions.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center p-3 hover:bg-blue-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                >
                  <FaSearch className="h-4 w-4 text-gray-400 mr-3" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex-shrink-0">
          <a href="/">
            <img src={logo} alt="Seek Logo" className="h-8 w-auto md:h-10" />
          </a>
        </div>

        <nav className="hidden md:flex space-x-1 h-full">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="relative h-full group"
              onMouseEnter={() => item.subNav && setActiveDropdown(index)}
              onMouseLeave={() => item.subNav && setActiveDropdown(null)}
            >
              <div
                className={`flex items-center h-full px-4 cursor-pointer transition-colors ${
                  activeDropdown === index
                    ? "bg-gray-100 text-[#1F75FF]"
                    : "text-[#1E2558] hover:bg-gray-100 hover:text-text-[#1F75FF] "
                }`}
                onClick={() => item.subNav && toggleDropdown(index)}
              >
                <span className="mr-2">{item.icon}</span>
                <span className="text-[#1E2558]">{item.label}</span>
                {item.subNav &&
                  (activeDropdown === index ? (
                    <FaChevronUp className="ml-2 h-3 w-3" />
                  ) : (
                    <FaChevronDown className="ml-2 h-3 w-3" />
                  ))}
              </div>

              {item.subNav && activeDropdown === index && (
                <div className="absolute left-0 mt-0 w-56 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
                  {item.subNav.map((subItem, subIndex) => (
                    <a
                      key={subIndex}
                      href={subItem.path}
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      <span className="mr-3 text-gray-400">{subItem.icon}</span>
                      <span>{subItem.label}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <button
            className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
            onClick={toggleSearch}
          >
            <FaSearch className="h-5 w-5" />
          </button>

          <div className="relative" ref={profileRef}>
            <button
              className="flex items-center focus:outline-none"
              onClick={toggleProfile}
            >
              <img
                src={userData.avatar}
                alt="Profile"
                className="h-8 w-8 rounded-full object-cover border-2 border-gray-300 hover:border-blue-500 transition-colors"
              />
            </button>

            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
                <div className="px-4 py-2 border-b border-gray-100">
                  <div className="font-medium text-gray-800">
                    {userData.name}
                  </div>
                  <div className="text-sm text-gray-500">{userData.role}</div>
                </div>
                <a
                  href="/profile"
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                >
                  <FaUser className="h-4 w-4 mr-3 text-gray-400" />
                  <span>View Profile</span>
                </a>
                <a
                  href="/change-password"
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                >
                  <FaKey className="h-4 w-4 mr-3 text-gray-400" />
                  <span>Change Password</span>
                </a>
                <a
                  href="/settings"
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                >
                  <FaCog className="h-4 w-4 mr-3 text-gray-400" />
                  <span>Account Settings</span>
                </a>
                <div className="border-t border-gray-100 my-1"></div>
                <a
                  href="/logout"
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                >
                  <FaSignOutAlt className="h-4 w-4 mr-3 text-gray-400" />
                  <span>Logout</span>
                </a>
              </div>
            )}
          </div>

          <button
            className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors mobile-nav-toggle"
            onClick={toggleMobileNav}
          >
            <FaBars className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div
        ref={mobileNavRef}
        className={`md:hidden fixed top-16 left-0 w-full h-[calc(100vh-4rem)] bg-white transform transition-transform duration-300 ease-in-out z-40 overflow-y-auto ${
          isMobileNavOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="px-4 py-2">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="border-b border-gray-200 last:border-b-0"
            >
              {item.subNav ? (
                <>
                  <button
                    className="flex items-center w-full py-4 text-gray-700 hover:text-blue-600"
                    onClick={() => toggleDropdown(index)}
                  >
                    <span className="mr-3">{item.icon}</span>
                    <span className="flex-grow text-left">{item.label}</span>
                    {activeDropdown === index ? (
                      <FaChevronUp className="h-3 w-3" />
                    ) : (
                      <FaChevronDown className="h-3 w-3" />
                    )}
                  </button>
                  <div
                    className={`pl-8 overflow-hidden transition-all duration-300 ${
                      activeDropdown === index ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    {item.subNav.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subItem.path}
                        className="flex items-center py-3 text-gray-600 hover:text-blue-600"
                        onClick={() => setIsMobileNavOpen(false)}
                      >
                        <span className="mr-3">{subItem.icon}</span>
                        <span>{subItem.label}</span>
                      </a>
                    ))}
                  </div>
                </>
              ) : (
                <a
                  href={item.path}
                  className="flex items-center py-4 text-gray-700 hover:text-blue-600"
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  <span className="mr-3">{item.icon}</span>
                  <span>{item.label}</span>
                </a>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default SeekHeader;
