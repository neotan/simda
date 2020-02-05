import _curry2 from './internal/_curry2'
import _isString from './internal/_isString'

const split = (separator, x) => {
  return _isString(x) ? String.prototype.split.call(x, separator) : x
}

export default _curry2(split)
