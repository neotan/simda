const curry1 = fn => {
  return (...args) => {
    return args.length === 0 ? fn : fn(...args)
  }
}

export default curry1
