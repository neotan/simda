const isFunction = x => {
  return Object.prototype.toString.call(x) === '[object Function]'
}

export default isFunction
