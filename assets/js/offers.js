// Array para almacenar los paquetes seleccionados
let cart = [];

// Función para agregar paquetes al carrito
function addToCart(title, description) {
  const package = { title, description };
  cart.push(package);
  updateCartCount();
  alert(`${title} añadido al carrito.`);
}

// Actualizar el número de elementos en el carrito
function updateCartCount() {
  const cartCount = document.getElementById("cart-count");
  cartCount.textContent = cart.length;
}

// Mostrar los paquetes seleccionados en el modal del carrito
function showCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = ""; // Limpiar el contenido anterior

  // Generar el grid con los paquetes seleccionados
  cart.forEach((item, index) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("col-md-4", "mb-3");
    cartItem.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">${item.description}</p>
                    <button class="btn btn-danger" onclick="removeFromCart(${index})">Eliminar</button>
                </div>
            </div>
        `;
    cartItems.appendChild(cartItem);
  });
}

// Eliminar un paquete del carrito
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartCount();
  showCart(); // Volver a mostrar el carrito actualizado
}

// Evento para abrir el carrito cuando se abre el modal
document.getElementById("cart-icon").addEventListener("click", showCart);

//funcion filtrar
document
  .getElementById("filtro-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const categoriaSeleccionada = document.getElementById("categoria").value;

    const cartas = document.querySelectorAll(".cartas");

    cartas.forEach(function (carta) {
      const categoriaCarta = carta.getAttribute("data-categoria");

      if (
        categoriaSeleccionada === "Todas" ||
        categoriaCarta === categoriaSeleccionada
      ) {
        carta.style.display = "block";
        
      } else {
        carta.style.display = "none";
      }
      
    });
  });
