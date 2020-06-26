//nav scroll effect

let header = document.getElementById("nav");

window.addEventListener("scroll", (e) => {
  // console.log("scroll");
  let scroll = window.pageYOffset;
  if (scroll >= 60) {
    // console.log("scrolled");
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
