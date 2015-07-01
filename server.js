'use strict';

var express = require('express');
var mongoose = require('mongoose');
var app = express();

var cardsRouter = express.Router();

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/kquiz_test');
require('./routes/cards_routes')(cardsRouter);

app.use(cardsRouter);

app.listen(process.env.PORT || 3000, function() {
  console.log('server up on ' + (process.env.PORT || 3000));
});
