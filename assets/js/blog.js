// Obtener los elementos del dropdown para agregar interactividad
document.querySelectorAll('.dropdown').forEach(dropdown => {
    const dropBtn = dropdown.querySelector('.dropbtn');
    const dropdownContent = dropdown.querySelector('.dropdown-content');
    
    // Abrir el menú dropdown cuando se hace clic en el botón
    dropBtn.addEventListener('click', () => {
        dropdownContent.classList.toggle('show'); // Mostrar o esconder el contenido del dropdown
    });

    // Cerrar el dropdown si se hace clic fuera de él
    window.addEventListener('click', (event) => {
        if (!dropdown.contains(event.target)) {
            dropdownContent.classList.remove('show');
        }
    });
});

// Funcionalidad para agregar nuevas cards al presionar un botón
function addNewCard(title, description, imageUrl) {
    // Obtener el contenedor de las cards
    const cardsContainer = document.querySelector('.cards-container');
    
    // Crear los elementos necesarios para una nueva card
    const card = document.createElement('div');
    card.classList.add('card');
    
    const img = document.createElement('img');
    img.classList.add('card-image');
    img.src = imageUrl;
    
    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');
    
    const cardTitle = document.createElement('h3');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = title;
    
    const cardDescription = document.createElement('p');
    cardDescription.classList.add('card-description');
    cardDescription.textContent = description;
    
    const cardLink = document.createElement('a');
    cardLink.classList.add('card-link');
    cardLink.href = "#";
    cardLink.textContent = 'Leer más';
    
    // Ensamblar la card
    cardContent.appendChild(cardTitle);
    cardContent.appendChild(cardDescription);
    cardContent.appendChild(cardLink);
    
    card.appendChild(img);
    card.appendChild(cardContent);
    
    // Añadir la nueva card al contenedor
    cardsContainer.appendChild(card);
}

// Ejemplo de cómo agregar nuevas cards de forma dinámica
document.getElementById('add-card-btn').addEventListener('click', () => {
    const title = 'Nuevo Destino: Grecia';
    const description = 'Descubre las playas y la historia de la antigua Grecia en esta nueva aventura.';
    const imageUrl = 'https://via.placeholder.com/400x250';
    
    addNewCard(title, description, imageUrl);
});

// Funcionalidad para eliminar una card
function removeLastCard() {
    const cardsContainer = document.querySelector('.cards-container');
    const lastCard = cardsContainer.lastElementChild;
    
    if (lastCard) {
        cardsContainer.removeChild(lastCard);
    }
}

// Botón para eliminar la última card agregada
document.getElementById('remove-card-btn').addEventListener('click', () => {
    removeLastCard();
});
