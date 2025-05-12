import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CalendarCheck, Star } from "lucide-react";

export default function HeroSection() {
  const [anos, setAnos] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = new Date().getFullYear() - 1991;
    const duration = 1000;
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setAnos(start);
      if (start >= end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-center px-6 md:px-20 pt-32 pb-20 bg-gradient-to-b from-white to-slate-100 overflow-hidden"
    >
      {/* Estrelas decorativas de fundo */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(6)].map((_, i) => {
          const positions = [
            "top-10 left-20",
            "bottom-10 right-16",
            "top-28 left-1/4",
            "top-28 right-1/4",
            "bottom-20 left-1/3",
            "top-10 right-10" // Nova posição para a estrela que estava perto do texto
          ];
          return (
            <Star
              key={i}
              className={`absolute text-yellow-500 opacity-20 scale-[4] rotate-${i * 45} ${positions[i]}`}
            />
          );
        })}
      </div>

      {/* Texto e Logo */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-start text-left space-y-6 z-10"
      >
        <div className="flex gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={26} className="text-yellow-500 fill-yellow-500" />
          ))}
        </div>

        <h2 className="text-[#053f79] font-semibold text-4xl sm:text-5xl lg:text-6xl tracking-tight">
          COB Odontologia Integrada
        </h2>

        <h1 className="text-[#053f79] text-2xl sm:text-3xl lg:text-4xl font-[Playfair_Display] leading-snug tracking-tight">
          Há{" "}
          <span className="text-yellow-500 font-bold text-4xl sm:text-5xl animate-bounce drop-shadow-md">
            {anos}
          </span>{" "}
          anos transformando vidas através de sorrisos.
        </h1>

        <a
          href="https://wa.me/SEUNUMEROAQUI"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4"
        >
          <button className="flex items-center gap-2 px-8 py-3 rounded-full text-white font-semibold text-base shadow-lg bg-[#053f79] hover:bg-[#0d4c91] transition-transform hover:scale-105 backdrop-blur-md">
            <CalendarCheck size={20} />
            Agende sua consulta
          </button>
        </a>
      </motion.div>

      {/* Imagem com estilo polaroide e leve inclinação */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full h-full flex justify-center items-center z-10"
      >
        <div className="bg-white border border-gray-300 shadow-2xl p-2 md:p-4 rounded-sm transform -rotate-3">
          <img
            src="/imagens/capa.png"
            alt="Casal de idosos sorrindo"
            className="w-full h-auto object-contain max-h-[90vh] rounded-sm"
          />
        </div>
      </motion.div>
    </section>
  );
}
