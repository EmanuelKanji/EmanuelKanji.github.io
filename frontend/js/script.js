document.addEventListener('DOMContentLoaded', () => {
    // Seleccionamos el formulario, ya sea por clase, id o genérico
    const form = document.querySelector('#contact-form') || document.querySelector('form');

    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Evita que la página se recargue

        // Capturamos los valores de los campos del formulario
        const nombre = document.querySelector('#nombre').value.trim();
        const email = document.querySelector('#email').value.trim();
        const mensaje = document.querySelector('#mensaje').value.trim();

        // Validación básica
        if (!nombre || !email || !mensaje) {
            alert('Por favor, completa todos los campos obligatorios.');
            return;
        }

        // Creamos un objeto con los datos del formulario
        const data = { nombre, email, mensaje };

        try {
            // Usamos una URL de la API que es fácilmente modificable
            const apiURL = 'https://kanjiro34.github.io.onrender.com/api/contacto'; // Cambia esta URL según tu necesidad

            const response = await fetch(apiURL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            const result = await response.json();  // Respuesta del servidor
            console.log('Respuesta del servidor:', result);

            if (response.ok) {
                alert('Mensaje enviado con éxito');
                form.reset(); // Reseteamos el formulario
            } else {
                alert('Error al enviar el mensaje: ' + (result.message || 'Intenta más tarde.'));
            }
        } catch (error) {
            // En caso de error de red o cualquier otro, mostrar un mensaje
            console.error('Error al hacer la solicitud:', error);
            alert('Error de conexión. Verifica tu red o intenta más tarde.');
        }
    });
});
