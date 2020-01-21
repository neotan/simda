import curry1 from './curry1'
import isArray from './isArray'

const unnest = list => {
  return isArray(list)
    ? list.reduce((accu, curr) => accu.concat(curr), [])
    : list
}

export default curry1(unnest)
