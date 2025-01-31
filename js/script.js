document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;
    if (nombre === "" || email === "" || mensaje === "") {
        alert("Por favor, complete todos los campos del formulario.");
    } else {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "enviar-mensaje.php", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send("nombre=" + encodeURIComponent(nombre) + "&email=" + encodeURIComponent(email) + "&mensaje=" + encodeURIComponent(mensaje));
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                alert("Mensaje enviado. Me pondré en contacto contigo pronto.");
            } else {
                alert("Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.");
            }
        }
    }
});
