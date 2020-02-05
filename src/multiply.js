import _curry2 from './internal/_curry2'

const multiply = (a, b) => {
  return Number(a) * Number(b)
}

export default _curry2(multiply)
