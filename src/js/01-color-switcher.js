function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const startBtn = document.querySelector('[data-start]')
const stopBtn = document.querySelector('[data-stop]')
let colorChangeInterval = null; 

startBtn.addEventListener('click', changeBackgroundClr);
function changeBackgroundClr() {
    if (colorChangeInterval !== null) {
        return;
    }
    colorChangeInterval = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);

    startBtn.disabled = true;
    stopBtn.disabled = false;
};

stopBtn.addEventListener('click', () => {
    clearInterval(colorChangeInterval);
    colorChangeInterval = null;

    startBtn.disabled = false;
    stopBtn.disabled = true;
});
