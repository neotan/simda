import _curry2 from './internal/_curry2'

const path = (paths, obj) => {
  let val = obj

  for (let path of paths) {
    if (val == null) {
      return
    }
    val = val[path]
  }

  return val
}

export default _curry2(path)
