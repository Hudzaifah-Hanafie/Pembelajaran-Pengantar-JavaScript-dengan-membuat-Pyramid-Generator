const character = "#";
const count = 8;
const rows = [];

function padRow(name) {
  const test = "Testing";
  console.log("This works!");
  return test;
  console.log("This works!");
}

const call = padRow("H");
console.log(call);

for (let i = 0; i < count; i++) {
  rows.push(character.repeat(i + 1));
}

let result = "";

for (const row of rows) {
  result = result + row + "\n";
}
console.log(result);
