const express = require('express');
const logger = require('morgan');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');
const routes = require('./routes');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

if (process.env.NODE_ENV =='staging'){
  mongoose.connect(config.staging.DATABASE_URL);
}
else{
  mongoose.connect(config.production.DATABASE_URL);
}
const db = mongoose.connection;
const port = process.env.PORT || 8000;

db.on('error',function(){
  console.log('Failed to establish connection');
  })

db.once('open',function(){
  app.listen(port);
  console.log('Connection established');
});

app.use('/api/v1', routes);

module.exports = app;
