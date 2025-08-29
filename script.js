// Your code here.
// Animate skill bars to their data-percentage values
window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".fill").forEach(span => {
    const pct = parseInt(span.getAttribute("data-percentage"), 10) || 0;
    // clamp 0..100 to be safe
    const safe = Math.max(0, Math.min(100, pct));
    span.style.width = safe + "%";
  });
});
