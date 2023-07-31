import React from "react";
import logo from "../assets/hoangbaydev.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-lg">
        <div className="flex justify-between items-center py-4 sm:py-5">
          <div className="w-14 sm:w-20">
            {/* Hoang Bay Dev Logo */}
            <img src={logo} alt="Hoang Bay Dev" />
          </div>
          <div className="flex items-center space-x-5">
            {/* Facebook Link */}
            <a
              href="https://www.facebook.com/HoangBayDev/"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:bg-purple-400 hover:scale-90 transition-transform"
            >
              <FontAwesomeIcon icon={faFacebookF} className="text-2xl text-white" />
            </a>

            {/* Instagram Link */}
            <a
              href="https://www.instagram.com/hoangbaydev_/"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/10 hover:rotate-45 transition-all"
            >
              <FontAwesomeIcon icon={faInstagram} className="text-2xl text-white" />
            </a>

            {/* GitHub Link */}
            <a
              href="https://github.com/hoangbaydev"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:bg-purple-400 hover:scale-90 transition-transform"
            >
              <FontAwesomeIcon icon={faGithub} className="text-2xl text-white" />
            </a>

            {/* Button to view CV (Replace with the actual CV path) */}
            <a
              href="/path/to/cv.pdf" // Replace with the actual path to your CV PDF file
              target="_self"
              rel="noopener noreferrer"
              className="ml-5 bg-black/20 hover:bg-black/10 text-white/50 px-5 py-2 rounded-full"
            >
              View CV
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
