document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#contact-form').addEventListener('submit', async (event) => {
        event.preventDefault(); // Evita que la página se recargue al enviar el formulario

        // Capturamos los valores del formulario
        const nombre = document.querySelector('#nombre').value.trim();
        const email = document.querySelector('#email').value.trim();
        const mensaje = document.querySelector('#mensaje').value.trim();

        // Validación de los campos
        if (!nombre || !email || !mensaje) {
            alert('Por favor, completa todos los campos.');
            return;
        }

        // Creamos un objeto con los datos del formulario
        const data = { nombre, email, mensaje };

        try {
            // Enviar la solicitud POST al servidor para guardar los datos
            const response = await fetch('https://kanjiro34.github.io/api/contacto', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            // Verificar si la respuesta fue exitosa
            if (response.ok) {
                const result = await response.json();  // Respuesta del servidor
                console.log('Respuesta del servidor:', result);
                alert('Mensaje enviado con éxito');
                document.querySelector('#contact-form').reset(); // Reseteamos el formulario
            } else {
                // Si la respuesta no fue exitosa, mostramos un mensaje de error
                const errorResponse = await response.json();
                alert('Error al enviar el mensaje: ' + (errorResponse.message || 'Intenta más tarde.'));
            }
        } catch (error) {
            // En caso de error de red o cualquier otro, mostrar un mensaje
            console.error('Error al hacer la solicitud:', error);
            alert('Error de conexión. Verifica tu red o intenta más tarde.');
        }
    });
});