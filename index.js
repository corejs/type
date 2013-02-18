var type = module.exports = function (obj) {
  return new Type(obj);
};

var Type = function (obj) {
  this.isUndefined = typeof obj === 'undefined';
  this.isNull = obj === null;
  this.isString = typeof obj === 'string' || obj instanceof String;
  this.isNumber = typeof obj === 'number' || obj instanceof Number;
  this.isBoolean = typeof obj === 'boolean' || obj instanceof Boolean;
  this.isArray = obj instanceof Array;
  this.isFunction = typeof obj === 'function';
};
