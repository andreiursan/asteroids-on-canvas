var proxyObj = Proxy.create({

  get: function(obj, propertyName) {
    return 'Hello, '+ propertyName;
  },

  set: function(obj, propertyName, value) {
    var log = "Property " + propertyName +
              " doesn't like value: " + value;
    console.log(log);
    return true;
  }
});

function makeLogger(obj) {
  var proxy = Proxy.create({
    get: function(rcvr, name) {
      //log(‘get’, name, obj);
      return obj[name];
    },

    set: function(rcvr, name, val) {
      //log(‘set’, name, obj, val);
      obj[name] = val;
      return true;
    }
    // ...
  }, Object.getPrototypeOf(obj));
  return proxy;
}
