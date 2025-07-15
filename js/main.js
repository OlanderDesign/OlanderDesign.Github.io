AOS.init();
document.getElementById("themeToggle").addEventListener("click", function () {
    const html = document.documentElement;
    const currentTheme = html.getAttribute("data-bs-theme");
    html.setAttribute("data-bs-theme", currentTheme === "dark" ? "light" : "dark");
});

// Vis en tak-besked uden side-reload
document.getElementById("kontaktForm").addEventListener("submit", async function (e) {
    e.preventDefault(); // Forhindrer siden i at reloade

    const form = e.target;
    const data = new FormData(form);

    const response = await fetch(form.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
    });

    if (response.ok) {
    document.getElementById("beskedPopup").style.display = "block";
    form.reset();
    } else {
    alert("Ups! Noget gik galt. Prøv igen.");
    }
});