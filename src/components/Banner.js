import React from "react";
// images
import Image from "../assets/hoangbaydev.jpg";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section className="section" id="home">
      <div className="container mx-auto py-20 px-6 lg:px-8 max-w-screen-lg">
        <div className="flex flex-col items-center text-center">
          {/* image */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="mt-10"
          >
            <img
              src={Image}
              alt="Avatar"
              className="rounded-full w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 border-4 border-accent"
            />
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mt-8"
          >
            <strong>Hoang Bay Dev</strong>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg sm:text-xl text-gray-600 mt-4"
          >
            I'm a{" "}
            <span className="font-bold text-accent animate-pulse">
              Mobile Developer
            </span>{" "}
            <span>from Vietnam.</span>
          </motion.p>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex mt-8 space-x-6"
          >
            {/* Add your social icons here */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
