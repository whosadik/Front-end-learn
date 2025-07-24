const buttons = document.querySelectorAll(".pages button");
const cards = document.querySelectorAll(".card");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Убираем "active" у всех кнопок
    buttons.forEach((btn) => btn.classList.remove("active"));
    // Добавляем "active" к нажатой кнопке
    button.classList.add("active");

    // Загружаем данные для выбранного периода
    const period = button.getAttribute("data-period");
    updateCards(period);
  });
});

function updateCards(period) {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((item, index) => {
        if (cards[index]) {
          const current = item.timeframes[period].current;
          const previous = item.timeframes[period].previous;

          cards[index].querySelector(".card-title").textContent = item.title;
          cards[index].querySelector(
            ".card-time"
          ).textContent = `${current}hrs`;
          cards[index].querySelector(
            ".card-time-previous"
          ).textContent = `Last Week - ${previous}hrs`;
        }
      });
    })
    .catch((error) => console.error("Ошибка загрузки данных:", error));
}

// Загружаем данные для "weekly" при старте
updateCards("weekly");
