var type = module.exports = function (obj) {
  return new Type(obj);
};

var Type = function (obj) {
  this.isUndefined = typeof obj === 'undefined';
  this.isNull = isNull(obj);
  this.isString = return obj instanceof String;
  this.isNumber = return obj instanceof Number;
  this.isBoolean = return obj instanceof Boolean;
  this.isArray = return obj instanceof Array;
  this.isFunction = return typeof obj === 'function';
};

