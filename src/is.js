import _curry2 from './internal/_curry2'

const is = (Ctor, x) => {
  return (x != null && x.constructor === Ctor) || x instanceof Ctor
}

export default _curry2(is)
