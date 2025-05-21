// const slides = [
//   { year: 1971, title: "Beginning of wire drawing", text: "Our journey began..." },
//   { year: 1980, title: "Expanded Operations", text: "Expanded in..." },
//   { year: 1990, title: "Expanded Operations", text: "Expanded in..." },
//   { year: 1900, title: "Expanded Operations", text: "Expanded in..." },
//   { year: 1970, title: "Expanded Operations", text: "Expanded in..." },
//   { year: 1940, title: "Expanded Operations", text: "Expanded in..." },
//   { year: 1920, title: "Expanded Operations", text: "Expanded in..." },
//   // ... add up to 10 objects
// ];
// let activeIndex = 0;

// const slideContainer = document.getElementById("slideContainer");
// const ballContainer = document.getElementById("ballContainer");

// function renderSlide(index) {
//   const slide = slides[index];
//   slideContainer.innerHTML = `
//     <h2>${slide.year}</h2>
//     <h3>${slide.title}</h3>
//     <p>${slide.text}</p>
//   `;
// }

// function renderBalls(index) {
//   ballContainer.innerHTML = "";

//   const start = Math.max(0, index - 1);
//   const end = Math.min(slides.length - 1, index + 1);

//   const displayIndices = [];
//   if (index === 0) displayIndices.push(0, 1, 2);
//   else if (index === slides.length - 1) displayIndices.push(index - 2, index - 1, index);
//   else displayIndices.push(index - 1, index, index + 1);

//   displayIndices.forEach(i => {
//     if (i >= 0 && i < slides.length) {
//       const ball = document.createElement("div");
//       ball.className = "ball" + (i === index ? " active" : "");
//       ball.innerText = slides[i].year;
//       ball.addEventListener("click", () => {
//         activeIndex = i;
//         updateSlider();
//       });
//       ballContainer.appendChild(ball);
//     }
//   });
// }

// function updateSlider() {
//   renderSlide(activeIndex);
//   renderBalls(activeIndex);
// }

// document.getElementById("nextBtn").addEventListener("click", () => {
//   if (activeIndex < slides.length - 1) {
//     activeIndex++;
//     updateSlider();
//   }
// });

// document.getElementById("prevBtn").addEventListener("click", () => {
//   if (activeIndex > 0) {
//     activeIndex--;
//     updateSlider();
//   }
// });

// // Initialize
// updateSlider();

// ----------------------------------------------------------------------------------------------------------------------

// let timelineBall = document.querySelectorAll(".timeline-ball");
// timelineBall.forEach((ball) => {
//   ball.addEventListener("click", function () {
//     timelineBall.forEach((b) => {
//       // Get current marginLeft in px/rem, convert to rem, and subtract 5.3rem
//       let currentMargin = window.getComputedStyle(b).marginLeft;
//       let currentValue = parseFloat(currentMargin);
//       let isRem = currentMargin.includes('rem');
//       let shift = 5.3;
//       let newValue;
//       if (isRem) {
//         newValue = currentValue - shift;
//         b.style.marginLeft = `${newValue}rem`;
//       } else {
//         // If px, convert 5.3rem to px (assuming 1rem = 16px)
//         let pxShift = shift * 16;
//         newValue = currentValue - pxShift;
//         b.style.marginLeft = `${newValue}px`;
//       }
//       b.classList.remove("active");
//     });
//     this.classList.add("active");
//   });
// });


// ----------------------------------------------------------------------------------------------------------------------
let timelineBalls = document.querySelectorAll('.timeline-ball');

timelineBalls.forEach((ball) => {
  ball.addEventListener('click', function () {
    // Remove active from all, add to clicked
    timelineBalls.forEach(b => b.classList.remove('active'));
    this.classList.add('active');

    // Shift all balls left by 5rem from current left
    timelineBalls.forEach(b => {
      let currentLeft = window.getComputedStyle(b).left;
      let value = parseFloat(currentLeft);
      let isRem = currentLeft.includes('rem');
      let shift = 5; // rem

      if (isRem) {
        b.style.left = (value - shift) + 'rem';
      } else {
        // If px, convert 5rem to px (assuming 1rem = 16px)
        b.style.left = (value - shift * 16) + 'px';
      }
    });
  });
});