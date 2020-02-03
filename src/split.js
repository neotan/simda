import _curry2 from './internal/_curry2'
import is from './is'

const split = (separator, x) => {
  return is(String, x) ? String.prototype.split.call(x, separator) : x
}

export default _curry2(split)
