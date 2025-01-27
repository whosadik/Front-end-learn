const button = document.getElementById("btn");
const emailInput = document.getElementById("input");
const showtext = document.getElementById("text-container");

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

button.addEventListener("click", () => {
  const email = emailInput.value;

  if (emailPattern.test(email)) {
    alert("Email sent successfully");
  } else {
    showtext.style.display = "block";
    showtext.textContent = "invalid email";
    showtext.style.color = "red";
  }
});
