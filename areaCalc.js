function calculateRectangleArea(length, width) {
  if (length < 0 || width < 0) {
     return undefined;
  } else {
    let rArea = length * width;
    return rArea;
  }
}

console.log(calculateRectangleArea(10, 5));
console.log(calculateRectangleArea(1.5, 2.5));
console.log(calculateRectangleArea(10, -5)); 

function calculateTriangleArea(base, height) {
  if (base < 0 || height < 0) {
    return undefined;
  } else {
    let tArea = (base * height) / 2;
    return tArea;
  }
}

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5));

function calculateCircleArea(radius) {
  if (radius < 0) {
    return undefined;
  } else {
    let cArea = Math.PI * (Math.pow(radius, 2));
    return cArea;
  }
}

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined