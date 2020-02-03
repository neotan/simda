import _curry1 from './internal/_curry1'

const keys = obj => {
  if (Object(obj) !== obj) {
    return []
  }
  return Object.keys(obj)
}

export default _curry1(keys)
