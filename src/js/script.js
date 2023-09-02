const buttons = document.querySelectorAll(".button");
const buttonText = buttons.textContent;
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const isButtonActive = button.classList.contains("button_active");

    if (isButtonActive) {
      button.textContent = "+";
    } else {
      button.textContent = "- Стадион";
    }

    button.classList.toggle("button_active");
    span.classList.toggle("text_visible");
  });
});
