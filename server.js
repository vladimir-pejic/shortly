const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const https = require("https");
const fs = require("fs");
const config = require('config');
const connectDB = require('./config/db');
const app = express();

let ssl_options;
const corsOptions = {origin: config.get('baseUrl')};

// Get SSL certificate if in production environment and certificate is present
if(config.util.getEnv('NODE_ENV') == 'production') {
    if(fs.readFileSync("/etc/letsencrypt/live/shrtd.co/cert.pem")) {
        ssl_options = {
            key: fs.readFileSync("/etc/letsencrypt/live/shrtd.co/privkey.pem").toString(),
            cert: fs.readFileSync("/etc/letsencrypt/live/shrtd.co/cert.pem").toString(),
            ca: fs.readFileSync('/etc/letsencrypt/live/shrtd.co/chain.pem').toString()
        };
        console.log('SSL Certificate found.');
    }
}

// Connect the DB and use middlewares
connectDB();
app.use(express.json({ extended: false }));
app.use(cookieParser());
app.use(cors(corsOptions));
app.enable('trust proxy');

// Enforce redirect to HTTPS if in production environment
app.use (function (req, res, next) {
    if (!req.secure && config.util.getEnv('NODE_ENV') == 'production') {
        res.redirect('https://' + req.headers.host + req.url);
    } else {
        next();  
    }
});

// Include all the static and routes
app.use('/', express.static('./public', { index: "index.html" }));
app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));
app.use('/api/user', require('./routes/user'));

// Run HTTP server and HTTPS server if production environment and there is SSL certificate
app.listen(config.get('port'), () => console.log('HTTP server running on port ' + config.get('port')));
if(config.util.getEnv('NODE_ENV') == 'production') {
    https.createServer(ssl_options, app).listen(config.get('ssl_port'), () => console.log('HTTPS server running on port ' + config.get('ssl_port')));
}


