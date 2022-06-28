require('dotenv').config();
const express = require('express');
const config = require('./config/config');
const routeConvert = require('./routes/main.route');

const app = express();

const PORT = process.env.PORT || 3001;

config(app);

app.use('/', routeConvert);

app.listen(PORT, () => console.log(`***Server port ${PORT} at started...`));
