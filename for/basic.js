// basic for loop
// initialization; condition; afterthought
for (let x = 0; x < 3; x++) {
  console.log(x);
}

// break for loop with 'break'
// does not continue printing after 2
for (let x = 0; x < 3; x++) {
  if (x == 3) break;
  console.log(x);
}

// initial with many variables
{
  const a = () => {
    // Random() returns a number between 0 and 1
    return Math.random() + 2;
  };
  for (let x = 0, y = a(); x < y; x++) {
    // y does not change
    console.log(y);
  }
  for (let x = 0, y = a(); x < y; x++, y = a()) {
    // we are changing y in the afterthought
    console.log(y);
  }
}

// initiation expression is optional within for loop
{
  let x = 0;
  for (; x < 2; x++) {
    console.log(x);
  }
}

// condition expression is optional within for loop
for (let x = 7; ; x++) {
  // omitting conditional expressions runs loop
  if (x > 10) break;
  console.log(x);
}

for (let x = 7; true; x++) {
  if (x > 10) break;
  console.log(x);
}

for (let x = 7; false; x++) {
  // never executes
  if (x > 10) break;
  console.log(x);
}

// afterthought expression is optional
for (let x = 7; x <= 10; ) {
  console.log(x);
  x += 1;
}

// everything is optional???
{
  let x = 0;
  for( ; ; ) {
    if(x > 3) break;
    console.log(x);
    x += 1;
  }
}