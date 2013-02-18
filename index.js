var dictionary = require('dictionary');

module.exports = function (obj) {
  return new Type(obj);
};

var Type = function (obj) {
  this.is = {
    undef: typeof obj === 'undefined',
    nil: obj === null,
    str: typeof obj === 'string' || obj instanceof String,
    num: typeof obj === 'number' || obj instanceof Number,
    bool: typeof obj === 'boolean' || obj instanceof Boolean,
    arr: obj instanceof Array,
    fn: typeof obj === 'function'
  };
};

Type.prototype.handle = function (handlers) {
  var h = dictionary(handlers),
      props = dictionary(this.is),
      handled = false;

  props.each(function (is, key) {
    if (is && h.has(key)) {
      handled = true;
      h.get(key)();
    }
  });

  if (!handled && h.has('default')) {
    h.get('default')();
  }
};
