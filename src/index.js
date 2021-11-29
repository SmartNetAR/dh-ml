// require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

const port = process.env.NODE_PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.resolve(__dirname, './public')));

app.get('/sign-in', (req, res) => {
  res.render('signIn', {});
});

app.get('/sign-up', (req, res) => {
  res.render('signUn', {});
});

app.get('/', (req, res) => {
  res.render('index', {});
});

const reloadSomeConfiguration = () => {
  console.log('>>> reloadSomeConfiguration');
};

process.once("SIGHUP", function () {
  reloadSomeConfiguration();
})
process.once('SIGUSR2', function () {
  // gracefulShutdown(function () {
  console.log("killing...")
  process.kill(process.pid, 'SIGUSR2');
  // });
});

app.listen(port || 3000, () => {
  console.log(`Server is running on port ${port}`)
});