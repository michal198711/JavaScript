const apikey = "8e1d8f92dc61b5d7146b23ebf5565ef7"
const url = (location)=>`api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apikey}`;
async function getWeatherByLocation(location){
const resp = await fetch(url() {});
const respData=await resp.json();
console.log(respData);}

getWeatherByLocation("London")



