function toggleTheme() {
    const elementRef = document.querySelector(".dark");
    const currentTheme = elementRef.style.backgroundColor;
    if (currentTheme === "red") {
        // Switch to white theme
        elementRef.style.backgroundColor = "purple";
        elementRef.style.color = "red";
    } else {
        // Switch to black theme
        elementRef.style.backgroundColor = "red";
        elementRef.style.color = "purple";
    }
}
