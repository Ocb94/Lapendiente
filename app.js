const PASSWORD_PERMITIDA = "123456";

const formulario = document.getElementById("formulario-acceso");
const inputPassword = document.getElementById("input-password");
const mensajeEstado = document.getElementById("mensaje-estado");
const botonInvitado = document.getElementById("btn-invitado");

const actualizarMensaje = (texto, tipo) => {
  mensajeEstado.textContent = texto;
  mensajeEstado.className = tipo ? tipo : "";
};

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const password = inputPassword.value.trim();

  if (!password) {
    actualizarMensaje("Por favor ingresa la contraseña.", "error");
    inputPassword.focus();
    return;
  }

  if (password === PASSWORD_PERMITIDA) {
    actualizarMensaje("Acceso concedido. ¡Bienvenido de nuevo!", "success");
    formulario.reset();
  } else {
    actualizarMensaje("Contraseña incorrecta. Inténtalo nuevamente.", "error");
    inputPassword.focus();
    inputPassword.select();
  }
});

botonInvitado.addEventListener("click", () => {
  formulario.reset();
  actualizarMensaje(
    "Acceso como invitado. Disfruta la vista previa!",
    "success",
  );
});
