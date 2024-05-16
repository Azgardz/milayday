const popup = document.querySelector(".popup");
document.querySelector(".yes").onclick = () => {
  popup.classList.toggle("active");
  document.querySelector("#music").play();
};

document.querySelector(".no").onclick = () => {
  popup.classList.toggle("active");
};

// toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// hamburger menu onclick
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// tutup navbar untuk random tap
const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
