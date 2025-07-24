let selectedRating = null;

document.querySelectorAll(".rate button").forEach((button) => {
  button.addEventListener("click", () => {
    selectedRating = button.getAttribute("data-rating");
  });
});

document.querySelector(".btn").addEventListener("click", () => {
  if (!selectedRating) {
    alert("Please select a rating before submitting!");
    return;
  }

  // Скрываем контейнер с оценкой
  document.querySelector(".container").style.display = "none";

  // Показываем благодарственное сообщение
  const thankYouSection = document.querySelector(".thank-u");
  thankYouSection.style.display = "flex";

  // Вставляем выбранный рейтинг
  document.getElementById("user-rating").textContent = selectedRating;
});
