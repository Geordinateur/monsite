const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Call to file for routing
const users = require('./routes/userRoutes.js');
const pictures = require('./routes/pictureRoutes.js');
const sendMail = require('./controllers/mailController.js');

// Configuration
require("./config/headerConfig.js").initialization(app);

// Routing
app.use(express.json());
app.use('/users', users);
app.use('/pictures', pictures);
app.use('/sendmail', sendMail);

module.exports = app;
