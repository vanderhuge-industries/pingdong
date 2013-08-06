var pingdong = {
  run: function(http, targets, callback) {
    targets.forEach(function(target) {
      http.get(target, function(res) {
        callback(target, res);
      });
    });
  }
};

module.exports = pingdong;
