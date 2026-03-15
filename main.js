// mapin.js

// Tablica serwerów
const servers = [
  {
    name: "Serwer Testowy",
    description: "Opis pierwszego zlecenia – kanały, boty i społeczność.",
    screenshot: "static/images/ss1.png",
    link: "https://discord.gg/twójlink"
  },
  {
    name: "Serwer Drugi",
    description: "Kolejny serwer do pokazania.",
    screenshot: "static/images/ss2.png",
    link: "https://discord.gg/innylink"
  }
];

// Pobranie sekcji serwerów
const serwerySection = document.getElementById("serwery");

// Funkcja tworząca kartę serwera
function createServerCard(server) {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <h3>${server.name}</h3>
    <p>${server.description}</p>
    <img src="${server.screenshot}" alt="Screenshot ${server.name}" class="card-img">
    <div class="card-buttons">
      <button class="details-btn">Pokaż szczegóły</button>
      <a href="${server.link}" target="_blank" class="btn-link">Przejdź do serwera</a>
    </div>
  `;

  // Obsługa przycisku "Pokaż szczegóły"
  const detailsBtn = card.querySelector(".details-btn");
  detailsBtn.addEventListener("click", () => {
    alert(`Screenshot serwera: ${server.screenshot}`);
  });

  return card;
}

// Wstawienie wszystkich serwerów
servers.forEach(server => {
  const card = createServerCard(server);
  serwerySection.appendChild(card);
});

document.querySelectorAll('.card-img').forEach(img => {
  img.addEventListener('click', () => {
    window.open(img.src, '_blank');
  });
});

document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', function(event) {

    const confirmLeave = confirm("Uwaga! Zaraz opuścisz stronę i przejdziesz do zewnętrznego linku. Czy chcesz kontynuować?");

    if(!confirmLeave){
      event.preventDefault();
    }

  });
});