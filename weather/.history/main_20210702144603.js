const apikey = "4f0c5f237b428cfe861db9dc06e5875a"
const url = (location)=>`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apikey}`;
async function getWeatherByLocation(location){
const resp = await fetch(url(location), {
    origin: "cors"
});
const respData=await resp.json();
console.log(respData, kToC(respData.main.temp));
}

getWeatherByLocation("Warszawa")

function kToC(k) {
    return (k -273.15).toFixed;
}

