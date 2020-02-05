import _curry1 from './internal/_curry1'
import _isFunction from './internal/_isFunction'
import slice from './slice'

const tail = list => {
  return _isFunction(list.slice)
    ? list.slice(1, Infinity)
    : slice(1, Infinity, list)
}

export default _curry1(tail)
