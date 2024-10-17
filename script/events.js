const toggles= document.querySelector(".menu_toggle");
const nav = document.querySelector(".nav");

toggles.addEventListener("click", () => {
  if (toggles.textContent === "☰") {
    toggles.textContent = "✖"; // Switch to 'X'
    nav.style.display = "flex";
  } else {
    toggles .textContent = "☰";
    nav.style.display = "none";// Switch back to '☰'
  }
})

