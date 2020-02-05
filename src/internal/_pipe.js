const _pipe = (a, b) => {
  return function() {
    return b.call(this, a.apply(this, arguments))
  }
}

export default _pipe
