// src/componentes/WhatsappButton.jsx
import { useEffect, useState } from "react";

export default function WhatsappButton() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.5 }
    );

    const hero = document.getElementById("hero");
    if (hero) observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  return (
    <a
      href="https://wa.me/5575999999989"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <img
        src="/icons/whatsapp.svg"
        alt="Fale conosco no WhatsApp"
        className="w-14 h-14 drop-shadow-lg hover:scale-105 transition-transform"
      />
    </a>
  );
}
