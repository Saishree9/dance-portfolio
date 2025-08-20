"use client";
import { motion } from "framer-motion";

const videos = [
  {
    id: "H58Z1zqP6RM",
    title: "Bharatanatyam Performance 1",
  },
  {
    id: "zcHPLnfCrS0?si",
    title: "Bharatanatyam Performance 2",
  },
  {
    id: "YmnTszcTJRY",
    title: "Bharatanatyam Performance 2",
  },
];

export default function VideoSection() {
  return (
    <section className="py-20 px-6 md:px-20">
      <h3 className="text-2xl font-bold mb-8 text-center">Dance Highlights</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
    </section>
  );
}
