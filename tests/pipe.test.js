import assert from 'assert'
import { map, multiply, pipe } from '../src'
import eq from './shared/eq'

describe('pipe', function() {
  it('is a variadic function', function() {
    eq(typeof pipe, 'function')
    eq(pipe.length, 0)
  })

  it('performs left-to-right function composition', function() {
    //  f :: (String, Number?) -> ([Number] -> [Number])
    const f = pipe(parseInt, multiply, map)

    eq(f.length, 2)
    eq(f('10')([1, 2, 3]), [10, 20, 30])
    eq(f('10', 2)([1, 2, 3]), [2, 4, 6])
  })

  it('passes context to functions', function() {
    function x(val) {
      return this.x * val
    }
    function y(val) {
      return this.y * val
    }
    function z(val) {
      return this.z * val
    }
    const context = {
      a: pipe(x, y, z),
      x: 4,
      y: 2,
      z: 1,
    }
    eq(context.a(5), 40)
  })

  it('throws if given no arguments', function() {
    assert.throws(
      function() {
        pipe()
      },
      function(err) {
        return (
          err.constructor === Error &&
          err.message === 'pipe requires at least one argument'
        )
      },
    )
  })

  it('can be applied to one argument', function() {
    const f = function(a, b, c) {
      return [a, b, c]
    }
    const g = pipe(f)
    eq(g.length, 3)
    eq(g(1, 2, 3), [1, 2, 3])
  })
})
