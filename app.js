import "./src/locales/index.js";
import "./src/locales/prices.js";

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".subs-option__btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", function () {
      buttons.forEach((b) => b.classList.remove("subs-option__btn--active"));
      this.classList.add("subs-option__btn--active");
    });
  });
});
