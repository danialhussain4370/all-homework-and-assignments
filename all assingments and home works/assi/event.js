const toggleButton = document.querySelector("#toggleButton");
const toggleParagraph = document.querySelector("#toggleParagraph");

toggleButton.addEventListener("click", () => {
  toggleParagraph.classList.toggle("hidden");
});