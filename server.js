const dotenv = require('dotenv')
const path = require('path');
const express = require('express');
const helmet = require('helmet');

const app = express();

app.use(helmet());

dotenv.config();

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
