import { multiply } from '../src'
import eq from './shared/eq'

describe('multiply', function() {
  it('multiplies together two numbers', function() {
    eq(multiply(6, 7), 42)
  })
})
