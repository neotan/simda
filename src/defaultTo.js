import _curry2 from './internal/_curry2'

const defaultTo = (defaultVal, val) => {
  return val == null || val !== val ? defaultVal : val
}

export default _curry2(defaultTo)
