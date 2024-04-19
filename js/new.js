document.addEventListener("DOMContentLoaded", () => {
    
  const form = document.querySelector(".form");
  form.addEventListener("submit", validateForm);
});

// Función para validar el formato de correo electrónico
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Función para mostrar mensajes de error debajo de cada campo
function showFieldError(fieldName, errorMessage) {
  const field = document.getElementById(fieldName);
  const errorContainer = field.parentNode.querySelector(".error-message");
  if (!errorContainer) {
    const newErrorContainer = document.createElement("div");
    newErrorContainer.className = "error-message";
    field.parentNode.appendChild(newErrorContainer);
  }
  field.parentNode.querySelector(".error-message").innerHTML = errorMessage;
  field.classList.add("invalid");
}

// Función para limpiar mensajes de error y clases inválidas
function clearErrors() {
  const errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach((errorMessage) => errorMessage.remove());

  const fields = document.querySelectorAll(".input-field");
  fields.forEach((field) => field.classList.remove("invalid"));
}

function validateField(fieldName, fieldValue) {
  clearFieldError(fieldName);

  if (fieldName === "user") {
    if (!fieldValue) {
      showFieldError(fieldName, "El campo nombre de usuario es obligatorio.");
    }
  }

  if (fieldName === "password") {
    if (!fieldValue) {
      showFieldError(fieldName, "El campo contraseña es obligatorio.");
    }
  }
}

function validateForm(event) {
  event.preventDefault();
  clearErrors();

  const userField = document.getElementById("user");
  const passwordField = document.getElementById("password");

  const userValue = userField.value.trim();
  const passwordValue = passwordField.value.trim();

  validateField("user", userValue);
  validateField("password", passwordValue);

  // Si no hay errores, puedes enviar el formulario aquí
}
