const express = require('express');
const router = express.Router();
const User = require('../models/User.js');

// @route           POST /api/user/register
// @description     Register new users
router.post('/register', (req, res) => {
    const { email, firstName, lastName, password } = req.body;
    const user = new User({ email, firstName, lastName, password });
    user.save((err) => {
        if (err) {
            res.status(500).send("Error registering new user please try again.");
        } else {
            res.status(200).send("Welcome to the club!");
        }
    });
});

module.exports = router;