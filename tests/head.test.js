import assert from 'assert'
import { head } from '../src'
import eq from './shared/eq'

describe('head', function() {
  it('returns the first element of an ordered collection', function() {
    eq(head([1, 2, 3]), 1)
    eq(head([2, 3]), 2)
    eq(head([3]), 3)
    eq(head([]), undefined)

    eq(head('abc'), 'a')
    eq(head('bc'), 'b')
    eq(head('c'), 'c')
    eq(head(''), '')
  })

  it('throws if applied to null or undefined', function() {
    assert.throws(function() {
      head(null)
    }, TypeError)
    assert.throws(function() {
      head(undefined)
    }, TypeError)
  })
})
