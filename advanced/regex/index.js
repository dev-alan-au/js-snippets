// Regex using constructor
const reg1 = new RegExp("^cat.*$", "i");
const str = "CaTalogue";
const matches1 = str.match(reg1);
console.log(matches1);

// Regex using literal syntax
const reg2 = /^cat.*$/i;
const matches2 = str.match(reg1);
console.log(matches2);

// Regex without sticky
const reg3 = /[a|b]/;
const str2 = "a is for apple, b is for banana";
let matches3 = reg3.exec(str2);
console.log({matches3}); // 'a', index: 0
matches3 = reg3.exec(str2);
console.log({matches3}); // 'a', index: 0

// Regex with sticky - continues from last index
const reg4 = new RegExp(reg3, "y");
let matches4 = reg4.exec(str2);
console.log({matches4}); // 'a', index: 0
matches4 = reg4.exec(str2);
console.log({matches4}); // null - char is " " not a | b
matches4 = reg4.exec(str2);
console.log({matches4}); // 'a', index: 0

const reg5 = new RegExp(reg3, "y");
const str3 = "abc";
let matches5 = reg5.exec(str3);
console.log({matches5}); // 'a', index: 0
matches5 = reg5.exec(str3);
console.log({matches5}); // 'b', index: 1
matches5 = reg5.exec(str3);
console.log({matches5}); // null
matches5 = reg5.exec(str3);

// Grouping
const str4 = "bananananana";
const reg6 = /a(na)/;
const matches6 = reg6.exec(str4);
console.log(matches6);
console.log(matches6[0]); // ana
console.log(matches6[1]); // na
console.log(matches6.length); // 2

const reg7 = /ana/;
const matches7 = reg7.exec(str4);
console.log(matches7);
console.log(matches7[0]); // ana
console.log(matches7[1]); // undefined
console.log(matches7.length); // 1