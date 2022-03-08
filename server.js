const dotenv = require('dotenv')
const path = require('path');
const fs = require('fs');
const express = require('express');

const app = express();

dotenv.config();

app.get('/photos-names', (req, res) => {
  try {
    const photos = fs.readdirSync(path.join(__dirname, 'www/assets/gallery-photos'));
    res.status(200).send(photos).end();

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/', (req, res) => {
  res.redirect('/acasa.html')
});
app.get('/favicon.png', (req, res) => {
  res.sendFile(path.join(__dirname, './favicon.png'));
})
app.use('/', express.static(path.join(__dirname, 'www')));
app.use((req, res) => {
  res.redirect('/acasa.html');
});
app.listen(process.env.PORT, () => {
  console.log(`Server on, port: ${process.env.PORT}`);
});
