import { Send, User, Mail, Phone, MessageSquare } from 'lucide-react';
import consultorio from '/imagens/recepcao-1.png';

export default function Formulario() {
  return (
    <section className="py-16 px-4 bg-white" id="formulario">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-0 items-stretch rounded-2xl overflow-hidden shadow-lg">

        {/* FORMULÁRIO */}
        <form className="bg-blue-50 p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-[#053f79] mb-6">Entre em Contato</h2>

          {/* Linha com Nome e Telefone */}
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            {/* Nome */}
            <div className="flex items-center bg-white border border-blue-200 rounded px-3 py-2">
              <User className="text-[#053f79] mr-3" size={20} />
              <input
                type="text"
                placeholder="Nome"
                className="w-full focus:outline-none text-sm bg-transparent"
              />
            </div>

            {/* Telefone */}
            <div className="flex items-center bg-white border border-blue-200 rounded px-3 py-2">
              <Phone className="text-[#053f79] mr-3" size={20} />
              <input
                type="tel"
                placeholder="Telefone"
                className="w-full focus:outline-none text-sm bg-transparent"
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center bg-white border border-blue-200 rounded mb-4 px-3 py-2">
            <Mail className="text-[#053f79] mr-3" size={20} />
            <input
              type="email"
              placeholder="E-mail"
              className="w-full focus:outline-none text-sm bg-transparent"
            />
          </div>

          {/* Mensagem */}
          <div className="flex items-start bg-white border border-blue-200 rounded mb-6 px-3 py-2">
            <MessageSquare className="text-[#053f79] mr-3 mt-1" size={20} />
            <textarea
              placeholder="Mensagem"
              rows={4}
              className="w-full resize-none focus:outline-none text-sm bg-transparent"
            ></textarea>
          </div>

          {/* Botão */}
          <div>
            <button className="flex items-center gap-2 px-8 py-3 rounded-full text-white font-semibold text-base shadow-lg bg-[#053f79] hover:bg-[#0d4c91] transition-transform hover:scale-105 backdrop-blur-md">
              <Send size={18} />
              Enviar
            </button>
          </div>
        </form>

        {/* IMAGEM */}
        <div className="w-full h-full">
          <img
            src={consultorio}
            alt="Consultório"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
