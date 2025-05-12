import { motion } from "framer-motion";
import { Star } from "lucide-react";

const especialidades = [
  "Ortodontia",
  "Implantodontia",
  "Prótese",
  "Endodontia",
  "Radiologia",
  "Estética",
  "Periodontia"
];

export default function Especialidades() {
  return (
    <section id="especialidades" className="bg-[#e8f1fa] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-[#053f79] mb-16 font-serif"
        >
          Nossas Especialidades
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {especialidades.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow"
            >
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="stroke-yellow-400 fill-transparent"
                  />
                ))}
              </div>
              <h3 className="text-xl font-semibold text-[#053f79]">{item}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
