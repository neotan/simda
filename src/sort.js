import _curry2 from './internal/_curry2'

const sort = (comparator, list) => {
  const result = [...list]

  result.sort(comparator)
  return result
}

export default _curry2(sort)
