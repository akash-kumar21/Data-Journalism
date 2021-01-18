const data = require("../data/clean/data.json")

test('No empty race objects in json', () => {
  for (let i = 0; i < data.length; i++) {

    expect(data[i]).not.toBe("")
  }
});

test('No commas in the numbers', () => {
  for (let i = 0; i < data.length; i++) {
    let race = data[i];
    for (field in race) {
      if (field != 'name' && field != 'description') {
        let array = race[field];
        for (let num of array) {
          var str = num.toString();
          for (let j = 0; j < str.length; j++) {
            expect(str[j]).not.toBe(",");
          }
        }
      }
    }
  }
});


test('No spaces in the numbers', () => {
  for (let i = 0; i < data.length; i++) {
    let race = data[i];
    for (field in race) {
      if (field != 'name' && field != 'description') {
        let array = race[field];
        for (let num of array) {
          var str = num.toString();
          let arr = str.split(" ");
          expect(arr.length).toBe(1);
        }
      }
    }
  }
});


test('No N/A', () => {
  for (let i = 0; i < data.length; i++) {
    let race = data[i];
    for (field in race) {
      let array = race[field];
      for (let num of array) {
        expect(num).not.toBe("na");
      }
    }
  }
});

test('No superscript errors', () => {
  for (let i = 0; i < data.length; i++) {
    let race = data[i];
    for (field in race) {
      let name = race['name'];
      expect(name).not.toBe("Hispanic or Latinoa");
      expect(name).not.toBe("Asian or Pacific Islanderb");
      expect(name).not.toBe("More than one racec");
    }
  }
});


test('No ampersand', () => {
  for (let i = 0; i < data.length; i++) {
    let race = data[i];
    for (field in race) {
      for (let j = 0; j < field.length; j++) {
        expect(field[j]).not.toBe("&");
      }
    }
  }
});


test('Check that first letter of each race/field is uppercase', () => {
  for (let i = 0; i < data.length; i++) {
    let race = data[i];
    let raceName = race['name'];
    let firstLetterRace = raceName.charAt(0);
    expect(firstLetterRace.toUpperCase()).toBe(firstLetterRace);
    for (field in race) {
      if (field != 'name' && field != 'description') {
        let firstLetterField = field.charAt(0);
        expect(firstLetterField.toUpperCase()).toBe(firstLetterField);
      }
    }
  }
});


test('Correct number of races', () => {
  expect(data.length).toBe(10)
});


test('Correct length of array associated with each field', () => {
  for (let i = 0; i < data.length; i++) {
    let race = data[i];
    for (field in race) {
      if (field != 'name' && field != 'description') {
        let array = race[field];
        expect(array.length).toBe(12);
      }
    }
  }
});



test('No letters in yearly data (should be numbers)', () => {
  for (let i = 0; i < data.length; i++) {
    let race = data[i];
    for (field in race) {
      if (field != 'name' && field != 'description') {
        let array = race[field];
        for (let num of array) {
          var str = num.toString();
          for (let j = 0; j < str.length; j++) {
            let ascii = str.charCodeAt(j);
            let letterCode = (ascii >= 65 && ascii <= 90 || ascii >= 97 && ascii <= 122);
            expect(letterCode).toBe(false);
          }
        }
      }
    }
  }
});
