let lat;
let long;
const apiKey = "8e1d8f92dc61b5d7146b23ebf5565ef7";

function startApp() {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(
            (position)=> {
                lat=position.coords.latitude;
                long = position.coords.longitude;
                console.log('lat:', lat, 'long:', long)
            getWeatherData()
            }
        );
    }
}
function  getWeatherData() {
let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${apiKey}`;
console.log(url)
fetch(url).then( function(response){
    response.json().then(function(data){
        console.log(data);
        updateWeatherData(data);
    });
});
}

function updateWeatherData(data) {
    const imgUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    const city = data.name;
    const temp =data.main.temp;
    const pressure = data.main.pressure;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    const cloudsPercentage = data.clouds.all;
    const sunRise = new Date(data.sys.sunrise*1000);
    const sunSet = new Date(data.sys.sunset*1000);
    document.getElementById("locationLink").innerHTML= city;
    document.getElementById("locationLink").href = `https://openstreetmap.org/#map=18/${lat}/${long}`;
    document.getElementById("currentWeatherImg").setAttribute("src", imgUrl);
    document.getElementById("temp").innerHTML = temp;
    document.getElementById("pressure").innerHTML = pressure;
    document.getElementById("humidity").innerHTML = humidity;
    document.getElementById("windSpeed").innerHTML = windSpeed;
    document.getElementById("cloudsPerc").innerHTML = cloudsPercentage;
    document.getElementById("sunRise").innerHTML = sunRise.getHours()+ ":" + formatTime(sunRise.getMinutes()) + ":"+ formatTime(sunRise.getSeconds());
    document.getElementById("sunSet").innerHTML = sunSet.getHours()+":"+formatTime(sunSet.getMinutes())+":"+ formatTime(sunSet.getSeconds());

}

function formatTime(time)
{
return time <10 ? `0${time}` : time;
}
