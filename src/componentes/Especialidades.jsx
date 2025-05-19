import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, X } from "lucide-react";

const especialidades = [
  {
    nome: "Ortodontia",
    imagem: "/imagens/ortodontia.jpg",
    descricao: [
      "Aparelhos fixos",
      "Aparelhos autoligados",
      "Alinhadores ortodônticos",
      "Aparelhos fixos de porcelana",
    ],
  },
  {
    nome: "Implantodontia",
    imagem: "/imagens/implantodontia.jpg",
    descricao: ["Implante unitário", "Enxerto", "Implante zigomático"],
  },
  {
    nome: "Prótese",
    imagem: "/imagens/protese.jpg",
    descricao: ["Prótese total", "Prótese parcial", "Prótese protocolo"],
  },
  {
    nome: "Endodontia",
    imagem: "/imagens/endodontia.jpg",
    descricao: ["Tratamento de canal", "Retratamento endodôntico"],
  },
  {
    nome: "Radiologia",
    imagem: "/imagens/radiologia.jpg",
    descricao: ["Radiografias odontológicas", "Tomografias"],
  },
  {
    nome: "Estética",
    imagem: "/imagens/estetica.jpg",
    descricao: ["Clareamento dental", "Facetas de porcelana"],
  },
  {
    nome: "Periodontia",
    imagem: "/imagens/periodontia.jpg",
    descricao: ["Limpeza profunda", "Tratamento de gengivite"],
  },
  {
    nome: "Cirurgia",
    imagem: "/imagens/cirurgia.jpg",
    descricao: ["Extração de sisos", "Cirurgias gengivais", "Biópsias"],
  },
];

export default function Especialidades() {
  const [modalOpen, setModalOpen] = useState(false);
  const [especialidadeAtiva, setEspecialidadeAtiva] = useState(null);
  const modalRef = useRef();

  const abrirModal = (especialidade) => {
    setEspecialidadeAtiva(especialidade);
    setModalOpen(true);
  };

  const fecharModal = () => {
    setModalOpen(false);
    setEspecialidadeAtiva(null);
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") fecharModal();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  const handleClickFora = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      fecharModal();
    }
  };

  return (
    <section id="especialidades" className="bg-[#e8f1fa] py-20 px-6 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-[#04416a] mb-16 font-serif"
        >
          Nossas Especialidades
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {especialidades.map((item, index) => (
            <article
              key={index}
              onClick={() => abrirModal(item)}
              className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition cursor-pointer"
              aria-label={`Abrir especialidade ${item.nome}`}
            >
              <figure className="aspect-[4/3] w-full overflow-hidden rounded-lg mb-3">
                <img
                  src={item.imagem}
                  alt={`Imagem representativa da especialidade ${item.nome}`}
                  loading="lazy"
                  className="object-cover w-full h-full"
                  width={400}
                  height={300}
                />
              </figure>
              <h3 className="text-lg font-semibold text-[#04416a] text-center">{item.nome}</h3>
              <div className="flex justify-center space-x-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="stroke-yellow-400 fill-yellow-400"
                    aria-hidden="true"
                  />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClickFora}
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.2)",
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
            }}
            aria-modal="true"
            role="dialog"
          >
            <motion.div
              ref={modalRef}
              className="bg-white p-6 rounded-2xl shadow-xl max-w-md w-full relative border border-gray-200"
              initial={{ transform: "scale(0.95)", opacity: 0 }}
              animate={{ transform: "scale(1)", opacity: 1 }}
              exit={{ transform: "scale(0.95)", opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <button
                onClick={fecharModal}
                className="absolute top-3 right-3 text-gray-600 hover:text-[#04416a] transition-colors"
                aria-label="Fechar modal"
              >
                <X size={24} />
              </button>
              <h2 className="text-2xl font-bold text-[#04416a] mb-4">
                {especialidadeAtiva?.nome}
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {especialidadeAtiva?.descricao.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <div className="mt-6 text-right">
                <button
                  onClick={fecharModal}
                  className="px-4 py-2 bg-[#04416a] text-white rounded-xl hover:bg-[#03324f] transition"
                >
                  Fechar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
