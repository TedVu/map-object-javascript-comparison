// iteration of object in javascript is awkward

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

// this is not a 'safe' way of iterating an object
for (const key in person) {
  console.log(`Key is ${key}`);
}

// this is a safe way of iterating an object
for (const key in person) {
  if (Object.prototype.hasOwnProperty.call(person, key)) {
    console.log(`Key is ${key}`);
  }
}
