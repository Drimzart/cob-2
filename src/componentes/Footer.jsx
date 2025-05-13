// src/componentes/Footer.jsx
import { Facebook, Instagram, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#053f79] text-white pt-14 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo & Frase */}
        <div className="space-y-4">
          <img
            src="/imagens/logo.png"
            alt="Logo Cob"
            className="h-16"
          />
          <p className="text-sm leading-relaxed">
            Excelência em sorrisos, tecnologia de ponta e cuidado humano.
            Uma nova era da odontologia começa com você.
          </p>
        </div>

        {/* Contato */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contato</h3>
          <ul className="text-sm space-y-3">
            <li className="flex items-start gap-2">
              <MapPin size={18} className="mt-1" />
              <div>
                Avenida Maria Quitéria, 1977<br />
                Ponto Central, Feira de Santana - BA<br />
                CEP 44075-005
              </div>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} />
              (75) 9999-9989
            </li>
          </ul>
        </div>

        {/* Redes Sociais */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Redes Sociais</h3>
          <p className="text-sm mb-3">Acompanhe nossas transformações:</p>
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/cobodontologiaintegrada/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition-colors"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition-colors"
            >
              <Facebook size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Créditos finais */}
      <div className="mt-10 border-t border-white/10 pt-4 text-center text-xs text-white/70">
        © {new Date().getFullYear()} COB Odontologia Integrada. Todos os direitos reservados.
      </div>
    </footer>
  );
}
