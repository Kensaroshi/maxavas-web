document.addEventListener("DOMContentLoaded", () => {

    /* ---------- Splash ---------- */
    const splash = document.getElementById("splash");
    if (splash) {
        setTimeout(() => {
            splash.style.opacity = "0";
            setTimeout(() => splash.remove(), 600);
        }, 1200);
    }

    /* ---------- Login ---------- */
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const user = document.getElementById("username").value;
            const pass = document.getElementById("password").value;

            // fake auth success
            localStorage.setItem("loggedIn", "true");
            localStorage.setItem("username", user);

            window.location.assign("./index.html");
        });
    }

    /* ---------- Auth State ---------- */
    const isLoggedIn = localStorage.getItem("loggedIn") === "true";

    const navAuth = document.getElementById("navAuth");
    const profileBtn = document.getElementById("profileBtn");
    const profileMenu = document.getElementById("profileMenu");

    if (isLoggedIn) {
        if (navAuth) navAuth.style.display = "none";
        if (profileBtn) profileBtn.classList.remove("hidden");
    }

    /* ---------- Profile Dropdown ---------- */
    if (profileBtn && profileMenu) {
        profileBtn.addEventListener("click", () => {
            profileMenu.classList.toggle("show");
        });
    }

    /* ---------- Logout ---------- */
    const logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            localStorage.clear();
            window.location.reload();
        });
    }
});
