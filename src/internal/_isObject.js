const _isObject = x => {
  if (x != null && typeof x === 'object') {
    return Object.prototype.toString.call(x) === '[object Object]'
  }
  return false
}

export default _isObject
