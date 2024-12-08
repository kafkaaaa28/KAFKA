let button = document.getElementById('btn');
let kata = document.getElementById('quote');
let pengarang = document.getElementById('authorr');

let ubah = document.getElementById('change');
let bg = document.getElementById('bg');
ubah.addEventListener('input', function (event) {
  let changecolor = event.target.value;
  bg.style.transition = '1s';
  bg.style.backgroundColor = changecolor;
});

document.getElementById('changeborder').addEventListener('input', function (event) {
  let changecolor1 = event.target.value;
  document.getElementById('bgborder').style.backgroundColor = changecolor1;
});

document.getElementById('changetext').addEventListener('input', function (event) {
  let textColor = event.target.value;
  document.getElementById('quote').style.color = textColor;
  document.getElementById('authorr').style.color = textColor;
});

let quotes = [
  { text: 'I am not a hero. I am not a saint. I m just a man who s trying to atone for the sins he committed.', author: 'Kenshin Himura' },
  { text: 'No matter how deep the night, it always turns to day, eventually.', author: 'Naruto Uzumaki' },
  { text: "If the king doesn't lead, how can he expect his subordinates to follow?", author: 'Lelouch Lamperouge' },
  { text: 'I don t want to conquer anything. I just think the guy with the most freedom in this whole ocean… is the Pirate King!', author: 'Monkey D. Luffy' },
  { text: 'The only thing we re allowed to do is to believe that we won t regret the choice we made.', author: 'Guts' },
  { text: 'Sometimes it s not the people who change, it s the people around them.', author: 'Kenshin Himura' },
  { text: 'You should enjoy the little detours. Sometimes they lead to the best parts of life.', author: 'Eureka' },
  { text: 'A lesson without pain is meaningless. That s because no one can gain without sacrificing something.', author: 'Edward Elric' },
  { text: 'If you don’t take risks, you can t create a future!', author: 'Naruto Uzumaki' },
  { text: 'It s not the face that makes someone a monster; it s the choices they make with their lives.', author: 'Naruto Uzumaki' },
];

function generate() {
  let randomindex = Math.floor(Math.random() * quotes.length);
  let randomquote = quotes[randomindex];
  kata.textContent = `”${randomquote.text}”`;
  pengarang.textContent = ` - ${randomquote.author}`;
}

button.addEventListener('click', generate);
generate();
const modalCheckbox2 = document.getElementById('my-modal-6');

let tampil = document.getElementById('display');
function appendToDisplay(num) {
  tampil.value += num;
}

function clearDisplay() {
  tampil.value = '';
}
function del() {
  tampil.value = tampil.value.slice(0, -1);
}

function calculate() {
  try {
    tampil.value = eval(tampil.value);
  } catch {
    modalCheckbox2.checked = true;
  }
}
let waktu = document.getElementById('waktu');
let countdown = document.getElementById('countdown');
let elementdays = document.getElementById('days');
let elementhours = document.getElementById('hours');
let elementminutes = document.getElementById('minutes');
let elementseconds = document.getElementById('seconds');
let inputhours = document.getElementById('inputhours');
let inputminutes = document.getElementById('inputminutes');
let inputseconds = document.getElementById('inputseconds');
let startButton = document.getElementById('startbutton');
let countdowntimer;

function startTimer() {
  const modalCheckbox = document.getElementById('my-modal-4');
  const modalCheckbox1 = document.getElementById('my-modal-5');

  let hours = parseInt(inputhours.value) || 0;
  let minutes = parseInt(inputminutes.value) || 0;
  let seconds = parseInt(inputseconds.value) || 0;

  let totalTimeInSeconds = hours * 3600 + minutes * 60 + seconds;

  if (totalTimeInSeconds <= 0) {
    modalCheckbox1.checked = true;
    return;
  }
  inputhours.value = '';
  inputminutes.value = '';
  inputseconds.value = '';

  countdowntimer = setInterval(() => {
    const days = Math.floor(totalTimeInSeconds / 86400);
    const hours = Math.floor((totalTimeInSeconds % 86400) / 3600);
    const minutes = Math.floor((totalTimeInSeconds % 3600) / 60);
    const seconds = Math.floor(totalTimeInSeconds % 60);

    elementdays.textContent = days.toString().padStart(2, '0');
    elementhours.textContent = hours.toString().padStart(2, '0');
    elementminutes.textContent = minutes.toString().padStart(2, '0');
    elementseconds.textContent = seconds.toString().padStart(2, '0');

    totalTimeInSeconds--;

    if (totalTimeInSeconds < 0) {
      clearInterval(countdowntimer);
      modalCheckbox.checked = true;
    }
  }, 1000);
  waktu.textContent = `${hours} hours ${minutes} minutes ${seconds} seconds`;
}
startButton.addEventListener('click', () => {
  clearInterval(countdowntimer);
  startTimer();
});
