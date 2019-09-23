const loader = document.querySelector(".loader");
const header = document.querySelector(".header");
const content = document.querySelector(".main-content");

function init() {
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = "none";

    header.style.display = "block";
    content.style.display = "block";
    setTimeout(() => {
      header.style.opacity = 1;
      content.style.opacity = 1;
    }, 50);
  }, 3000);
}

init();
