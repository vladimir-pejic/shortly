const express = require('express');
const cors = require('cors');
const config = require('config');
const connectDB = require('./config/db');
const app = express();

const PORT = 5000;
const corsOptions = {origin: config.get('baseUrl')};

connectDB();
app.use(express.json({ extended: false }));
app.use(cors(corsOptions));
app.use('/', express.static('./public', {
    index: "index.html"
}));
app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

app.listen(PORT, () => console.log('Server running on port ' + PORT));
