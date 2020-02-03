import _curry2 from './internal/_curry2'

const pick = (props, obj) => {
  const result = {}

  for (let prop of props) {
    if (prop in obj) {
      result[prop] = obj[prop]
    }
  }
  return result
}

export default _curry2(pick)
