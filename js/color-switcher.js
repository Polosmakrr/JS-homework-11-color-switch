const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    start: document.querySelector('[data-action="start"]'),
    stop: document.querySelector('[data-action="stop"]'),
    body: document.querySelector(`body`),
};


const colorsArray = [...colors];
let interv = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};


const start = () => {
    
    refs.start.setAttribute(`disabled`, true);
    refs.stop.removeAttribute(`disabled`);

     interv=setInterval(() => {
        const randomIndex = randomIntegerFromInterval(0, colorsArray.length-1);
        refs.body.style.backgroundColor = colorsArray[randomIndex];


}, 1000);

}

const stop = () => {
   
        refs.stop.setAttribute(`disabled`, true);
    refs.start.removeAttribute(`disabled`);

    clearInterval(interv);
    refs.body.style.backgroundColor = '';
};

refs.start.addEventListener('click', start);

refs.stop.addEventListener('click', stop);





