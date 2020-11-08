// YOU EYE DOT JAY ESS

let elements = {}
let bases = {}

// element definitions
bases.button = {
  onclick: function() {},
  draw: function() {
  }
}

function Element(name) {
  this.children = {};
  this.addChild = function(obj) {
    this.children[obj] = true;
  }
  for (method in bases[name]) {
    this[method] = bases[name][method];
  }
}

function newObject(name, pnt) {
  var nobj = new Element(name);
  pnt.addChild(nobj)
  return nobj;
}
