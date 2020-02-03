import _curry2 from './internal/_curry2'

const pickAll = (props, obj) => {
  const result = {}

  for (let prop of props) {
    result[prop] = obj[prop]
  }
  return result
}

export default _curry2(pickAll)
