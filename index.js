// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('work');
});

app.listen(3000, () => {
  console.log("Fubuki's Working!!..");
});
const child_process = require('child_process');
