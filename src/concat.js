import _isFunction from 'ramda/src/internal/_isFunction'
import _curry2 from './internal/_curry2'
import _isArray from './internal/_isArray'
import _isString from './internal/_isString'

const concat = (a, b) => {
  if (_isArray(a)) {
    if (_isArray(b)) {
      return a.concat(b)
    }
    throw new TypeError('The 2nd param is not an array')
  }

  if (_isString(a)) {
    if (_isString(b)) {
      return a + b
    }
    return new TypeError('The 2nd param is not a string')
  }

  if (a != null && _isFunction(a.concat)) {
    return a.concat(b)
  }

  throw new TypeError('1st param does not have a method named "concat"')
}

export default _curry2(concat)
