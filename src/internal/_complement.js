const _complement = fn => {
  return function() {
    return !fn.apply(this, arguments)
  }
}

export default _complement
