// Delete operation of a map is more efficient than delete operation of an object.

const objectOfThings = {};

objectOfThings[0] = "ted";

console.time();
delete objectOfThings[0];
console.timeEnd();

const mapOfThings = new Map();

mapOfThings.set(1, "ted");
console.time();
mapOfThings.delete(1);
console.timeEnd();
