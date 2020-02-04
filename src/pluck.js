import _curry2 from './internal/_curry2'
import map from './map'
import prop from './prop'

const pluck = (key, list) => {
  return map(prop(key), list)
}

export default _curry2(pluck)
