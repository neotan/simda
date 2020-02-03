import _curry2 from './internal/_curry2'

const zipObj = (keys, values) => {
  const result = {}
  const len = Math.min(keys.length, values.length)
  let idx = 0

  while (idx < len) {
    result[keys[idx]] = values[idx]
    idx++
  }

  return result
}
export default _curry2(zipObj)
