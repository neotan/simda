import { filter } from '../src'
import eq from './shared/eq'

describe('filter', function() {
  const even = function(x) {
    return x % 2 === 0
  }

  it('reduces an array to those matching a filter', function() {
    eq(filter(even, [1, 2, 3, 4, 5]), [2, 4])
  })

  it('returns an empty array if no element matches', function() {
    eq(
      filter(
        function(x) {
          return x > 100
        },
        [1, 9, 99],
      ),
      [],
    )
  })

  it('returns an empty array if asked to filter an empty array', function() {
    eq(
      filter(function(x) {
        return x > 100
      }, []),
      [],
    )
  })

  it('filters objects', function() {
    const positive = function(x) {
      return x > 0
    }
    eq(filter(positive, {}), {})
    eq(filter(positive, { x: 0, y: 0, z: 0 }), {})
    eq(filter(positive, { x: 1, y: 0, z: 0 }), { x: 1 })
    eq(filter(positive, { x: 1, y: 2, z: 0 }), { x: 1, y: 2 })
    eq(filter(positive, { x: 1, y: 2, z: 3 }), { x: 1, y: 2, z: 3 })
  })
})
