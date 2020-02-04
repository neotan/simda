import _curry1 from './internal/_curry1'

const keys = obj => {
  //tests whether obj is an object(true) or a primitive(false)
  if (Object(obj) !== obj) {
    return []
  }
  return Object.keys(obj)
}

export default _curry1(keys)
