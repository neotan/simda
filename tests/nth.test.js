import assert from 'assert'
import { nth } from '../src'
import eq from './shared/eq'

describe('nth', function() {
  var list = ['foo', 'bar', 'baz', 'quux']

  it('accepts positive offsets', function() {
    eq(nth(0, list), 'foo')
    eq(nth(1, list), 'bar')
    eq(nth(2, list), 'baz')
    eq(nth(3, list), 'quux')
    eq(nth(4, list), undefined)

    eq(nth(0, 'abc'), 'a')
    eq(nth(1, 'abc'), 'b')
    eq(nth(2, 'abc'), 'c')
    eq(nth(3, 'abc'), '')
  })

  it('accepts negative offsets', function() {
    eq(nth(-1, list), 'quux')
    eq(nth(-2, list), 'baz')
    eq(nth(-3, list), 'bar')
    eq(nth(-4, list), 'foo')
    eq(nth(-5, list), undefined)

    eq(nth(-1, 'abc'), 'c')
    eq(nth(-2, 'abc'), 'b')
    eq(nth(-3, 'abc'), 'a')
    eq(nth(-4, 'abc'), '')
  })

  it('throws if applied to null or undefined', function() {
    assert.throws(function() {
      nth(0, null)
    }, TypeError)
    assert.throws(function() {
      nth(0, undefined)
    }, TypeError)
  })
})
