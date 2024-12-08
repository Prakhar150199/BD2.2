const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterEvenNumbers(num) {
  return num % 2 === 0;
}

app.get('/even-numbers', (req, res) => {
  let result = numbers.filter((num) => filterEvenNumbers(num));
  res.json(result);
});

let ages = [10, 20, 30, 15, 17, 25];

function filterAgesAbove18(age) {
  return age > 18;
}

app.get('/adult-ages', (req, res) => {
  let result = ages.filter((age) => filterAgesAbove18(age));
  res.json(result);
});

let words = ['apple', 'banana', 'cherry', 'date', 'fig', 'grape'];

function filterWordsLongerThan5(word) {
  return word.length > 5;
}

app.get('/long-words', (req, res) => {
  let result = words.filter((word) => filterWordsLongerThan5(word));
  res.json(result);
});

let sizes = [50, 200, 75, 120, 30, 90, 150];

function filterSmallerSizes(size, sizeParam) {
  return size < sizeParam;
}

app.get('/small-files', (req, res) => {
  let sizeParam = req.query.sizeParam;
  let result = sizes.filter((size) => filterSmallerSizes(size, sizeParam));
  res.json(result);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
