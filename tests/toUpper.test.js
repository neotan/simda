import { toUpper } from '../src'
import eq from './shared/eq'

describe('toUpper', function() {
  it('returns the upper-case equivalent of the input string', function() {
    eq(toUpper('abc'), 'ABC')
  })
})
