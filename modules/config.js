var fs = require('fs');

var config = {
  getTargets: function(callback) {
    fs.readFile(__dirname + '/../config/targets.json', 'utf8', function(err, data) {
      if(err) {
        console.log('Error reading targets.json: ' + err);
        return;
      }

      targets = JSON.parse(data);

      callback(targets);
    });
  }
};

module.exports = config;
