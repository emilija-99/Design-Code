const secondHand = document.querySelector('.second-hand');
const hourHand = document.querySelector('.hour-hand');
const  minHand = document.querySelector('.min-hand');

function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDeg = ((seconds/60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDeg}deg)`;

    const min = now.getMinutes();
    const minDeg = ((min/60)*360)+90;
    minHand.style.transform = `rotate(${minDeg}deg)`;

    const hour = now.getHours();
    const hourDeg = ((min / 12)*360)+90;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(setDate, 1000);