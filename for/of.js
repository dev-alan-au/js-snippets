const iterable = [1, 2, 3, 4, 5];

const person1 = {
  name: "Alan",
  age: 77,
};

const person2 = {
  name: "Betty",
  age: 55,
};

const person3 = {
  name: "Cillian",
  age: 44,
};

const people = [person1, person2, person3];

const string = "I am a string";

// iterates through values of an array
for (i of iterable) {
  console.log(i);
}

for (person of people) {
  console.log(person);
}

// a string is an array of characters
// break to exit early from loop
for(char of string) {
  if(char == 's') break;
  console.log(char);
}
