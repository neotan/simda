import { F } from '../src'
import eq from './shared/eq'

describe('F', function() {
  it('always returns false', function() {
    eq(F(), false)
    eq(F(10), false)
    eq(F(true), false)
  })
})
