let myInterval;
let digit = 0;
const buttonSound = document.querySelector('#clickSound');

const playSound = () => {
    clickSound.currentTime = 0;
    clickSound.play();
};


function clearAll() {
    clearInterval(myInterval);
    document.getElementById('h1').innerText = '0';
    playSound();
}

function count() {
    document.getElementById('h1').innerText = digit;
    digit++;
}
  
document.getElementById('start').addEventListener('click', () => {
    myInterval = setInterval(count, 1); // Adjust the interval duration as needed
    playSound();
});

document.getElementById('stope').addEventListener('click', () => {
    clearInterval(myInterval);
    playSound();
});

document.getElementById('clear').addEventListener('click', () => {
    digit = 0;
    clearAll();
    playSound();
});
