fetch("https://covid-19-statistics.p.rapidapi.com/reports/total?date=2020-04-07", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "8cd23c7b9cmsh28eae71f0257f7dp1acf63jsnf727dc887595",
		"x-rapidapi-host": "covid-19-statistics.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});