import _isFunction from 'ramda/src/internal/_isFunction'
import _curry3 from './internal/_curry3'

const slice = (fromIdx, toIdx, list) => {
  return _isFunction(list.slice)
    ? list.slice(fromIdx, toIdx)
    : Array.prototype.slice.call(list, fromIdx, toIdx)
}

export default _curry3(slice)
