const fs = require('fs');

let races = [];

let spreadsheet_csv = fs.readFileSync('data/data.csv', 'utf8');

let lines = spreadsheet_csv.split("\n");
//console.log(lines);



for (let i = 5-1; i <= 15-1; i++) {
  if (i != 6) {
    let initialLine = lines[i];
    let initialInfo = initialLine.split(',');
    let race = {};
    race['name'] = initialInfo[0];
    for (let j = i+13; j <= 470; j += 13) {
      let raceLine = lines[j];
      let raceInfo = raceLine.split(',');
      let fieldLine = lines[j - i + 2];
      let fieldInfo = fieldLine.split(',');
      let fieldName = fieldInfo[0];
      let yearArray = [];
      for (let k = 1; k <= 11; k++) {
        yearArray.push(raceInfo[k]);
      }
      race[fieldName] = yearArray;
    }
    races.push(race);
  }
}

// for (let i = 0; i < lines.length; i++) {
//   let line = lines[i];
//
//
//   let info = line.split(',');
//   let yearArray = [];
//   for (let j = 1; j < info.length; j++) {
//     yearArray.push(info[j]);
//   }
//
//   if (i == 23) {
//     console.log(yearArray);
//     console.log(line);
//   }
//
//   let race = {};
//   race['name'] = info[0];
//   race['gender'] = info[2];
//   race['house'] = info[4];
//   race['species'] = info[7];
//
//   races.push(race);
// }

//console.log(races);

fs.writeFileSync('data/data.json', JSON.stringify(races), 'utf8');
