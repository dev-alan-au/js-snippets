const string1 = "abc";
const string2 = "xyz";
const string3 = "123";

switch(string1) {
  case "abc":
    console.log("Is 'abc'");
    break;
  default:
    console.log("Is not 'abc'");
    break;
}

switch(string2) {
  case (string2 == "xyz"):
    //does not work because comparing value (===) of 'string2' to (string2 == "abc") which evaluates to true 
    console.log("Is 'xyz'");
    break;
  default:
    console.log("Is not 'xyz'");
    break;
}

const msg = "Hello";
switch(true) {
  //can compare value with expression value
  case (string3 === "123"): {
    //we can declare blocked variables
    const msg = "Is '123'"
    console.log(msg);
  }
  default:
    console.log(msg);
}