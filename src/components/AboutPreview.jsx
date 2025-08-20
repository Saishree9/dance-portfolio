"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="py-20 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10">
      <motion.img
        src="/about.jpg"
        alt="Dance Journey"
        className="rounded-2xl shadow-lg w-full md:w-1/2"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />
      <motion.div
        className="md:w-1/2"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl font-bold mb-4">My Dance Journey</h3>
        <p className="mb-6">
          I began learning Bharatanatyam at the age of 5 under the guidance of
          my Guru Vidushi Lakshmi S Okade. Over the years, I have performed on
          various stages, exploring the beauty of rhythm, expression, and
          tradition...
        </p>
        <Link
          href="/about"
          className="bg-black px-6 py-2 rounded-lg shadow hover:bg-gray-800 transition"
        >
          Read More
        </Link>
      </motion.div>
    </section>
  );
}
