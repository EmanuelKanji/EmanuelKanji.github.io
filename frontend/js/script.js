document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#contact-form').addEventListener('submit', async (event) => {
        event.preventDefault(); // Evita que la página se recargue

        // Capturar los datos del formulario
        const nombre = document.querySelector('#nombre').value.trim();
        const email = document.querySelector('#email').value.trim();
        const mensaje = document.querySelector('#mensaje').value.trim();

        // Validación básica
        if (!nombre || !email || !mensaje) {
            alert('Por favor, completa todos los campos.');
            return;
        }

        // Crear el objeto de datos a enviar
        const data = { nombre, email, mensaje };

        try {
            // Conectamos al backend
            const response = await fetch('/api/contacto', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            // Comprobamos si la respuesta es exitosa
            if (!response.ok) {
                const result = await response.json();
                console.error('Error en el servidor:', result);  // Imprimimos el error del servidor si es que hay uno
                alert('Error al enviar el mensaje: ' + (result.message || 'Intenta más tarde.'));
                return;
            }

            const result = await response.json();
            console.log('Respuesta del servidor:', result);

            alert('Mensaje enviado con éxito');
            document.querySelector('#contact-form').reset();
        } catch (error) {
            // Aquí revisamos si el error es por la red o por otro tipo de error
            console.error('Error inesperado:', error);  // Imprimimos todo el error
            alert('Error inesperado. Intenta más tarde.');
        }
    });
});

