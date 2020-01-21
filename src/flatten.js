import curry1 from './curry1'
import isArray from './isArray'
import isPlainObj from './isPlainObj'
import unnest from './unnest'

const flatten = data => {
  if (isArray(data) || isPlainObj(data)) {
    const list = isPlainObj(data) ? Object.values(data) : data

    return list.reduce((accu, curr) => accu.concat(flatten(unnest(curr))), [])
  }

  return data
}

export default curry1(flatten)
