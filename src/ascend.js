import _curry3 from './internal/_curry3'

const ascend = (fn, a, b) => {
  const aa = fn(a)
  const bb = fn(b)

  return aa < bb ? -1 : aa > bb ? 1 : 0
}

export default _curry3(ascend)
