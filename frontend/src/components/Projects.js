import React from "react";

function Projects() {
  return (
    <section id="proyectos">
      <h2>Mis Proyectos</h2>
      <div className="proyecto">
        <a href="https://javic.netlify.app/" target="_blank" rel="noopener noreferrer">
          <div className="miniatura">
            <img src="/media/miniatura1.png" alt="Proyecto Javic" />
          </div>
          <h3>Proyecto Javic</h3>
          <div className="contenido">
            <p>
              ProyectoJavic es un sitio web informativo que permite a los usuarios
              enviar mensajes a través de un formulario, almacenándolos en una
              base de datos en MongoDB Atlas.
            </p>
            <div className="tecnologias">
              <span>HTML5</span>
              <span>CSS3</span>
              <span>JavaScript</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MongoDB Atlas</span>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Projects;
