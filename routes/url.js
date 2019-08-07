const express = require('express');
const router = express.Router();
const validUrl = require('valid-url');
const shortId = require('shortid');
const config = require('config');

const Url = require('../models/Url');

// @route           POST /api/url/shorten
// @description     Create short URL
router.post('/shorten', async (req, res) => {
    const { longUrl } = req.body;
    const baseUrl = config.get('baseUrl');
    
    // Check base URL
    if(!validUrl.isUri(baseUrl)) {
        return res.status(422).json('Invalid base URL');
    }

    // Create URL code
    let urlCode = shortId.generate();

    // Check long URL
    if(validUrl.isUri(longUrl)) {
        try {
            let url = await Url.findOne({ longUrl });

            if(url) {
                res.json(url);
            } else {
                const shortUrl = baseUrl + '/' + urlCode;

                url = new Url({
                    longUrl,
                    shortUrl,
                    urlCode,
                    date: new Date()
                });

                await url.save();

                res.json(url);
            }

        } catch (error) {
            res.status(500).json('Server error.')
        }
    } else {
        res.status(422).json('Invalid long URL');
    }
});

module.exports = router;