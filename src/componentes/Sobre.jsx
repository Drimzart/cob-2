import { motion } from "framer-motion";

export default function Sobre() {
  return (
    <section id="sobre" className="bg-[#f8f9fa] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-[#053f79] mb-16 text-center font-serif tracking-tight"
        >
          Compromisso com Excelência e Inovação
        </motion.h2>

        {/* Bloco de texto + imagem institucional */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <motion.img
            src="/imagens/ronald-e-milena.png"
            alt="Dr. Ronald e Dra. Milena"
            className="rounded-3xl shadow-2xl w-full object-cover"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          />

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gray-700 space-y-5 text-lg leading-relaxed"
          >
            <p>
              Na <span className="font-semibold text-[#053f79]">COB Odontologia Integrada</span>, acreditamos que o sorriso é a expressão máxima de felicidade e saúde. Nossos princípios são fundamentados em atendimento humanizado, tecnologia de ponta e profissionais com formação de excelência.
            </p>
            <p>
              Somos referência em inovação e resultados duradouros, promovendo experiências transformadoras para cada paciente que confia em nosso cuidado.
            </p>
          </motion.div>
        </div>

        {/* Cards estilo FIFA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Card Ronald */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="bg-gradient-to-br from-[#eaf3fb] to-white p-6 rounded-3xl shadow-2xl grid grid-cols-3 gap-6 items-start"
          >
            <img
              src="/imagens/ronald.png"
              alt="Dr. Ronald de Freitas Paixão"
              className="col-span-1 w-full h-full object-cover rounded-2xl border-4 border-[#053f79] shadow-md"
            />
            <div className="col-span-2 space-y-3">
              <h3 className="text-xl font-bold text-[#053f79]">Dr. Ronald de Freitas Paixão</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  'CEO da COB Odontologia Integrada',
                  'Mestre em Odontopediatria - UFSC',
                  'Doutor em Odontopediatria - USP',
                  'Mestre em Ortodontia - UNESP',
                  'Prof. Titular - UEFS',
                  'Coord. da Pós em Ortodontia - Avance',
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-[#053f79] text-white text-sm py-2 px-3 rounded-lg shadow-md hover:bg-blue-900 transition-all"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card Milena */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="bg-gradient-to-br from-[#eaf3fb] to-white p-6 rounded-3xl shadow-2xl grid grid-cols-3 gap-6 items-start"
          >
            <img
              src="/imagens/milena.png"
              alt="Dra. Milena Leite de Freitas Paixão"
              className="col-span-1 w-full h-full object-cover rounded-2xl border-4 border-[#053f79] shadow-md"
            />
            <div className="col-span-2 space-y-3">
              <h3 className="text-xl font-bold text-[#053f79]">Dra. Milena Leite de Freitas Paixão</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  'Sócia da COB Odontologia Integrada',
                  'Especialista em Estética Dental',
                  'Especialista em Clareamento',
                  'Especialista em Lentes de Contato',
                  'Especialista em Imaginologia',
                  'Especialista em Prótese Dental',
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-[#053f79] text-white text-sm py-2 px-3 rounded-lg shadow-md hover:bg-blue-900 transition-all"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
