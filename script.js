const character = "#";
const count = 8;
const rows = [];
let inverted = true;

function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + 
    character.repeat(2 * rowNumber - 1) + 
    " ".repeat(rowCount - rowNumber);
}

// Different type of loop

// Toggle between an inverted pyramid and a standard pyramid
for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}

// For loop
/*for (let i = 1; i <= count; i++) {
    rows.push(padRow(i, count));
}*/

// While loop
/*while (rows.length < count) {
    rows.push(padRow(rows.length + 1, count));
}*/

// Upside down Pyramid
/*for (let i = count; i > 0; i--) {
  rows.push(padRow(i, count));
}*/

let result = "";

for (const row of rows) {
    result = result + "\n" + row;
}

console.log(result);
