import React from "react";

function Contacto() {
  return (
    <section id="contacto">
      <h2>Contacto</h2>
      <form id="contact-form">
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="mensaje">Mensaje:</label>
        <textarea id="mensaje" name="mensaje" required></textarea>

        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default Contacto;
