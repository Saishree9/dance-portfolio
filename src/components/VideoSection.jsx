"use client";
import { motion } from "framer-motion";

const videos = [
  {
    id: "H58Z1zqP6RM", // correct
    title: "Bharatanatyam Performance 1",
  },
  {
    id: "zcHPLnfCrS0", // removed ?si
    title: "Bharatanatyam Performance 2",
  },
  {
    id: "YmnTszcTJRY", // correct
    title: "Bharatanatyam Performance 3",
  },
];

const inspirations = [
  {
    name: "Vidushi Lakshmi S Okade",
    role: "My Guru & Mentor",
    img: "/guru.jpg", // put in /public folder
  },
  {
    name: "Rukmini Devi Arundale",
    role: "Pioneer of Modern Bharatanatyam",
    img: "/rukmini.jpg",
  },
  {
    name: "Alarmel Valli",
    role: "Renowned Bharatanatyam Exponent",
    img: "/valliji.jpg",
  },
];

export default function VideoSection() {
  return (
    <section className="py-20 px-6 md:px-20">
      <h3 className="text-2xl font-bold mb-8 text-center">Dance Highlights</h3>

      {/* Videos Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {videos.map((video, i) => (
          <motion.div
            key={i}
            className="aspect-video rounded-xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <iframe
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </motion.div>
        ))}
      </div>

      {/* Inspirations Section */}
      <div>
        <h3 className="text-2xl font-bold mb-8 text-center">My Inspiration</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {inspirations.map((person, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center text-center p-6 bg-white/5 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <img
                src={person.img}
                alt={person.name}
                className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-[#faebd7]"
              />
              <h4 className="text-lg font-semibold">{person.name}</h4>
              <p className="text-sm text-gray-300">{person.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
