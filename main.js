const startButton = document.querySelector('.main');
const resetButton = document.querySelector('.reset');
const panel = document.querySelector('.time div');

let idInt;

let time = 0;

let active = false;

const timer = () => {
  if (!active) {
    active = !active;
    startButton.textContent = 'Pause';

    const counting = () => {
      time++;
      panel.textContent = (time / 100).toFixed(2);

    }

    idInt = setInterval(counting, 10);

  } else {
    active = !active;
    startButton.textContent = 'Start';
    clearInterval(idInt)
  }
}
const restart = () => {
  panel.textContent = '---';
  time = 0;
  active = false;
  startButton.textContent = 'Start';
  clearInterval(idInt)
}



startButton.addEventListener('click', timer)
resetButton.addEventListener('click', restart)