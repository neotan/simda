import curry2 from './curry2'
import is from './is'

const split = (separator, x) => {
  return is(String, x) ? String.prototype.split.call(x, separator) : x
}

export default curry2(split)
