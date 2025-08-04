// === V Cursor Movement ===
document.addEventListener("mousemove", (e) => {
  const cursor = document.getElementById("customV");
  if (cursor) {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  }

  // === Trail effect ===
  const trail = document.createElement("div");
  trail.className = "trail-dot";
  trail.style.left = `${e.clientX}px`;
  trail.style.top = `${e.clientY}px`;

  document.body.appendChild(trail);

  setTimeout(() => {
    trail.remove();
  }, 400);
});
