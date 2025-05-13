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

  // Fecha com ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") fecharModal();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  // Fecha ao clicar fora do modal
  const handleClickFora = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      fecharModal();
    }
  };

  return (
    <section id="especialidades" className="bg-[#e8f1fa] py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-[#053f79] mb-16 font-serif"
        >
          Nossas Especialidades
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {especialidades.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => abrirModal(item)}
              className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center hover:shadow-xl transition-shadow cursor-pointer"
            >
              <img
                src={item.imagem}
                alt={item.nome}
                className="rounded-lg object-cover w-full h-28 mb-2"
              />
              <h3 className="text-lg font-semibold text-[#053f79]">{item.nome}</h3>
              <div className="flex space-x-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="stroke-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal com framer-motion e clique fora */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClickFora}
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
            }}
          >
            <motion.div
              ref={modalRef}
              className="bg-white p-6 rounded-2xl shadow-xl max-w-md w-full relative border border-gray-200"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <button
                onClick={fecharModal}
                className="absolute top-3 right-3 text-gray-600 hover:text-[#053f79] transition-colors"
                aria-label="Fechar"
              >
                <X size={24} />
              </button>
              <h2 className="text-2xl font-bold text-[#053f79] mb-4">
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
                  className="px-4 py-2 bg-[#053f79] text-white rounded-xl hover:bg-[#072e59] transition"
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
