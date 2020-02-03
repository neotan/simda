import _curry2 from './internal/_curry2'
import _toString from './internal/_toString'
import isFunction from './isFunction'
import isPlainObj from './isPlainObj'

const ARRAY_TYPES = [
  '[object Array]',
  '[object Int8Array]',
  '[object Uint8Array]',
  '[object Uint8ClampedArray]',
  '[object Int16Array]',
  '[object Uint16Array]',
  '[object Int32Array]',
  '[object Uint32Array]',
  '[object Float32Array]',
  '[object Float64Array]',
]

const execFn = (val, key, fn) => (isFunction(val) ? val : fn(val, key))

const map = (fn, functor) => {
  let tempFunctor = new functor.constructor()
  switch (true) {
    case isPlainObj(functor):
      return Object.entries(functor).reduce((accu, [key, val]) => {
        accu[key] = execFn(val, key, fn)
        return accu
      }, {})

    case ARRAY_TYPES.includes(_toString(functor)):
      tempFunctor = new functor.constructor(functor.length)
      functor.forEach((val, i) => {
        tempFunctor[i] = execFn(val, i, fn)
      })
      console.log({ tempFunctor })
      return tempFunctor

    case _toString(functor) === '[object Set]':
      Object.entries(functor).forEach((val, key) => {
        tempFunctor.add(execFn(val, key), fn)
      })
      return tempFunctor

    case _toString(functor) === '[object Map]':
      Object.entries(functor).forEach((val, key) => {
        tempFunctor.set(key, execFn(val, key), fn)
      })
      return tempFunctor

    case _toString(functor) === '[object String]':
      tempFunctor = ''
      Object.entries(functor).forEach(([i, char]) => {
        tempFunctor += execFn(char, i, fn)
      })
      return tempFunctor

    default:
      return functor
  }
}

export default _curry2(map)
