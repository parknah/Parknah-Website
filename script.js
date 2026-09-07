const searchButton = document.getElementById("searchButton");

searchButton?.addEventListener("click", () => {
  const location = document.getElementById("location").value.trim();
  const date = document.getElementById("date").value;

  if (!location) {
    alert("Bitte gib zuerst einen Ort, eine Adresse oder eine PLZ ein.");
    return;
  }

  alert(
    `Stellplatzsuche für ${location}` +
    (date ? ` am ${date}` : "") +
    ".\n\nDie echte Suche wird im nächsten Schritt mit Supabase verbunden."
  );
});

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger?.addEventListener("click", () => {
  const open = nav.classList.toggle("nav--open");
  hamburger.setAttribute("aria-expanded", String(open));
});
