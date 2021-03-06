const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../models/User.js');

// @route           POST /api/user/register
// @description     Register new users
router.post('/register', (req, res) => {
    const { email, firstName, lastName, password } = req.body;
    const user = new User({ email, firstName, lastName, password });
    user.save((err) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: "Error registering new user please try again."});
        } else {
            res.sendStatus(200).send("Welcome to the club!");
        }
    });
});

// @route           POST /api/user/authenticate
// @description     Attempt to authenticate the user
router.post('/authenticate', (req, res) => {

    const { email, password } = req.body;

    User.findOne({ email }, (err, user) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal error please try again' });
        } else if (!user) {
            res.status(401).json({ error: 'Incorrect email or password' });
        } else {
            user.isCorrectPassword(password, (err, same) => {
                if (err) {
                    res.status(500).json({ error: 'Internal error please try again' });
                } else if (!same) {
                    res.status(401).json({ error: 'Incorrect email or password' });
                } else {
                    // Issue token
                    const payload = { email };
                    const token = jwt.sign(payload, config.get('secret'), { expiresIn: '1h' });
                    res.cookie('token', token, { httpOnly: true }).sendStatus(200);
                }
            });
        }
    });
});

module.exports = router;