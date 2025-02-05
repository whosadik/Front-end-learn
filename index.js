document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("input"); // Поле ввода email
  const errorMessage = document.getElementById("error-text"); // Сообщение об ошибке

  emailInput.addEventListener("input", function () {
    validateEmail();
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (validateEmail()) {
      window.location.href = "success.html";
    }
  });

  function validateEmail() {
    const email = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      emailInput.style.border = "2px solid hsl(4, 100%, 67%)";
      emailInput.style.color = "hsl(4, 100%, 67%)";
      errorMessage.style.display = "block";
      return false;
    } else {
      emailInput.style.border = "2px solid green";
      emailInput.style.color = "black";
      errorMessage.textContent = "";
      errorMessage.style.display = "none";
      return true;
    }
  }
});
