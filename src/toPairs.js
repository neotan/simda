import _curry1 from './internal/_curry1'
import _has from './internal/_has'

const toPairs = obj => {
  const pairs = []
  if (typeof Object.entries === 'function') {
    return Object.entries(obj)
  } else {
    for (let prop in obj) {
      if (_has(prop, obj)) {
        pairs[pairs.length] = [prop, obj[prop]]
      }
    }
    return pairs
  }
}

export default _curry1(toPairs)
