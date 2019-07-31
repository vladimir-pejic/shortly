const express = require('express');
const cors = require('cors');
const config = require('config');
const connectDB = require('./config/db');
const app = express();
const corsOptions = {origin: config.get('baseUrl')};

connectDB();
app.use(express.json({ extended: false }));
app.use(cors(corsOptions));
app.use('/', express.static('./public', {
    index: "index.html"
}));
app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

app.listen(config.get('port'), () => console.log('Server running on port ' + config.get('port')));
