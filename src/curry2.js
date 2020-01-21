import curry1 from './curry1'

const curry2 = fn => {
  return (...args) => {
    switch (args.length) {
      case 0:
        return fn
      case 1:
        return curry1(arg => fn(args[0], arg))
      default:
        return fn(...args)
    }
  }
}

export default curry2
