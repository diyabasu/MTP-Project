const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Read the PNG file
  const imagePath = '/WORKDIR/app/imageI.png';
  fs.readFile(imagePath, (err, data) => {
    if (err) {
      res.status(500).send('Error reading file');
    } else {
      res.writeHead(200, { 'Content-Type': 'imageI/png' });
      res.end(data);
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
