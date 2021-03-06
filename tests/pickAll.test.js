import { pickAll } from '../src'
import eq from './shared/eq'

describe('pickAll', function() {
  const obj = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }
  it('copies the named properties of an object to the new object', function() {
    eq(pickAll(['a', 'c', 'f'], obj), { a: 1, c: 3, f: 6 })
  })

  it('includes properties not present on the input object', function() {
    eq(pickAll(['a', 'c', 'g'], obj), { a: 1, c: 3, g: undefined })
  })
})
