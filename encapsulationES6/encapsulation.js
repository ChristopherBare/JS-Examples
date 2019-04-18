const Guy = (function() {
    const _name = new WeakMap();


class Guy {
  constructor(name) {
    this[_name] = name;
  }
  set name(name) {
    this[_name] = name;
  }
  get name() {
    return this[_name];
  }
}

return Guy;
}());

let guy = new Guy("Fieri");
console.log(guy.name);