const button = document.querySelector(".btn");
const input = document.querySelector(".input");
const text = document.querySelector(".error-text");

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

button.addEventListener("click", () => {
  const email = input.value;
  if (emailPattern.test(email)) {
    input.style.border = "1px solid black";
    text.style.display = "none";
    alert("Email send sucesfully");
  } else {
    text.style.display = "block";
    text.style.color = "red";
    input.style.border = "1px solid red";
  }
});
