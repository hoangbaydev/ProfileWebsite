import React from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquareText } from "react-icons/bs";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div className="w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-around items-center text-2xl text-white/50">
          <Link
            to="home"
            className="cursor-pointer w-14 h-14 flex items-center justify-center transform transition-transform hover:scale-110"
          >
            <BiHomeAlt />
          </Link>
          <Link
            to="about"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-14 h-14 flex items-center justify-center transform transition-transform hover:scale-110"
          >
            <BiUser />
          </Link>
          <Link
            to="works"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-14 h-14 flex items-center justify-center transform transition-transform hover:scale-110"
          >
            <BsBriefcase />
          </Link>
          <Link
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-14 h-14 flex items-center justify-center transform transition-transform hover:scale-110"
          >
            <BsChatSquareText />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
