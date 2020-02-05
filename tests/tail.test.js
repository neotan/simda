import assert from 'assert'
import { tail } from '../src'
import eq from './shared/eq'

describe('tail', function() {
  it('returns the tail of an ordered collection', function() {
    eq(tail([1, 2, 3]), [2, 3])
    eq(tail([2, 3]), [3])
    eq(tail([3]), [])
    eq(tail([]), [])

    eq(tail('abc'), 'bc')
    eq(tail('bc'), 'c')
    eq(tail('c'), '')
    eq(tail(''), '')
  })

  it('throws if applied to null or undefined', function() {
    assert.throws(function() {
      tail(null)
    }, TypeError)
    assert.throws(function() {
      tail(undefined)
    }, TypeError)
  })
})
