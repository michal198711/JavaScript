const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");




function countdown() {
    const countDownDate = new Date("Dec, 2021 23:59:59").getTime();
    const now = new Date().getTime();
    
    const distanceCount  = now - countDownDate;
    console.log(distance)
    const distance = new Date().distanceCount
 //  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const days = distance.getDay()
 // const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)+1);
    const hours = distance.getHours()
 //  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const minutes = distance.minutes()
 // const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    const seconds = distance.seconds()
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
