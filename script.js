console.log("Let's build a pyramid using JavaScript basics:");
console.log("    #    ");
console.log("   ###   ");
console.log("  #####  ");
console.log(" ####### ");
console.log("#########");

let character = "Hello";
console.log(character);
character = "World"; // redifining variable doesnt have to be declared again (let)
console.log(character);
let secondCharacter; // usually variable use camelCase
console.log(secondCharacter); // if variable are not defined, it will have undefined value
secondCharacter = "Test";
console.log(secondCharacter);
secondCharacter = character; // assign value variable to another variable
console.log(secondCharacter);

let count = 8; // number doest use quotation mark
console.log(count+1); // you can use math operator

let rows = ["Naomi","Quincy","CamperChan"]; //array
console.log(rows);
console.log(rows[0]);
rows[2]=10; // change third element value inside array
console.log(rows);
rows[rows.length-1]=9; // .length return the number of the element
console.log(rows);

let cities = [ "London", "New York", "Mumbai" ];
console.log(cities);
cities[cities.length-1] = "Mexico City";
console.log(cities);

rows.push("freeCodeCamp"); // .push used to add value at the end of an array
console.log(rows);

let popped = rows.pop(); // .pop used to remove the last element and return it
console.log(popped);
console.log(rows);

let pushed = rows.push();
console.log(pushed); // return the new length of the array
