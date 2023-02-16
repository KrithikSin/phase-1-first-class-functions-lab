// Code your solution in this file!
const returnFirstTwoDrivers = (arr) => {
  let newArr = arr.slice(0, 2);
  return newArr;
};

const returnLastTwoDrivers = (arr) => {
  let newArr = arr.slice(-2, arr.length);
  return newArr;
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (multiplier) => {
  return function (fare) {
    return fare * multiplier;
  };
};

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (arrOfDrivers, func) => {
  if (func === returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(arrOfDrivers);
  } else if (func === returnLastTwoDrivers) {
    return returnLastTwoDrivers(arrOfDrivers);
  }
};
