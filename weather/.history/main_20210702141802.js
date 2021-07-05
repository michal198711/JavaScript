const apikey = "8e1d8f92dc61b5d7146b23ebf5565ef7"
const url = (location)=>`api.openweathermap.org/data/2.5/weather?q=${city name}&appid=8e1d8f92dc61b5d7146b23ebf5565ef7"`
async function getWeatherByLocation(location){
const resp = await fetch(APIURL + "location/search/?query=" + location, {});
const respData=await resp.json();
console.log(respData);}

getWeatherByLocation("London")



