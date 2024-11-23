function initTheme() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark");
    }
  }

  function toggleTheme() {
    document.body.classList.toggle("dark");
    const currentTheme = document.body.classList.contains("dark")
      ? "dark"
      : "light";
    localStorage.setItem("theme", currentTheme);
  }

  initTheme();

  const themeToggleBtn = document.querySelector(".themeToggleBtn");
  themeToggleBtn.addEventListener("click", toggleTheme);