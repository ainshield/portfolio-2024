import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";

const Navbar = () => {
  const downloadResume = () => {
    // Replace 'https://example.com' with the URL you want to open
    window.open(
      "https://drive.google.com/uc?export=download&id=172jG3dQW4_4Vm3IgAFjwk6vwHm3owGXO",
      "_blank"
    );
  };
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarHeight = 64; // Adjust this value according to your navbar height
  const navbarClasses = `fixed top-0 w-full z-50 transition duration-500 ${
    scrollY > 0 ? "bg-white shadow-md" : "bg-transparent"
  }`;

  return (
    <nav className={navbarClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Your navbar content goes here */}
          <a href="#" className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              {/* Your logo or brand */}
              <h1 className="brand">TIMOTHY</h1>
              <h1 className="brand-outline">GARCIA</h1>
            </div>
          </a>
          <div className="flex items-center">
            {/* Your navbar links */}
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <a
                  href="#about"
                  className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                >
                  About
                </a>
                <a
                  href="#projects"
                  className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                >
                  Projects
                </a>
                <button
                  onClick={downloadResume}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-md"
                  style={{ fontFamily: "Inter", fontWeight: 300 }}
                >
                  Download Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
