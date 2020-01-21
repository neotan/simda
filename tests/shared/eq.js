import assert from 'assert'
import * as R from 'ramda'

const eq = (...args) => {
  const [actual, expected] = args
  assert.strictEqual(args.length, 2)
  assert.strictEqual(R.toString(actual), R.toString(expected))
}

export default eq
