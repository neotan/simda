import _curry2 from './internal/_curry2'

const mergeRight = (a, b) => {
  return Object.assign({}, a, b)
}

export default _curry2(mergeRight)
