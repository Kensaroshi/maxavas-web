// Internal system: no auth, no login, no mutation
// Purpose: display-only financial snapshot

document.body.animate(
  [
    { opacity: 0, transform: "scale(0.98)" },
    { opacity: 1, transform: "scale(1)" }
  ],
  {
    duration: 420,
    easing: "cubic-bezier(0.22,1,0.36,1)",
    fill: "forwards"
  }
);
