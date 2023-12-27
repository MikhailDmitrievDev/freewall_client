const left = () => {
  document.querySelector(".screen_first").classList.toggle("active_screen");
  document.querySelector(".span_1").classList.add("active");
  document.querySelector(".span_2").classList.remove("active");
};

const right = () => {
  document.querySelector(".screen_second").classList.toggle("active_screen");
  document.querySelector(".span_1").classList.remove("active");
  document.querySelector(".span_2").classList.add("active");
};

const divElement = document.querySelector(".lock_screen");
divElement.addEventListener("click", function () {
  document.querySelector(".lock_screen").classList.remove("active");
  document.querySelector(".application_menu").style.transform = 'none';
  document.querySelector('ion-icon').setAttribute('lock-closed', 'lock-open');
  // Обработчик события нажатия на div
  console.log("Нажатие на div!");
});

window.addEventListener('load', function() {
    const bodyElement = document.body;
    bodyElement.style.transform = 'translateY(0%)';
  });