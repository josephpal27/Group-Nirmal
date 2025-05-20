const slides = [
  { year: 1971, title: "Beginning of wire drawing", text: "Our journey began..." },
  { year: 1980, title: "Expanded Operations", text: "Expanded in..." },
  { year: 1990, title: "Expanded Operations", text: "Expanded in..." },
  { year: 1900, title: "Expanded Operations", text: "Expanded in..." },
  { year: 1970, title: "Expanded Operations", text: "Expanded in..." },
  { year: 1940, title: "Expanded Operations", text: "Expanded in..." },
  { year: 1920, title: "Expanded Operations", text: "Expanded in..." },
  // ... add up to 10 objects
];
let activeIndex = 0;

const slideContainer = document.getElementById("slideContainer");
const ballContainer = document.getElementById("ballContainer");

function renderSlide(index) {
  const slide = slides[index];
  slideContainer.innerHTML = `
    <h2>${slide.year}</h2>
    <h3>${slide.title}</h3>
    <p>${slide.text}</p>
  `;
}

function renderBalls(index) {
  ballContainer.innerHTML = "";

  const start = Math.max(0, index - 1);
  const end = Math.min(slides.length - 1, index + 1);

  const displayIndices = [];
  if (index === 0) displayIndices.push(0, 1, 2);
  else if (index === slides.length - 1) displayIndices.push(index - 2, index - 1, index);
  else displayIndices.push(index - 1, index, index + 1);

  displayIndices.forEach(i => {
    if (i >= 0 && i < slides.length) {
      const ball = document.createElement("div");
      ball.className = "ball" + (i === index ? " active" : "");
      ball.innerText = slides[i].year;
      ball.addEventListener("click", () => {
        activeIndex = i;
        updateSlider();
      });
      ballContainer.appendChild(ball);
    }
  });
}

function updateSlider() {
  renderSlide(activeIndex);
  renderBalls(activeIndex);
}

document.getElementById("nextBtn").addEventListener("click", () => {
  if (activeIndex < slides.length - 1) {
    activeIndex++;
    updateSlider();
  }
});

document.getElementById("prevBtn").addEventListener("click", () => {
  if (activeIndex > 0) {
    activeIndex--;
    updateSlider();
  }
});

// Initialize
updateSlider();
