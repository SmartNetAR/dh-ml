// require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.NODE_PORT || 3000;
console.log('>>> port:');
console.log(port);

app.use(express.static(path.resolve(__dirname, './public')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/views/home.html'));
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