import _curry1 from './internal/_curry1'
import keys from './keys'

const values = obj => {
  const props = keys(obj)
  const vals = []

  for (let prop of props) {
    vals.push(obj[prop])
  }
  return vals
}

export default _curry1(Object.values || values)
