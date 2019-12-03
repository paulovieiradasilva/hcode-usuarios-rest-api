const express = require('express');
const bodyParser = require('body-parser');
const consign = require('consign');
const validator = require('express-validator');

const app = express();

const port = 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(validator());

consign()
    .include('routes')
    .then('utils')
    .into(app);

app.listen(port, () => {
    console.log(`Server running in http://localhost:${port}`);
});