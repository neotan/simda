import _curry2 from './internal/_curry2'
import _isString from './internal/_isString'

const nth = (offset, list) => {
  const idx = offset < 0 ? list.length + offset : offset

  return _isString(list) ? list.charAt(idx) : list[idx]
}

export default _curry2(nth)
