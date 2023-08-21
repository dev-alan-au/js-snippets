const a = "John";
const b = "Alan";
peopleCheck(a);
peopleCheck(b);

function peopleCheck(name) {
  console.log("START");
  switch(name) {
    default:
      console.log("Default case");
    case "Eddie":
      console.log("Eddie case");
    case "Alan":
      //when matching this case, default does not run
      console.log("Alan case");
      break;
    case "Ted":
      //does not reach as break reached
      console.log("Ted case");
  }
  console.log("END");
}