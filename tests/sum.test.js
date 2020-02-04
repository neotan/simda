import { sum } from '../src'
import eq from './shared/eq'

describe('sum', function() {
  it('adds together the array of numbers supplied', function() {
    eq(sum([1, 2, 3, 4]), 10)
  })

  it('does not save the state of the accumulator', function() {
    eq(sum([1, 2, 3, 4]), 10)
    eq(sum([1]), 1)
    eq(sum([5, 5, 5, 5, 5]), 25)
  })
})
