import _curry1 from './internal/_curry1'

const toUpper = str => {
  return str.toUpperCase()
}

export default _curry1(toUpper)
