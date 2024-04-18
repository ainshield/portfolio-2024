// Footer.js

import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import "./Footer.css"; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 footer"> {/* Add "footer" class here */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="mb-4 md:mb-0">
          <h4 className="text-lg font-semibold mb-2">Get in touch</h4>
          <p>Email: timothy.garcia033@gmail.com</p>
          <p>Phone: +63 949 682 8954</p>
          <p>Address: Bay, Laguna, PH</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">Connect</h4>
          <ul className="flex space-x-4">
            <li>
              <a
                href="https://twitter.com/example"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="text-xl icon" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/example"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-xl icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
