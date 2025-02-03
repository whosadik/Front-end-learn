document.addEventListener("DOMContentLoaded", function () {
  const toggleButtons = document.querySelectorAll("#toggleButton");
  const profileBottom = document.querySelector(".profile-bottom");
  const shareBottom = document.querySelector(".share-bottom");

  toggleButtons.forEach((button) => {
    button.addEventListener("click", function () {
      profileBottom.classList.toggle("hidden");
      shareBottom.classList.toggle("hidden");
    });
  });
});
