const person1 = {
  name: 'Alan',
  age: 77,
}

const person2 = {
  name: 'Betty',
  age: 55,
}

const person3 = {
  name: 'Cillian',
  age: 44,
}

const people = [person1, person2, person3];

// for...in returns keys of objects
for(key in person1) {
  console.log(key);
  console.log(person1[key]);
}

// for...in iterates through array indexes
// Do not use for in over an Array if the index order is important.
// The index order is implementation-dependent, and array values may not be accessed in the order you expect.
// It is better to use a for loop, a for of loop, or Array.forEach() when the order is important.
for(personIndex in people) {
  console.log(personIndex);
  console.log(people[personIndex]);
}

