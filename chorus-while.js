const chorus = "Let's dance!";
//have chorus repeat 10 times
let repeat = 0;
while (repeat < 10) {
  //before the 6th chorus print *change key, doesn't affect # of chorus'
  if (repeat === 5) {
    console.log("*change key");
  }
  console.log(chorus);
  repeat++;
}

console.log("Until the sun comes up");