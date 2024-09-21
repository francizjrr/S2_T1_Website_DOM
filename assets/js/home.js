// Seccion Sobre nostros

// seleccionamos los elementos"
const aboutBtnElement = document.getElementById("about-btn");

const aboutTextElement = document.getElementById("about-texto-section");

// formulario
const formElement = document.getElementById("form");

// Elegimos el evento clic
aboutBtnElement.addEventListener("click", () => {
   // mostramos / ocultamos contenido
   if (aboutTextElement.style.display === "none") {
      aboutTextElement.style.display = "block";
      aboutTextElement.style.transition = ".5s";
      aboutBtnElement.textContent = "Menos información";
   } else {
      aboutTextElement.style.display = "none";
      aboutTextElement.style.transition = ".5s";
      aboutBtnElement.textContent = "Más información";
   }
});

formElement.addEventListener("submit", (e) => {
   e.preventDefault();

   if (formElement.checkValidity()) {
      alert("Reservación Completada!");
   } else {
      alert("Completa todos los campos");
   }
});
