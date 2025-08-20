"use client";
import { motion } from "framer-motion";
import { FaInstagram, FaYoutube, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-20 bg-black text-center"
    >
      <motion.h3
        className="text-2xl font-bold mb-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Connect with Me
      </motion.h3>
      <div className="flex justify-center gap-8 text-3xl">
        <a href="https://instagram.com/saishree_l" target="_blank"><FaInstagram /></a>
        <a href="https://youtube.com/@saishree_l" target="_blank"><FaYoutube /></a>
        <a href="mailto:saishree0312@gmail.com"><FaEnvelope /></a>
      </div>
      <p className="mt-4">Hubli, Karnataka</p>
    </section>
  );
}
