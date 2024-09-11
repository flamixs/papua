const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Set EJS sebagai view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Rute untuk halaman Home
app.get('/', (req, res) => {
  res.render('home');
});

// Rute untuk halaman About
app.get('/about', (req, res) => {
  res.render('about');
});

// Rute untuk halaman Contact
app.get('/contact', (req, res) => {
  res.render('contact');
});

// Rute untuk halaman TPS
app.get('/tps', (req, res) => {
  res.render('tps');
});

// Mulai server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});