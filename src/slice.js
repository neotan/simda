import _curry3 from './internal/_curry3'
import _isFunction from './internal/_isFunction'

const slice = (fromIdx, toIdx, list) => {
  return _isFunction(list.slice)
    ? list.slice(fromIdx, toIdx)
    : Array.prototype.slice.call(list, fromIdx, toIdx)
}

export default _curry3(slice)
