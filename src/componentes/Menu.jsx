import { useState } from "react";
import { Link } from "react-scroll";
import { CalendarCheck, Menu as MenuIcon, X } from "lucide-react";

export default function Menu() {
  const [menuAberto, setMenuAberto] = useState(false);

  const links = [
    { label: "Início", to: "hero" },
    { label: "Sobre nós", to: "sobre" },
    { label: "Galeria", to: "galeria" },
    { label: "Formulário", to: "formulario" }
  ];

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

        {/* Ícone de menu mobile */}
        <button
          className="md:hidden text-[#053f79]"
          onClick={() => setMenuAberto((prev) => !prev)}
          aria-label="Abrir ou fechar menu"
        >
          {menuAberto ? <X size={28} /> : <MenuIcon size={28} />}
        </button>

        {/* LINKS DE NAVEGAÇÃO - DESKTOP */}
        <nav className="hidden md:flex space-x-10 text-[#053f79] font-medium text-base" aria-label="Navegação principal">
          {links.map(({ label, to }) => (
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

        {/* BOTÃO DE AGENDAMENTO - SEMPRE VISÍVEL */}
        <div className="block">
          <a
            href="https://wa.me/SEUNUMEROAQUI"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Botão para agendar consulta pelo WhatsApp"
          >
            <button className="flex items-center gap-2 px-6 py-2 sm:px-8 sm:py-3 rounded-full text-white font-semibold text-sm sm:text-base shadow-lg bg-[#053f79] hover:bg-[#0d4c91] transition-transform hover:scale-105 backdrop-blur-md">
              <CalendarCheck size={18} />
              Agende sua consulta
            </button>
          </a>
        </div>
      </div>

      {/* MENU MOBILE DROPDOWN */}
      {menuAberto && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg px-6 py-4 space-y-4 text-[#053f79] text-base font-medium text-center">
          {links.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              smooth={true}
              duration={500}
              onClick={() => setMenuAberto(false)}
              className="block py-2 cursor-pointer hover:text-yellow-500 transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}