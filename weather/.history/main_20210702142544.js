const apikey = "4f0c5f237b428"
const url = (location)=>`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apikey}`;
async function getWeatherByLocation(location){
const resp = await fetch(url(location), {
    origin: "cors"
});
const respData=await resp.json();
console.log(respData);}

getWeatherByLocation("London")



