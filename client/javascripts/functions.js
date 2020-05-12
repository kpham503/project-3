// jshint esversion: 6

//Req 4-B
let bitBatBotOrNot = n => {
let outcome = "";
  if (n % 3 == 0) {
    outcome = `${outcome}Bit`;
  } if (n % 5 == 0) {
    outcome= `${outcome}Bat`;
  } if (n % 7 == 0) {
    outcome = `${outcome}Bot`;
  } if ((n % 3 !== 0 && n % 5 !== 0 && n % 7 !== 0))  {
    outcome = `${outcome}Not`;
  } return outcome;
};

//Req 4-C
let findAllbitBatBotOrNots1 = (array) => {
const arr1 = array.map(bitBatBotOrNot);
var arr2 = array.map(function (x, i) {
  return `${x}: ${arr1[i]}`;
});
  return arr2;
};

//Req 4-D
let findAllbitBotOrNots2 = (array) => {
let arr1 = [];
for(var each in array) {
  arr1.push(array[each]+": "+bitBatBotOrNot(array[each]));
  }
  return arr1;
};

//Req 4-E
let findAllbitBatBotOrNots3 = (array) => {
let arr1 = [];
for(var each of array) {
  arr1.push(each+": "+bitBatBotOrNot(each));
  }
return arr1;
};

//Req 4-F
let findAllbitBatBotOrNots4 = (array) => {
let arr1=[];
    array.forEach((each) => {
      arr1.push(each + ": " + bitBatBotOrNot(each));
    });
return arr1;
};
