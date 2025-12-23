document.addEventListener("DOMContentLoaded", () => {
    const splash = document.getElementById("splash");

    if (splash) {
        setTimeout(() => {
            splash.style.opacity = "0";
            splash.style.pointerEvents = "none";

            setTimeout(() => {
                splash.remove();
            }, 600);
        }, 1200);
    }
});
