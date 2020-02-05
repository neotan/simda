import _curry1 from './internal/_curry1'
import _isArguments from './internal/_isArguments'
import _isArray from './internal/_isArray'
import _isObject from './internal/_isObject'
import _isString from './internal/_isString'

const empty = x => {
  switch (true) {
    case _isArray(x):
      return []
    case _isString:
      return ''
    case _isObject(x):
      return {}
    case _isArguments(x):
      // prettier-ignore
      // eslint-disable-next-line
      return (function() {return arguments;})()
    default:
      return undefined
  }
}

export default _curry1(empty)
