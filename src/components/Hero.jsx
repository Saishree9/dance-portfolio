"use client";
import { motion } from "framer-motion";
import { FaInstagram, FaYoutube, FaGithub } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative lg:h-screen py-32 flex items-center justify-center text-center">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/sample-hero.mp4" type="video/mp4" />
      </video>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/profile.jpg"
          alt="Saishree"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-[#faebd7] mb-4 shadow-lg"
        />
        <h2 className="text-3xl md:text-5xl font-bold mb-2">
          Bharatanatyam Dancer
        </h2>
        <p className="text-base md:text-lg italic mb-6">
          Disciple of Vidushi Lakshmi S Okade
        </p>

        {/* Social Media Links */}
        <div className="flex space-x-6 text-[#faebd7] text-2xl">
          <a
            href="https://www.instagram.com/saishree_l"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://youtube.com/@saishree_l"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300"
          >
            <FaYoutube />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300"
          >
            <FaGithub />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
