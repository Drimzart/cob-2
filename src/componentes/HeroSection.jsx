import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CalendarCheck, Star } from "lucide-react";

export default function HeroSection() {
  const [anos, setAnos] = useState(0);

  useEffect(() => {
    const end = new Date().getFullYear() - 1992;
    const duration = 1000;
    const stepTime = Math.max(10, Math.floor(duration / end));
    let current = 0;

    const timer = setInterval(() => {
      current += 1;
      setAnos(current);
      if (current >= end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-center px-6 md:px-20 pt-32 pb-20 bg-gradient-to-b from-white to-slate-100 overflow-hidden"
      aria-label="Seção principal com chamada da clínica"
    >
      {/* Linhas douradas como estrelas cadentes */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: -200, y: 400 }}
            animate={{ x: 1200, y: -200 }}
            transition={{
              duration: 6 + i * 0.5,
              delay: i * 1,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut"
            }}
            className="absolute w-32 h-[3px] bg-yellow-400 rounded-full opacity-30 rotate-[30deg] shadow-lg"
            style={{ bottom: `${i * 60}px`, left: `${i * -40}px` }}
          />
        ))}
      </div>

      {/* Texto */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-start text-left space-y-6 z-10"
      >
        <div className="flex gap-1 mb-2" aria-hidden="true">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={26} className="text-yellow-500 fill-yellow-500" />
          ))}
        </div>

        <h1 className="text-[#053f79] font-semibold text-4xl sm:text-5xl lg:text-6xl tracking-tight">
          COB Odontologia Integrada
        </h1>

        <h2 className="text-[#053f79] text-2xl sm:text-3xl lg:text-4xl font-[Playfair_Display] leading-snug tracking-tight">
          Há{" "}
          <span className="text-yellow-500 font-bold text-4xl sm:text-5xl animate-bounce drop-shadow-md">
            {anos}
          </span>{" "}
          anos transformando vidas através de sorrisos.
        </h2>

        <a
          href="https://wa.me/SEUNUMEROAQUI"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Agende sua consulta pelo WhatsApp"
        >
          <button className="flex items-center gap-2 px-8 py-3 rounded-full text-white font-semibold text-base shadow-lg bg-[#053f79] hover:bg-[#0d4c91] transition-transform hover:scale-105 backdrop-blur-md">
            <CalendarCheck size={20} />
            Agende sua consulta
          </button>
        </a>
      </motion.div>

      {/* Imagem principal */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full h-full flex justify-center items-center z-10"
      >
        <div className="bg-white border border-gray-300 shadow-2xl p-2 md:p-4 rounded-sm transform -rotate-3">
          <img
            src="/imagens/capa.png"
            alt="Casal de idosos sorrindo simbolizando bem-estar odontológico"
            className="w-full h-auto object-contain max-h-[90vh] rounded-sm"
            loading="lazy"
          />
        </div>
      </motion.div>
    </section>
  );
}