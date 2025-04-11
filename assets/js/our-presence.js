// Functionality For Our Presence Gallery Section

let currentGalleryPage = 1;

function showGallery(page, btn = null) {
  currentGalleryPage = page;

  // Hide all gallery sections and headings
  for (let i = 1; i <= 7; i++) {
    document.getElementById("gallery" + i).style.display = "none";
    document.getElementById("heading" + i).style.display = "none";
  }

  // Show selected gallery and heading
  document.getElementById("gallery" + page).style.display = "grid";
  document.getElementById("heading" + page).style.display = "block";

  // Update active pagination button
  document
    .querySelectorAll(".pagination button")
    .forEach((b) => b.classList.remove("active"));
  const allButtons = document.querySelectorAll(".pagination button");
  if (btn) {
    btn.classList.add("active");
  } else {
    // Mark correct number button as active
    allButtons.forEach((b) => {
      if (b.innerText === String(page)) b.classList.add("active");
    });
  }
}

function changeGallery(direction) {
  if (direction === "prev" && currentGalleryPage > 1) {
    showGallery(currentGalleryPage - 1);
  } else if (direction === "next" && currentGalleryPage < 7) {
    showGallery(currentGalleryPage + 1);
  }
}

// Initialize first gallery
window.addEventListener("DOMContentLoaded", () =>
  showGallery(1, document.querySelector(".pagination button:nth-child(2)"))
);
