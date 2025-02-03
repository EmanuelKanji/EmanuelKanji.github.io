document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('form').addEventListener('submit', async (event) => {
        event.preventDefault(); // Evita que la página se recargue al enviar el formulario

        // Capturar los datos del formulario
        const nombre = document.querySelector('#nombre').value.trim();
        const email = document.querySelector('#email').value.trim();
        const mensaje = document.querySelector('#mensaje').value.trim();

        // Validación básica de los campos
        if (!nombre || !email || !mensaje) {
            alert('Por favor, completa todos los campos.');
            return;
        }

        // Crear el objeto de datos a enviar
        const data = { nombre, email, mensaje };

        try {
            // Enviar la solicitud POST al servidor para guardar los datos
            const response = await fetch('https://kanjiro34-github-io.onrender.com/api/contacto', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data) // Enviar los datos del formulario al backend
            });

            // Obtener la respuesta en formato JSON
            const result = await response.json();
            console.log('Respuesta del servidor:', result);

            if (response.ok) {
                alert('Mensaje enviado con éxito');
                document.querySelector('form').reset(); // Reseteamos el formulario
            } else {
                alert('Error al enviar el mensaje: ' + (result.message || 'Intenta más tarde.'));
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
            alert('Error de conexión. Verifica tu red o intenta más tarde.');
        }
    });
});
