const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");




function countdown() {
    const countDownDate = new Date("Aug 27, 2021 13:00:00").getTime();
    const now = new Date().getTime();
    
    const distance  =countDownDate- now  ;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)+1);
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

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
