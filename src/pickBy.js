import _curry2 from './internal/_curry2'

const pickBy = (test, obj) => {
  const result = {}

  for (let prop in obj) {
    if (test(obj[prop], prop, obj)) {
      result[prop] = obj[prop]
    }
  }

  return result
}

export default _curry2(pickBy)
