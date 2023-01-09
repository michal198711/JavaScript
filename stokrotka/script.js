function phoneNumber(daisyNumber) {
    let wholeNumber=""
  if (daisyNumber < 500) {
    partOne = "515110";
    partTwo = daisyNumber.toString();
    return wholeNumber = partOne + partTwo;
  } else if (daisyNumber > 500 && daisyNumber < 1000) {
    partOne = "515070 ";
    partTwo = daisyNumber.toString();
    return wholeNumber = partOne + partTwo;
  } else {
    partOne = "57133";
    partTwo = daisyNumber.toString();
    return wholeNumber = partOne + partTwo;
  }
}
