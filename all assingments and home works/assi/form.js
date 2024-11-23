const userForm = document.getElementById("userForm");
const displayName = document.getElementById("displayName");
const displayEmail = document.getElementById("displayEmail");

userForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("nameInput").value;
  const email = document.getElementById("emailInput").value;

  displayName.textContent = name;
  displayEmail.textContent = email;
});