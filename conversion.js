const fs = require('fs');

let races = [];

let spreadsheet_csv = fs.readFileSync('data/data.csv', 'utf8');

let lines = spreadsheet_csv.split("\n");
console.log(lines);



// for (let i = 5-1; i <= 13-1; i++) {
//   if (i != 6) {
//     let line = lines[i];
//     let info = line.split(',');
//     let race = {};
//     race['name'] = info[0];
//   }
// }

for (let i = 0; i < lines.length; i++) {
  let line = lines[i];


  let info = line.split(',');
  let yearArray = [];
  for (let j = 1; j < info.length; j++) {
    yearArray.push(info[j]);
  }

  if (i == 23) {
    console.log(yearArray);
    console.log(line);
  }

  let race = {};
  race['name'] = info[0];
  race['gender'] = info[2];
  race['house'] = info[4];
  race['species'] = info[7];

  races.push(race);
}

//console.log(races);

fs.writeFileSync('data/data.json', JSON.stringify(races), 'utf8');
