"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const casos = [
  { id: 1, nome: "Edna de Oliveira", idade: 56, historia: "Recuperou seu sorriso após anos sem mastigar corretamente." },
  { id: 2, nome: "Joelson de Sant Anna", idade: 48, historia: "Voltou a sorrir sem medo depois da reabilitação oral." },
  { id: 3, nome: "Elizete Máxima", idade: 71, historia: "Transformou sua autoestima após a colocação de próteses." },
  { id: 4, nome: "Natalice Santana", idade: 45, historia: "Conseguiu melhorar a fala e a alimentação." },
  { id: 5, nome: "Judite Gomes", idade: 67, historia: "Sente-se mais confiante e renovada com o novo sorriso." },
  { id: 6, nome: "Josete Trabuco", idade: 65, historia: "Redescobriu o prazer de sorrir naturalmente." },
  { id: 7, nome: "Moises Peixer", idade: 70, historia: "Após anos sem dentes, voltou a se sentir jovem." },
  { id: 8, nome: "Cleverson Antunes", idade: 41, historia: "Superou traumas dentários e voltou a sorrir." },
  { id: 9, nome: "David Lucas", idade: 31, historia: "A saúde bucal trouxe qualidade de vida de volta." },
];

export default function Galeria() {
  const [indice, setIndice] = useState(0);
  const paciente = casos[indice];

  const anterior = () => setIndice((prev) => (prev - 1 + casos.length) % casos.length);
  const proximo = () => setIndice((prev) => (prev + 1) % casos.length);

  return (
    <section id="galeria" className="bg-gradient-to-b from-white to-slate-100 py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-[#04416a] mb-16 font-serif"
        >
          Casos de Sucesso
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div className="col-span-2 grid grid-cols-2 gap-4">
            {["antes", "depois", "antes-boca", "depois-boca"].map((tipo, i) => (
              <motion.div
                key={tipo}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <span className="text-sm text-gray-500 mb-2 block capitalize">{tipo.replace("-", " ")}</span>
                <img
                  src={`/imagens/${tipo}-caso-${paciente.id}.png`}
                  alt={`Imagem ${tipo} do caso ${paciente.nome}`}
                  className={`rounded-xl shadow-md object-cover mx-auto w-full transition-transform duration-300 hover:scale-105 ${
                    tipo.includes("boca") ? "max-h-48" : "max-h-[400px]"
                  }`}
                />
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-4 mb-6">
              <button onClick={anterior} className="p-2 bg-[#04416a]/10 hover:bg-[#04416a]/20 rounded-full">
                <ChevronLeft className="text-[#04416a]" />
              </button>
              <motion.img
                key={indice}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                src={`/imagens/depois-caso-${paciente.id}.png`}
                alt={`Resultado final do caso ${paciente.nome}`}
                className="w-44 h-60 object-cover rounded-xl border-4 border-white shadow-lg"
              />
              <button onClick={proximo} className="p-2 bg-[#04416a]/10 hover:bg-[#04416a]/20 rounded-full">
                <ChevronRight className="text-[#04416a]" />
              </button>
            </div>

            <div className="flex gap-2 flex-wrap justify-center mb-4">
              {[-2, -1, 1, 2].map((offset) => {
                const pos = (indice + offset + casos.length) % casos.length;
                return (
                  <motion.img
                    key={pos}
                    whileHover={{ scale: 1.1 }}
                    onClick={() => setIndice(pos)}
                    src={`/imagens/depois-caso-${casos[pos].id}.png`}
                    alt={`Miniatura do caso ${casos[pos].nome}`}
                    className="w-12 h-16 object-cover rounded border border-gray-300 shadow-sm cursor-pointer opacity-70 hover:opacity-100"
                  />
                );
              })}
            </div>

            <div className="text-center text-sm text-gray-700">
              <p className="font-semibold">{paciente.nome}, {paciente.idade} anos</p>
              <p className="mt-1">{paciente.historia}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
