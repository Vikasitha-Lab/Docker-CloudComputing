const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/db');

const app = express();

const PORT = 5000;

//Connect to Mongo DB container
db();

//Setup middleware
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.json('api is working!');
});

//Start Server
app.listen(PORT, () => {
    console.log(`API is listening on PORT: ${PORT}`);
});