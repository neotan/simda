import assoc from './assoc'
import _curry3 from './internal/_curry3'
import _has from './internal/_has'
import _isArray from './internal/_isArray'
import _isInteger from './internal/_isInteger'
import isNil from './isNil'

const assocPath = (path, val, obj) => {
  if (path.length === 0) return val

  const idx = path[0]

  if (path.length >= 2) {
    // prettier-ignore
    const nextObj = (!isNil(obj) && _has(idx, obj))
                        ? obj[idx]
                        : _isInteger(path[1]) ? [] : {}

    val = assocPath(path.slice(1), val, nextObj)
  }

  if (_isInteger(idx) && _isArray(obj)) {
    obj[idx] = val
    return obj
  } else {
    return assoc(idx, val, obj)
  }
}

export default _curry3(assocPath)
