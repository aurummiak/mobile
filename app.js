import "./src/locales/lang.js";

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".subs-option__btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", function () {
      buttons.forEach((b) => b.classList.remove("subs-option__btn--active"));
      this.classList.add("subs-option__btn--active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const options = document.querySelectorAll(".subs-option__btn");
  const continueBtn = document.getElementById("continue-btn");

  let selectedUrl = document.querySelector(".subs-option__btn--active")?.dataset.url;
  continueBtn.setAttribute("href", selectedUrl);

  options.forEach(option => {
    option.addEventListener("click", function () {
      options.forEach(opt => opt.classList.remove("subs-option__btn--active"));
      this.classList.add("subs-option__btn--active");

      selectedUrl = this.dataset.url;
      continueBtn.setAttribute("href", selectedUrl);
    });
  });
});


