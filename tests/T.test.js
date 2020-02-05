import { T } from '../src'
import eq from './shared/eq'

describe('T', function() {
  it('always returns true', function() {
    eq(T(), true)
    eq(T(10), true)
    eq(T(true), true)
  })
})
