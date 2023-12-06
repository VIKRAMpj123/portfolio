let body = document.querySelector("body");
let toggleBtn = document.querySelector(".toggle-btn");

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
});
