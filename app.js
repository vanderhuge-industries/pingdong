
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path')
  , pingdong = require('./modules/pingdong')
  , config = require('./modules/config')
  , fs = require('fs')
  , moment = require('moment');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon(__dirname + '/public/images/dong-icon.ico'));
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});


config.getTargets(function(targets) {
  setInterval(function() {
    pingdong.run(http, targets, function(target, res) {
      console.log('[' + moment().format() + '] Ping of "' + target + '" responded with status: ' + res.statusCode);
    });
  }, (5 * 60 * 1000));
});
