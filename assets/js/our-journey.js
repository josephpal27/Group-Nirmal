let contentBoxes = document.querySelectorAll(".journey-content");
let balls = document.querySelectorAll(".ball");
let progressBoxes = document.querySelectorAll(".progress-box");
let backButton = document.getElementById("back-button");
let scrollbarContainer = document.querySelector(".scrollbar-container");
let scrollbar = document.querySelector(".scrollbar");

function hideAllBoxes() {
    contentBoxes.forEach((box) => {
        box.style.display = "none";
    });
}

hideAllBoxes();
contentBoxes[0].style.display = "block";

let currentIndex = 0;

balls.forEach((ball, index) => {
    ball.addEventListener("click", function () {
        hideAllBoxes();
        contentBoxes[index].style.display = "block";
        currentIndex = index;

        progressBoxes.forEach((box, ind) => {
            box.style.left = `${ind * 15}rem`;
            box.style.top = "-50px";
            let year = box.querySelector(".year");
            year.style.transform = "scale(1.0)";
            year.style.opacity = "1";
            year.style.top = "0";
            year.style.paddingBottom = "0";
            year.style.fontWeight = "normal";
        });

        for (let i = 0; i < index; i++) {
            balls[i].style.display = "none";
        }

        for (let i = index + 1; i < progressBoxes.length; i++) {
            progressBoxes[i].style.left = `${(i - index) * 15}rem`;
        }

        let clickedBox = progressBoxes[index];
        clickedBox.style.left = "-2rem";
        clickedBox.style.top = "-50px";

        let year = clickedBox.querySelector(".year");
        year.style.top = "-105px";
        year.style.fontWeight = "bold";
        year.style.transform = "scale(1.3)";

        for (let i = 0; i < index; i++) {
            let year = progressBoxes[i].querySelector(".year");
            year.style.opacity = "0";
        }
    });
});

backButton.addEventListener("click", function () {
    if (currentIndex > 0) {
        currentIndex--;
        balls[currentIndex].click();
        balls[currentIndex].style.display = "block";
    }
});
scrollbarContainer.addEventListener("mousemove", function (e) {
    let containerRect = scrollbarContainer.getBoundingClientRect();
    let mouseX = e.clientX - containerRect.left;
    let maxLeft = scrollbarContainer.clientWidth - scrollbar.clientWidth;
    let newLeft = Math.max(0, Math.min(mouseX, maxLeft));
    scrollbar.style.left = newLeft + "px";

    let scrollPercent = newLeft / maxLeft;
    let newIndex = Math.round(scrollPercent * (balls.length - 1));
    if (newIndex !== currentIndex) {
        balls[newIndex].click();
    }
});