// objects trash to treasure assignment 
/* commented out for next assignment 
function smartGarbage(trash, bins) {
  if (trash === 'waste') {
    bins.waste += 1;
  } else if (trash === 'recycling') {
    bins.recycling += 1;
  } else if (trash === 'compost') {
    bins.compost += 1;
  } return bins;
}

console.log(smartGarbage('waste', { waste: 4, recycling: 2, compost: 5 }));
*/

//Objects - driving mayor daisy assignment
// takes in an array of car objects, and the speed of a car as it passes the sensor
const carPassing = function (cars, speed) {
  //add new object to cars array
  let newCar = {
    time: Date.now(),
    speed: speed,
  }
  cars.push(newCar);
  return cars;
}


const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

const speed = 38

console.log(carPassing(cars, speed));