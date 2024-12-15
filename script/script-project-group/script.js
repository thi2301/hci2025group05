function openNav() {
  document.querySelector(".sidebar").classList.add("open");
  document.querySelector(".backdrop").classList.add("visible");
  document.body.classList.add("no-scroll"); /* Ngăn cuộn trang */
}

function closeNav() {
  document.querySelector(".sidebar").classList.remove("open");
  document.querySelector(".backdrop").classList.remove("visible");
  document.body.classList.remove("no-scroll");
}

document.querySelector(".backdrop").addEventListener("click", closeNav);