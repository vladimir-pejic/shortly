const express = require('express');
const router = express.Router();
const path = require('path');
const withAuth = require('../middlewares/authenticated');
const Url = require('../models/Url');

// @route           GET /
// @description     App's landing page
router.get('/', (req, res) => {
    res.sendFile(path.dirname(require.main.filename) + '/public/index.html');
});

// @route           GET /check-token
// @description     Check token validity
router.get('/check-token', withAuth, function(req, res) {
    res.sendStatus(200);
});

// @route           GET /:code
// @description     Redirect to the long/original URL
router.get('/:code', async (req, res) => {
    try {
        const url = await Url.findOne({ urlCode: req.params.code });

        if(url) {
            return res.redirect(url.longUrl);
        } else {
            return res.status(404).json('URL not found');
        }
    } catch (error) {
        console.error(error);
        res.status(500).json('Server error');
    }
});

module.exports = router;