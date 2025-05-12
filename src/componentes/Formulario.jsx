import consultorio from '/imagens/consultorio-3.png';

export default function Formulario() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <form className="bg-blue-50 p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Entre em Contato</h2>
          <input className="w-full mb-4 p-3 rounded border border-blue-200" type="text" placeholder="Nome" />
          <input className="w-full mb-4 p-3 rounded border border-blue-200" type="email" placeholder="E-mail" />
          <textarea className="w-full mb-4 p-3 rounded border border-blue-200" rows="4" placeholder="Mensagem"></textarea>
          <button className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition">
            Enviar
          </button>
        </form>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img src={consultorio} alt="Consultório" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}