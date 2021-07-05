const APIURL = "https://www.metawather.com/api/"
async function getWeatherByLocation(location){}
const resp = await fetch(APIURL + "location/search/?query=") + location, {});
const respData=await resp.json();
console.log(respData);

getWeatherByLocation("London")