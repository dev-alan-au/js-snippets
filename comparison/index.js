// JS compare is on value types not variable types
// compare same type
{
  const a = 1;
  const b = 1;

  console.log(a == b); //true
}

// compare string to number
{
  const a = 1;
  const b = "1";
  const c = "abc";

  // 'b' is coerced to a number
  console.log(a == b); //true
  console.log(b == a); //true

  // 'c' cannot be parsed and is NaN
  // NaN is not less than a number
  // NaN is not more than a number
  console.log(a < c); //false
  console.log(a > c); //false
  console.log(a == c); //false
}

// compare boolean to number
{
  const a = 1;
  const b = true;

  // 'b' is coerced to a number
  console.log(a == b); //true
}

// compare object / array to number / string
{
  const a = 1;
  const b = 0;
  const c = [];
  const d = {};
  const e = "";
  const f = "[object Object]";

  // defaultValue of be is retrieved
  // will try .valueOf or .toString - order depending on hint
  // object will be coerced to string "[object Object]"
  console.log(a == c); //false
  console.log(b == c); //true
  console.log(a == d); //false
  console.log(b == d); //false
  console.log(f == d); //true
  console.log(c == e); //true
}
