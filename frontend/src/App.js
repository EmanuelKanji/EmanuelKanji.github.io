import React from "react"; // Importamos la biblioteca de React para poder usar JSX y otros hooks de React
import Header from "./components/Header"; // Importamos el componente Header desde la carpeta components
import About from "./components/About"; // Importamos el componente About desde la carpeta components
import Projects from "./components/Projects"; // Importamos el componente Projects desde la carpeta components
import Contact from "./components/Contact"; // Importamos el componente Contact desde la carpeta components
import Footer from "./components/Footer"; // Importamos el componente Footer desde la carpeta components
Header, HeaderH1, HeaderP, AboutMeSection, AboutMeH2, AboutMeP, 
ProjectSection, ProjectH2, Proyecto, ProyectoH3, Tecnologias, TecnologiaSpan,
ContactSection, ContactH2, Form, Input, Textarea, Button
// Definimos un componente funcional llamado App
function App() {
  return (
    <>
      {/* Renderizamos el componente Header */}
      <Header />
      {/* Renderizamos el componente About */}
      <About />
      {/* Renderizamos el componente Projects */}
      <Projects />
      {/* Renderizamos el componente Contact */}
      <Contact />
      {/* Renderizamos el componente Footer */}
      <Footer />
    </>
  );
}

// Exportamos el componente App como exportación por defecto
export default App;

