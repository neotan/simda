import _curry1 from './internal/_curry1'
import _isArray from './internal/_isArray'
import isPlainObj from './isPlainObj'
import unnest from './unnest'

const flatten = data => {
  if (_isArray(data) || isPlainObj(data)) {
    const list = isPlainObj(data) ? Object.values(data) : data

    return list.reduce((accu, curr) => accu.concat(flatten(unnest(curr))), [])
  }

  return data
}

export default _curry1(flatten)
