const fs = require('fs');

let races = [];

let spreadsheet_csv = fs.readFileSync('data/data.csv', 'utf8');

let lines = spreadsheet_csv.split("\n");
//console.log(lines);



for (let i = 5-1; i <= 15-1; i++) {//loops through race
  if (i != 6-1) {
    let allFields = []; // [ [field1, years], [field2, years], ... ]

    let initialLine = lines[i];
    let initialInfo = initialLine.split(',');
    let race = {};
    race['name'] = initialInfo[0];
    for (let j = i+13; j <= 458 && j != 327; j += 13) {//loops through fields; exclude non-S&E



      let fieldArray = [];

      let raceLine = lines[j];
      let raceInfo = raceLine.split(',');
      let fieldLine = lines[j - i + 2];
      let fieldInfo = fieldLine.split(',');
      let fieldName = fieldInfo[0];

      if (fieldName != "Other" && fieldName != "Other ") {
        let yearArray = [];
        let sumYears = 0;
        for (let k = 1; k <= 11; k++) {
          sumYears += 1*raceInfo[k];
          yearArray.push(1*raceInfo[k]);
        }
        let averageYears = Math.round((sumYears)/11);
        yearArray.push(averageYears);

        fieldArray.push(fieldName);
        fieldArray.push(yearArray);
        allFields.push(fieldArray);
      }//if fieldName != 'Other'
    }// j loop

    allFields.sort(function(arr1, arr2) {
      return (arr2[1][11] - arr1[1][11]);
    });

    for (let j = 0; j < allFields.length; j++) {
      let specificField = allFields[j];
      race[specificField[0]] = specificField[1];
    }

    races.push(race);
  }// if statement
}// i loop




fs.writeFileSync('data/data.json', JSON.stringify(races), 'utf8');
