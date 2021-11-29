
const express = require('express');
const router = express.Router();

router.get('/sign-in', (req, res) => {
    res.render('signIn', {});
});

router.get('/sign-up', (req, res) => {
  res.render('signUp', {});
});


module.exports = router;