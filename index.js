const manubar = document.getElementById("manu__icon2");
const navbar = document.getElementById("manu-icon");

manubar?.addEventListener("click", () => {
    navbar?.classList.toggle("hidden");
});

