const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");



const lastVisit = "16 mar 2021 16:00";
function countdown() {
    const lastVisitDate = new Date(lastVisit);
    const currentDate = new Date();
    const totalSeconds = ( currentDate - lastVisitDate ) / 1000;
    const days = Math.floor(totalSeconds /3600/24);
    const hours =   Math.floor(totalSeconds /3600) % 24;
    const minutes = Math.floor(totalSeconds /60) %24;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML=formatTime(days);
    hoursEl.innerHTML=formatTime(hours);
    minsEl.innerHTML=formatTime(minutes);
    secondsEl.innerHTML=formatTime(seconds);


    
};

function formatTime(time)
{
return time <10 ? `0${time}` : time;
}
countdown();
setInterval(countdown, 1000)