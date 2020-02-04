import _curry1 from './_curry1'
import _isArray from './_isArray'
import _isObject from './_isObject'
import _isString from './_isString'

const _isArrayLike = x => {
  switch (true) {
    case _isArray(x):
      return true
    case !x:
      return false
    case _isObject(x):
      return false
    case _isString(x):
      return false
    case x.nodeType === 1: //ELEMENT_NODE
      return !!x.length
    case x.length === 0:
      return true
    case x.length > 0:
      return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1)
    default:
      return false
  }
}

export default _curry1(_isArrayLike)
