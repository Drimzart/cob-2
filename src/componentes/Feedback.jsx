import { motion } from "framer-motion";

const feedbacks = [
  {
    nome: "Ana Clara",
    texto: "A equipe é maravilhosa! Me senti acolhida desde a primeira consulta. Recomendo demais!",
  },
  {
    nome: "João Pedro",
    texto: "Recuperei minha autoestima. Hoje sorrio sem medo, graças ao excelente trabalho da clínica.",
  },
  {
    nome: "Maria Eduarda",
    texto: "Atendimento humanizado e resultados incríveis. Sou grata por cada detalhe do tratamento.",
  },
];

export default function Feedback() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-[#053f79] mb-16 font-serif"
        >
          O que dizem nossos pacientes
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-3">
          {feedbacks.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-slate-50 p-6 rounded-xl shadow-md text-center hover:shadow-lg"
            >
              <p className="text-gray-700 italic mb-4">"{item.texto}"</p>
              <h4 className="text-[#053f79] font-semibold">{item.nome}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
