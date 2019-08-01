const express = require('express');
const cors = require('cors');
const https = require("https");
const fs = require("fs");
const config = require('config');
const connectDB = require('./config/db');
const app = express();

const corsOptions = {origin: config.get('baseUrl')};

// SSL setup if production env and certificate is present
console.log('NODE_ENV: ' + config.util.getEnv('NODE_ENV'));
if(config.util.getEnv('NODE_ENV') == 'production') {
    if(fs.readFileSync("/etc/letsencrypt/live/shrtd.co/cert.pem")) {
        const ssl_options = {
            key: fs.readFileSync("/etc/letsencrypt/live/shrtd.co/privkey.pem").toString(),
            cert: fs.readFileSync("/etc/letsencrypt/live/shrtd.co/cert.pem").toString(),
            ca: fs.readFileSync('/etc/letsencrypt/live/shrtd.co/chain.crt').toString()
          };
    }
}

connectDB();
app.use(express.json({ extended: false }));
app.use(cors(corsOptions));
app.use('/', express.static('./public', {
    index: "index.html"
}));
app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

app.listen(config.get('port'), () => console.log('Server running on port ' + config.get('port')));
if(typeof ssl_options !== 'undefined' && ssl_options) {
    https.createServer(ssl_options, app).listen(config.get('port'));
}

