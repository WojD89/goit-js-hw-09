const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const bodyBackground = document.querySelector('body');
let intervalSetup;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const backgroundColorStart = function () {
  intervalSetup = setInterval(() => {
    bodyBackground.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startBtn.setAttribute('disabled', true);
  stopBtn.removeAttribute('disabled');
};

const backgroundColorStop = function () {
  clearInterval(intervalSetup);
  startBtn.removeAttribute('disabled');
  stopBtn.setAttribute('disabled', true);
};

startBtn.addEventListener('click', backgroundColorStart);
stopBtn.addEventListener('click', backgroundColorStop);
