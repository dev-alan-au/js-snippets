const a = 30;

switch(a) {
  case 30:
    console.log("Is 30");
  case 'something-else':
    //this will still execute because previous case is true
    console.log("Something else");
    break;
  default:
    console.log("Default case");
}