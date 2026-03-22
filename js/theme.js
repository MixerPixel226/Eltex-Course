const btnTheme = document.querySelector("#btn-theme");
const sunIcon = document.querySelector("#icon-sun");
const moonIcon = document.querySelector("#icon-moon");

const theme = localStorage.getItem("theme");
if (theme && theme === "dark") {
    document.body.classList.add("dark-theme");
    moonIcon.setAttribute("hidden", "");
    sunIcon.removeAttribute("hidden");
}

const toggleTheme = () => {
    const darkTheme = document.body.classList.toggle("dark-theme");

    if (darkTheme) {
        moonIcon.setAttribute("hidden", "");
        sunIcon.removeAttribute("hidden");
        localStorage.setItem("theme", "dark");
    } else {
        moonIcon.removeAttribute("hidden");
        sunIcon.setAttribute("hidden", "");
        localStorage.setItem("theme", "light");
    }
};

btnTheme.addEventListener("click", toggleTheme);
