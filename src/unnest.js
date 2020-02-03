import _curry1 from './internal/_curry1'
import isArray from './internal/_isArray'

const unnest = list => {
  return isArray(list)
    ? list.reduce((accu, curr) => accu.concat(curr), [])
    : list
}

export default _curry1(unnest)
