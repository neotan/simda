import { reject } from '../src'
import eq from './shared/eq'

describe('reject', function() {
  const even = function(x) {
    return x % 2 === 0
  }

  it('reduces an array to those not matching a filter', function() {
    eq(reject(even, [1, 2, 3, 4, 5]), [1, 3, 5])
  })

  it('returns an empty array if no element matches', function() {
    eq(
      reject(
        function(x) {
          return x < 100
        },
        [1, 9, 99],
      ),
      [],
    )
  })

  it('returns an empty array if asked to filter an empty array', function() {
    eq(
      reject(function(x) {
        return x > 100
      }, []),
      [],
    )
  })

  it('returns an empty array if no element matches', function() {
    eq(
      reject(
        function(x) {
          return x < 100
        },
        [1, 9, 99],
      ),
      [],
    )
  })

  it('returns an empty array if asked to filter an empty array', function() {
    eq(
      reject(function(x) {
        return x > 100
      }, []),
      [],
    )
  })

  it('filters objects', function() {
    eq(
      reject(n => n === 0, {}),
      {},
    )
    eq(
      reject(n => n === 0, { x: 0, y: 0, z: 0 }),
      {},
    )
    eq(
      reject(n => n === 0, { x: 1, y: 0, z: 0 }),
      { x: 1 },
    )
    eq(
      reject(n => n === 0, { x: 1, y: 2, z: 0 }),
      { x: 1, y: 2 },
    )
    eq(
      reject(n => n === 0, { x: 1, y: 2, z: 3 }),
      { x: 1, y: 2, z: 3 },
    )
  })
})
