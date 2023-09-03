const buttons = document.querySelectorAll(".marker");

buttons.forEach((button, currentIndex) => {
  button.addEventListener("click", (event) => {
    buttons.forEach((button, index) => {
      if (currentIndex === index) {
        button.classList.toggle("marker_active");
      } else {
        button.classList.remove("marker_active");
      }
    });

    event.stopPropagation();
  });
});

document.addEventListener("click", () => {
  buttons.forEach((button) => {
    button.classList.remove("marker_active");
  });
});
