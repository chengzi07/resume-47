'use strict';

window.Model = function (options) {
  var resourceName = options.resourceName;
  return {
    init: function init() {
      var APP_ID = 'f0c6OO8JiTYSQcNPaALPAgpn-gzGzoHsz';
      var APP_KEY = 'I0o5YB5Cf1Us5GqdPeiaXqPA';
      AV.init({ appId: APP_ID, appKey: APP_KEY });
    },
    fetch: function fetch() {
      var query = new AV.Query(resourceName);
      return query.find(); // Promise对象
    },
    save: function save(object) {
      var X = AV.Object.extend(resourceName);
      var x = new X();
      return x.save(object);
    }
  };
};