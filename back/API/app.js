const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Configuration
require("../config/headerConfig.js").initialization(app);

// Routing
require("../routes/userRoutes.js")(app);
require("../routes/pictureRoutes")(app);

module.exports = app;