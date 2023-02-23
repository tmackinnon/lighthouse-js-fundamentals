const loopyLighthouse = function (range, multiples, words) {
  for (let num = range[0]; num <= range[1]; num++) {
    if ((num % 2 === 0) && (num % 5 === 0)) {
      console.log(words[0] + words[1]);
    } else if (num % 2 === 0) {
      console.log(words[0]);
    } else if (num % 5 === 0) {
      console.log(words[1]);
    } else {
      console.log(num);
    }
  }
};



loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
//log all the numbers from 15 to 90
//except replacing multiples of 2 with "Batty", multiples of 5 with "Beacon"
//and multiples of 2 and 5 with "BattyBeacon"

