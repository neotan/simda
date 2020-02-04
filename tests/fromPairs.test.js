import { fromPairs } from '../src'
import eq from './shared/eq'

describe('fromPairs', function() {
  it('combines an array of two-element arrays into an object', function() {
    eq(
      fromPairs([
        ['a', 1],
        ['b', 2],
        ['c', 3],
      ]),
      { a: 1, b: 2, c: 3 },
    )
  })

  it('gives later entries precedence over earlier ones', function() {
    eq(
      fromPairs([
        ['x', 1],
        ['x', 2],
        [undefined, 3],
        [undefined, 4],
        [null, 5],
        [null, 6],
      ]),
      { x: 2, undefined: 4, null: 6 },
    )
  })
})
