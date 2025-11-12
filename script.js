const btn = document.querySelector(".btn");
const input = document.querySelector(".email-input");
const errorMessage = document.querySelector(".error-message");
const form = document.querySelector(".form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (input.value.includes("@") && input.value.includes(".")) {
    errorMessage.classList.add("hidden");
    input.classList.remove("input-error");
    form.submit();
  } else {
    errorMessage.classList.remove("hidden");
    input.classList.add("input-error");
  }
});
