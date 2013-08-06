var pingdong = require('../modules/pingdong.js');
var http = require('http');

describe('Running pingdong', function() {
  describe('with a target', function() {
    var target = 'http://localhost:3000';
    it('makes an HTTP request to that target', function() {
      spyOn(http, 'get');
      pingdong.run(http, [target]);
      expect(http.get).toHaveBeenCalledWith(target);
    });
  });

  describe('with multiple targets', function() {
    var targets = ['1', '2'];
    it('makes an HTTP request to every target', function() {
      spyOn(http, 'get');
      pingdong.run(http, targets);
      targets.forEach(function(target) {
        expect(http.get).toHaveBeenCalledWith(target);
      });
    });
  });
});
