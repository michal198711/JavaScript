const APIURL = "https://www.metawather.com/api/"
async function getWeatherByLocation(){
const resp = await fetch( APIURL + "location/search/?query=") + location, {});
const respData=await resp.je

}


}
getWeatherByLocation("London")