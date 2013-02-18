var type = module.exports = function (obj) {
  return new Type(obj);
};

var Type = function (obj) {
  this.isUndefined = typeof obj === 'undefined';
  this.isNull = isNull(obj);
  this.isString = obj instanceof String;
  this.isNumber = obj instanceof Number;
  this.isBoolean = obj instanceof Boolean;
  this.isArray = obj instanceof Array;
  this.isFunction = typeof obj === 'function';
};

