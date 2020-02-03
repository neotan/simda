import defaultTo from './defaultTo'
import _curry3 from './internal/_curry3'
import path from './path'

const pathOr = (defVal, paths, obj) => {
  return defaultTo(defVal, path(paths, obj))
}

export default _curry3(pathOr)
