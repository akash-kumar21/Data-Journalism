const tests = require("./tests")

let data = "./data.json";

test('No empty races in json', () => {
  for (let i = 0; i < data.length; i++) {
    expect(data[i]).not.toBe("")
  }
});

test('correct number of races', () => {
  expect(data.length).toBe(10)
});
