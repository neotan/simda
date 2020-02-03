import _curry2 from './internal/_curry2'
import path from './path'

const prop = (prop, obj) => {
  return path([prop], obj)
}

export default _curry2(prop)
