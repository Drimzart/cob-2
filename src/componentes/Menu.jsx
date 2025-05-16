import { Link } from "react-scroll";
import { CalendarCheck } from "lucide-react";

export default function Menu() {
  return (
    <header
      className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50 border-b border-gray-200"
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between font-sans">
        {/* LOGO */}
        <div className="flex items-center">
          <img
            src="/imagens/logo-infinity.png"
            alt="Logo da Clínica COB Odontologia"
            className="h-12 w-auto"
            loading="eager"
          />
        </div>

        {/* LINKS DE NAVEGAÇÃO */}
        <nav className="hidden md:flex space-x-10 text-[#053f79] font-medium text-base" aria-label="Navegação principal">
          {[
            { label: "Início", to: "hero" },
            { label: "Sobre nós", to: "sobre" },
            { label: "Galeria", to: "galeria" },
            { label: "Formulário", to: "formulario" }
          ].map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-yellow-500 transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* BOTÃO DE AGENDAMENTO */}
        <div>
          <a
            href="https://wa.me/SEUNUMEROAQUI"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Botão para agendar consulta pelo WhatsApp"
          >
            <button className="flex items-center gap-2 px-8 py-3 rounded-full text-white font-semibold text-base shadow-lg bg-[#053f79] hover:bg-[#0d4c91] transition-transform hover:scale-105 backdrop-blur-md">
              <CalendarCheck size={18} />
              Agende sua consulta
            </button>
          </a>
        </div>
      </div>
    </header>
  );
}
