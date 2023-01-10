
/*function alertNumber(val) {
alert("Prawdopodobny numer to: " + phoneNumber(val));
}*/

function showNumber(val){
document.getElementById("demo").innerHTML = "Prawdopodobny numer: "+ phoneNumber(val);
}
  function phoneNumber(daisyNumber) {
let wholeNumber=""
if (daisyNumber < 100) {
partOne = "515-110-";
partTwo = "0"+daisyNumber.toString();
return wholeNumber = partOne + partTwo;}
else if  (daisyNumber >100 && daisyNumber < 500) {
partOne = "515-110-";
partTwo = daisyNumber.toString();
return wholeNumber = partOne + partTwo;
} else if (daisyNumber > 500 && daisyNumber < 1000) {
partOne = "515-070-";
partTwo = daisyNumber.toString();
return wholeNumber = partOne + partTwo;
} else {
partOne = "571-331-";
partTwo = (daisyNumber.toString()).slice(1);
return wholeNumber = partOne + partTwo;
}
console.log(wholeNumber)
}
