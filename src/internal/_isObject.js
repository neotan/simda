const _isObject = x => {
  return Object.prototype.toString.call(x) === '[object Object]'
}

export default _isObject
