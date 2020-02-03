import _curry3 from './internal/_curry3'
import pathOr from './pathOr'

const propOr = (defaultVal, prop, obj) => {
  return pathOr(defaultVal, [prop], obj)
}

export default _curry3(propOr)
