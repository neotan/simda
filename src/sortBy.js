import _curry2 from './internal/_curry2'

const sortBy = (fn, list) => {
  const result = [...list]

  result.sort((a, b) => {
    const aa = fn(a)
    const bb = fn(b)

    return aa < bb ? -1 : aa > bb ? 1 : 0
  })

  return result
}

export default _curry2(sortBy)
