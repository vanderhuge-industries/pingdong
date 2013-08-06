var config = require('../modules/config');

/*
 * GET home page.
 */

exports.index = function(req, res){
  config.getTargets(function(targets) {
    res.render('index', { title: 'Express', targets: targets });
  });
};
