const fs = require('fs');

let races = [];

let spreadsheet_csv = fs.readFileSync('data/data.csv', 'utf8');

let lines = spreadsheet_csv.split("\n");
//console.log(lines);



for (let i = 5-1; i <= 15-1; i++) {
  if (i != 6-1) {
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
      let sumYears = 0;
      for (let k = 1; k <= 11; k++) {
        sumYears += 1*raceInfo[k];
        yearArray.push(1*raceInfo[k]);
      }
      let averageYears = Math.round((sumYears)/11);
      yearArray.push(averageYears);
      race[fieldName] = yearArray;
    }
    races.push(race);
  }
}


fs.writeFileSync('data/data.json', JSON.stringify(races), 'utf8');
