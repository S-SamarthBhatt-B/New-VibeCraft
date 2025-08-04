// ========== Custom V Cursor Setup ==========
const cursor = document.getElementById("customV");
const trailContainer = document.getElementById("trail-container");

document.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  // Move the main V cursor
  cursor.style.left = `${x}px`;
  cursor.style.top = `${y}px`;

  // Create trail dot
  const dot = document.createElement("div");
  dot.className = "trail-dot";
  dot.style.left = `${x}px`;
  dot.style.top = `${y}px`;
  dot.style.backgroundColor = getTrailColor();
  trailContainer.appendChild(dot);

  // Remove after fade animation
  setTimeout(() => {
    trailContainer.removeChild(dot);
  }, 400);
});

// ========== Click Ripple ==========
document.addEventListener("click", (e) => {
  const ripple = document.createElement("div");
  ripple.className = "click-ripple";
  ripple.style.left = `${e.clientX}px`;
  ripple.style.top = `${e.clientY}px`;
  document.body.appendChild(ripple);

  // Remove after animation ends
  setTimeout(() => {
    ripple.remove();
  }, 600);
});

// ========== Rainbow Trail Colors ==========
let hue = 0;
function getTrailColor() {
  hue = (hue + 10) % 360;
  return `hsl(${hue}, 100%, 70%)`;
}
