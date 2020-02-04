import assert from 'assert'
import { concat } from '../src'
import eq from './shared/eq'

describe('concat', function() {
  it('adds combines the elements of the two lists', function() {
    eq(concat(['a', 'b'], ['c', 'd']), ['a', 'b', 'c', 'd'])
    eq(concat([], ['c', 'd']), ['c', 'd'])
  })

  var z1 = {
    x: 'z1',
    concat: function(that) {
      return this.x + ' ' + that.x
    },
  }
  var z2 = {
    x: 'z2',
  }

  it('adds combines the elements of the two lists', function() {
    eq(concat(['a', 'b'], ['c', 'd']), ['a', 'b', 'c', 'd'])
    eq(concat([], ['c', 'd']), ['c', 'd'])
  })

  it('works on strings', function() {
    eq(concat('foo', 'bar'), 'foobar')
    eq(concat('x', ''), 'x')
    eq(concat('', 'x'), 'x')
    eq(concat('', ''), '')
  })

  it('delegates to non-String object with a concat method, as second param', function() {
    eq(concat(z1, z2), 'z1 z2')
  })

  it('throws if attempting to combine an array with a non-array', function() {
    assert.throws(function() {
      return concat([1], 2)
    }, TypeError)
  })

  it('throws if not an array, String, or object with a concat method', function() {
    assert.throws(function() {
      return concat({}, {})
    }, TypeError)
  })
})
