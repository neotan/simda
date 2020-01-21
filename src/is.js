import curry2 from "./curry2";

const is = (Ctor, x) => {
  return (x != null && x.constructor === Ctor) || x instanceof Ctor
}

export default curry2(is)
