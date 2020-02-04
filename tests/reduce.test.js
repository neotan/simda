import { concat, reduce } from '../src'
import eq from './shared/eq'

describe('reduce', function() {
  const add = function(a, b) {
    return a + b
  }
  const mult = function(a, b) {
    return a * b
  }

  it('folds simple functions over arrays with the supplied accumulator', function() {
    eq(reduce(add, 0, [1, 2, 3, 4]), 10)
    eq(reduce(mult, 1, [1, 2, 3, 4]), 24)
  })

  it('returns the accumulator for an empty array', function() {
    eq(reduce(add, 0, []), 0)
    eq(reduce(mult, 1, []), 1)
    eq(reduce(concat, [], []), [])
  })
})
