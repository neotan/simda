import _curry1 from './_curry1'

const _curry2 = fn => {
  return (...args) => {
    const [a, b] = args

    switch (args.length) {
      case 0:
        return fn
      case 1:
        return _curry1(_b => fn(a, _b))
      default:
        return fn(a, b)
    }
  }
}

export default _curry2
