//Choose Stations assignment 
const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

function chooseStations (stations) {
  const goodStations = []

  for (let station of stations) {
    const capacity = station[1];

    if (capacity >= 20) {
      
      const type = station[2];
      if (type === "school" || type === "community centre") {
        goodStations.push(station[0]);
      }
    } 
  } return goodStations;
}


console.log(chooseStations(stations));


//X marks the spot assignment
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

function finalPosition (moves) {
  let sumY = 0
  let sumX = 0

  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === 'north') {
      sumY = sumY + 1;
    } else if (moves[i] === 'south') {
      sumY = sumY - 1;
    } else if (moves[i] === 'east') {
      sumX = sumX + 1;
    } else if (moves[i] === 'west') {
      sumX = sumX -1
    }

  } return [sumX, sumY]
}

console.log(finalPosition(moves)) 
