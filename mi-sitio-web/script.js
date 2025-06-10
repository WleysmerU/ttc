const form = document.getElementById("formularioContacto");
const mensaje = document.getElementById("mensajeForm");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const motivo = document.getElementById("motivo").value.trim();
  const correo = document.getElementById("correo").value.trim();

  if (nombre === "" || motivo === "" || correo === "") {
    mensaje.style.color = "red";
    mensaje.textContent = "Por favor, complete todos los campos.";
  } else {
    mensaje.style.color = "green";
    mensaje.textContent = `Gracias por tu mensaje, ${nombre}. Te responderé pronto.`;

    alert(`Hola ${nombre}, su correo es ${correo} y su motivo de contacto es:\n${motivo}`);

    console.log("Nombre:", nombre);
    console.log("Motivo:", motivo);
    console.log("Correo:", correo);

    this.reset();
  }
});
