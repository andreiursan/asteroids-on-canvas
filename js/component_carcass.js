var ComponentCarcass = (function(){


  function Components() {
    this.components = [];

    this.addComponent = function(comp) {
      this.components.push(comp);
    }

    this.allComponents = function() {
      return this.components;
    }
  }

  var components = new Components();

  return Proxy.create({
      get: function(receiver, name){

        // check if the message is a Push method
        if(typeof components[name] === "function"){
          return components[name].bind(components);
        }

        // check if any component can handle the message
        for (var i = 0; i < components.length; i++){
          if(components[i].hasOwnProperty(name)){
            return components[i][name];
          }
        }

        return undefined;
      },

      set: function(receiver, name, value){
        for (var i = 0; i < components.length; i++){
          if(components[i].hasOwnProperty(name)){
            return components[i][name] = value;
          }
        }
        return true;
      }
  });
});
