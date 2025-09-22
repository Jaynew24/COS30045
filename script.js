// Highlight current page in nav (extra JS interactivity)
document.addEventListener("DOMContentLoaded", () => {
  const currentLocation = location.href;
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach(link => {
    if (link.href === currentLocation) {
      link.classList.add("active");
    }
  });
});
