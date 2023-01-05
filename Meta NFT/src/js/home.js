let run = 24;
let jump = 45;
let all = run + jump;
console.log(all);

//replace string methods
run = "Azerbaycanin 10 milyon ehalisi var";
const txt = run.replace("10 milyon", "2 milyon russ");
console.log(txt);

//
run = "No i won't firget you";
const song = run.slice(3,7);
console.log(song);

//concat string methods
run = "No I won't";
jump = "Forget you";
all = run.concat(" ", "Foget you");
console.log(all);

//lenght
const krid = run.length;
console.log(krid);

// //prosto tak 
// run = "merry holidays";
// jump = "ho ho ho ";
// all = run + jump;
// document.getElementById("site").innerHTML = all;

//number
let x = Number.EPSILON
console.log(x);

let a = 24/0;
console.log(a);

a = -45/0;
console.log(a);

//arrs
const arr = [1,3,6,12,24,"Dream"];
console.log(arr);


console.log(arr.length);

console.log(typeof arr);

//arr all
const massiv = [2,
     ["elka", "width"],
     { 
        sass: "V Studio Code",
        developer: "Frontend",
    },
    4, 8
]

console.log(massiv.length);
console.log(massiv[3]);
console.log(massiv[massiv.length - 1]);
console.log(typeof massiv);


//

const cars = ["Audio", "BMW", "Rolls Royce", "Mercedec"];
cars[3] = "Nissan";
console.log(cars);
console.log(typeof cars);


//push
cars.push("ferrari");
cars.push("cadillac");
console.log(cars);


//pop
const diamond = ["Rolex", "Toffani", "Pandora", "Gucci"];
diamond.pop();
console.log(diamond);

//instanceof
const big = ["London", "New-York", "York"];
big[2] = "Berlin"; 
big[3] = "lasVegas";
big[4] = "Pekin";
big[big.length] = "Tokio";
console.log(big);
console.log(Array.isArray(big));
console.log(big instanceof Array);


//join
const sing = ["Dog", "Cat", "Sheep", "Fish"];
const sng = sing.join("  &  ");
console.log(sng);


//shift 
const paytaxt = ["Ankara", "Nur sultan", "TAskent"];
paytaxt.shift();
console.log(paytaxt);

//unshift
paytaxt.unshift("vasington");
delete paytaxt[1];
console.log(paytaxt);
