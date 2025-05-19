import Especialidades from "./componentes/Especialidades";
import Feedback from "./componentes/Feedback";
import Footer from "./componentes/Footer";
import Formulario from "./componentes/Formulario";
import Galeria from "./componentes/Galeria";
import HeroSection from "./componentes/HeroSection";
import Menu from "./componentes/Menu";
import Sobre from "./componentes/Sobre";
import Varal from "./componentes/Varal"
import WhatsappButton from "./componentes/WhatsappButton";


function App() {
  return (
    <>
      <Menu/>
      <HeroSection/>
      <Especialidades/>
      <Sobre/>
      <Varal/>
      <Galeria/>
      <Feedback/>
      <Formulario/>
      <WhatsappButton/>
      <Footer/>
    </>
  );
}

export default App;
