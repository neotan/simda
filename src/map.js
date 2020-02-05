import _curry2 from './internal/_curry2'
import _isObject from './internal/_isObject'
import _map from './internal/_map'
import _reduce from './internal/_reduce'
import keys from './keys'

const map = (fn, list) => {
  if (list == null) {
    throw new TypeError('list is nil')
  }

  switch (true) {
    case _isObject(list):
      return _reduce(
        (acc, key) => {
          acc[key] = fn(list[key], key, list)
          return acc
        },
        {},
        keys(list),
      )

    default:
      return _map(fn, list)
  }
}

export default _curry2(map)
