/*
 * app.js - Express server with routing
*/

/*jslint         node    : true, continue : true,
  devel  : true, indent  : 2,    maxerr   : 50,
  newcap : true, nomen   : true, plusplus : true,
  regexp : true, sloppy  : true, vars     : false,
  white  : true
*/
/*global */

// ------------ BEGIN MODULE SCOPE VARIABLES --------------
'use strict';
var
  http    = require( 'http'                 ),
  express = require( 'express'              ),
  bodyParser = require('body-parser'        ),
  methodOverride = require('method-override'),
  morgan = require('morgan'		    ),
  app     = express(),
  // router = express.Router(),
  // routes = require('./routes.js'),
  server  = http.createServer( app );

// ------------- END MODULE SCOPE VARIABLES ---------------

// ------------- BEGIN SERVER CONFIGURATION ---------------
  app.use( express.static( __dirname + '' ) );
  app.use( bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(methodOverride());
  // Turn on verbose logging
  // app.use(morgan('combined'));
  // routes.configRoutes( router, server );
  app.get('/', function(req, res) {
    var options = {
      root: __dirname + '/html/'
    };
    res.sendFile('index.html',options);
  });

// -------------- END SERVER CONFIGURATION ----------------

// ----------------- BEGIN START SERVER -------------------
server.listen( 8000 );
console.log(
  'Express server listening on port %d in %s mode',
   server.address().port, app.settings.env
);
// ------------------ END START SERVER --------------------
