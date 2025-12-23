document.addEventListener("DOMContentLoaded", () => {

    // Splash (index only)
    const splash = document.getElementById("splash");
    if (splash) {
        setTimeout(() => {
            splash.style.opacity = "0";
            setTimeout(() => splash.remove(), 600);
        }, 1200);
    }

    // Login logic
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            // Simulate login success
            window.location.assign("./index.html");
        });
    }
});
