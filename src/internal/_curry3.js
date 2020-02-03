import _curry1 from './_curry1'
import _curry2 from './_curry2'

const _curry3 = fn => (...args) => {
  const [a, b, c] = args
  switch (args.length) {
    case 0:
      return fn
    case 1:
      return _curry2((_b, _c) => fn(a, _b, _c))
    case 2:
      return _curry1(_c => fn(a, b, _c))
    default:
      return fn(a, b, c)
  }
}

export default _curry3
