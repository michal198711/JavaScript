const apikey = "8e1d8f92dc61b5d7146b23ebf5565ef7"
const url -
async function getWeatherByLocation(location){
const resp = await fetch(APIURL + "location/search/?query=" + location, {});
const respData=await resp.json();
console.log(respData);}

getWeatherByLocation("London")



