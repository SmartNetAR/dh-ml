
const dayjs = require('dayjs');
const express = require('express');
const router = express.Router();
const users = require('../../data/users');

router.post('/auth/login', (req, res) => {
    const user = users.find(u => u.email === req.body.email && u.password === req.body.password);

    const dataToSecure = {
      dataToSecure: "This is the secret data in the cookie.",
    };

    console.log('>>> process.env.NODE_ENV:');
    console.log(process.env.NODE_ENV);
    res.cookie("secureCookie", JSON.stringify(dataToSecure), {
    //   secure: process.env.NODE_ENV !== "development",
      secure: false,
      httpOnly: true,
      sameSite: "none",
      expires: dayjs().add(30, "days").toDate(),
    });

    res.json({
        "status": "success",
        "message": "Login Successful",
        "data": {
            user
        }
    });
});

router.get("/cookie", (req, res) => {
    const user = users.find(u => true);

    const dataToSecure = {
      dataToSecure: "This is the secret data in the cookie.",
    };

    console.log('>>> process.env.NODE_ENV:');
    console.log(process.env.NODE_ENV);
    res.cookie("secureCookie", JSON.stringify(dataToSecure), {
    //   secure: process.env.NODE_ENV !== "development",
      secure: false,
      httpOnly: true,
      sameSite: "none",
      expires: dayjs().add(30, "days").toDate(),
    });

    res.json({
        "status": "success",
        "message": "Login Successful",
        "data": {
            user
        }
    });
});

router.get("/refresh-token", (req, res) => {
    console.log(req.cookies);
    res.json(req.cookies)
});

router.post("/refresh-token", (req, res) => {
    console.log(req.cookies);
    res.json(req.cookies)
});


module.exports = router;