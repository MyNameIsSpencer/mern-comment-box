// import dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Comment = require('./model/comments');

// create instances
var app = express();
var router = express.Router();

//set port
var port = process.env.API_PORT || 3001;

// db config
mongoose.connect(' mongodb://myMernCommentBoxUser:myMernCommentBoxPassword555@ds019678.mlab.com:19678/mymerncommentbox');


// now we should configure the API to use bodyParser
// and look for JSON data in request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Prevent errors from Cross Origin Resource Shraing,
// set headers to allow CORS with middleware:
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods',
  'GET, HEAD, OPTIONS, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Contorl-Request-Method, Access-Control-Request-Headers');

// and remove cacheing so we get most recent Comments
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

//now we can set the route path & initialize API
app.use('/api', router);

//starts the server and listens requests
app.listen(port, function() {
  console.log(`api running on port ${port}`);
});
