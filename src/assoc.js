import _curry3 from './internal/_curry3'

const assoc = (prop, val, obj) => {
  const result = { ...obj }
  result[prop] = val
  return result
}

export default _curry3(assoc)
