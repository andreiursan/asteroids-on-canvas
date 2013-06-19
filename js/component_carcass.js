function View(x, y){
  this.x = x;
  this.y = y;
  this.draw = function(){
    console.log("I'm drawing " + x + ", " + y);
  }
}

var ComponentCarcass = (function(){
  function Components() {
    // here we store the "behavior"
    this.components = [];

    this.addComponent = function(comp) {
      this.components.push(comp);
    }

    this.allComponents = function() {
      return this.components;
    }

    this.setValue = function(name, value) {
      for (var i = 0; i < this.components.length; i++){
        if(this.components[i].hasOwnProperty(name)){
          this.components[i][name] = value;
          return undefined;
        }
      }
    }

    this.getValue = function(name) {
      for (var i = 0; i < this.components.length; i++){
        if(this.components[i].hasOwnProperty(name)){
          return this.components[i][name];
        }
      }
      return undefined;
    }

  }
  var components = new Components();

  return Proxy.create({
      get: function(receiver, name){
        // check if the message is a Push method
        if(typeof components[name] === "function"){
          return components[name].bind(components);
        }
        return components.getValue(name);
      },

      set: function(receiver, name, value){
        console.log(name);
        components.setValue(name, value);
        return true;
      }
  });
});

