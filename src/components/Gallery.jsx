"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";

const images = [
  { src: "/perf1.jpg", title: "Temple Festival", desc: "Performed at Hubli Temple Festival." },
  { src: "/perf2.jpg", title: "Dance Fest", desc: "Solo at Karnataka Dance Festival." },
  { src: "/perf3.jpg", title: "Arangetram", desc: "My debut performance." },
  { src: "/perf4.jpg", title: "Stage Show", desc: "Group performance in Bangalore." },
  { src: "/perf5.jpg", title: "Workshop", desc: "Conducted Bharatanatyam workshop." },
  { src: "/perf6.jpg", title: "Cultural Night", desc: "Performed for cultural night event." },
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="performances" className="py-20 px-6 md:px-20 ">
      <h3 className="text-2xl font-bold mb-10 text-center">Performances</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer"
            onClick={() => setSelected(img)}
          >
            <img
              src={img.src}
              alt={img.title}
              className="rounded-xl shadow-md"
            />
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <motion.div
            className="bg-white rounded-xl shadow-lg max-w-lg w-full p-6 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 text-gray-700 hover:text-black text-2xl"
            >
              <FiX />
            </button>
            <img src={selected.src} alt={selected.title} className="rounded-lg mb-4" />
            <h4 className="text-xl font-bold mb-2">{selected.title}</h4>
            <p className="text-gray-700">{selected.desc}</p>
          </motion.div>
        </div>
      )}
    </section>
  );
}
