// require('dotenv').config();
const express = require('express');
const path = require('path');
const setRoutes = require('./routes');
const cors = require('cors');
const app = express();


const port = process.env.PORT || 3000;

app.use(cors({
    origin: "*",
    allowedHeaders: ['Content-Type', 'Authorization', 'x-csrf-token'],
    credentials: true,
    maxAge: 600,
    exposedHeaders: ['*', 'Authorization', ]
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.resolve(__dirname, './public')));

app.use(express.json());

setRoutes(app);

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
