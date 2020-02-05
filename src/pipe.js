import _arity from './internal/_arity'
import _pipe from './internal/_pipe'
import reduce from './reduce'
import tail from './tail'

const pipe = (...args) => {
  if (args.length === 0) {
    throw new Error('pipe requires at least one argument')
  }

  return _arity(args[0].length, reduce(_pipe, args[0], tail(args)))
}

export default pipe
