// src/componentes/Footer.jsx
import { Facebook, Instagram, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#053f79] text-white pt-14 pb-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Coluna: Mapa (2/3) */}
        <section aria-label="Informações institucionais" className="space-y-6 md:col-span-2 flex flex-col justify-between">
         
          {/* Mapa */}
          <div className="w-full rounded-lg overflow-hidden border border-white/10 shadow-md">
            <iframe
              title="Localização da COB Odontologia Integrada"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3132.154425056794!2d-38.960088123994445!3d-12.266276271392946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716d8996d4c53a9%3A0x18d53182a45ff646!2sAv.%20Maria%20Quit%C3%A9ria%2C%201977%20-%20Ponto%20Central%2C%20Feira%20de%20Santana%20-%20BA%2C%2044075-005!5e0!3m2!1spt-BR!2sbr!4v1715709489123!5m2!1spt-BR!2sbr"
              width="100%"
              height="300"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[300px]"
            ></iframe>
          </div>
          <p className="text-sm leading-relaxed text-white/90">
            Excelência em sorrisos, tecnologia de ponta e cuidado humano.
            Uma nova era da odontologia começa com você.
          </p>
        </section>

        {/* Coluna: Contato e Redes Sociais (1/3) */}
        <section aria-label="Informações de contato e redes sociais" className="space-y-8 md:col-span-1">
          {/* Contato */}
          <div>
            <h2 className="text-xl font-semibold">Contato</h2>
            <address className="not-italic text-sm space-y-3">
              <div className="flex items-start gap-2">
                <MapPin size={18} className="mt-1" />
                <div>
                  Avenida Maria Quitéria, 1977<br />
                  Ponto Central, Feira de Santana - BA<br />
                  CEP 44075-005
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <a href="tel:+557599999989" className="hover:underline">
                  (75) 9999-9989
                </a>
              </div>
            </address>
          </div>

          {/* Redes Sociais */}
          <div>
            <h2 className="text-xl font-semibold">Redes Sociais</h2>
            <p className="text-sm text-white/90">Acompanhe nossas transformações:</p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/cobodontologiaintegrada/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da COB Odontologia Integrada"
                className="hover:text-yellow-400 transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook da COB Odontologia Integrada"
                className="hover:text-yellow-400 transition-colors"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Créditos finais */}
      <div className="mt-10 border-t border-white/10 pt-4 text-center text-xs text-white/70">
        © {new Date().getFullYear()} COB Odontologia Integrada. Todos os direitos reservados.
      </div>
    </footer>
  );
}
