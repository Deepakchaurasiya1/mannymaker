// Down To Arrow for Top, Down to Upper Button
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
};

function scrollToTop() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}


