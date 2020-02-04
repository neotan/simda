import _curry1 from './internal/_curry1'

const fromPairs = pairs => {
  const result = {}

  for (let [prop, val] of pairs) {
    result[prop] = val
  }

  return result
}

export default _curry1(fromPairs)
