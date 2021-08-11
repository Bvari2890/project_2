const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');
const routes = require('./controllers');
const app = express();
const hbs = exphbs.create({});
const session = require('express-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const env = require('dotenv');

const PORT = process.env.PORT || 3003;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const models = require("./models/index.js");

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use(require('./controllers/homeRoutes'));

app.listen(PORT, () => {
  console.log('Server listening on: http://localhost:' + PORT);
});
