const formResena = document.getElementById("form-resena");
const resenasContainer = document.getElementById("resenas-container");

// Agregar una nueva reseña cuando se envíe el formulario
formResena.addEventListener("submit", function (event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const destino = document.getElementById("destino").value;
  const comentario = document.getElementById("comentario").value;

  const nuevaResena = document.createElement("div");
  nuevaResena.classList.add("resena");
  nuevaResena.innerHTML = `
    <p>
      <strong>${nombre} (Viaje a ${destino})</strong><br />
      "${comentario}"
    </p>
  `;

  resenasContainer.appendChild(nuevaResena);

  formResena.reset();
});

document.getElementById("ver-mas-btn").addEventListener("click", function () {
  var extraQuestions = document.getElementById("extra-questions");
  var button = this;

  if (
    extraQuestions.style.display === "none" ||
    extraQuestions.style.display === ""
  ) {
    extraQuestions.style.display = "block";
    button.textContent = "Ver menos -";
  } else {
    extraQuestions.style.display = "none";
    button.textContent = "Ver más +";
  }
});
