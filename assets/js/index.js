// Down To Arrow for Top, Down to Upper Button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Mouse Cursor Event
document.addEventListener("mousemove", (e) => {
  const cursor = document.getElementById("custom-cursor");
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});

document.addEventListener("mousedown", () => {
  const cursor = document.getElementById("custom-cursor");
  cursor.style.width = "30px"; // Adjust the width during click
  cursor.style.height = "30px"; // Adjust the height during click
});

document.addEventListener("mouseup", () => {
  const cursor = document.getElementById("custom-cursor");
  cursor.style.width = "20px"; // Reset the width after click
  cursor.style.height = "20px"; // Reset the height after click
});
