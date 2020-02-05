import jsv from 'jsverify'
import { always } from '../src'
import eq from './shared/eq'

describe('always', function() {
  it('returns a function that returns the object initially supplied', function() {
    const theMeaning = always(42)
    eq(theMeaning(), 42)
    eq(theMeaning(10), 42)
    eq(theMeaning(false), 42)
  })

  it('works with various types', function() {
    eq(always(false)(), false)
    eq(always('abc')(), 'abc')
    eq(always({ a: 1, b: 2 })(), { a: 1, b: 2 })
    const obj = { a: 1, b: 2 }
    eq(always(obj)(), obj)
    const now = new Date(1776, 6, 4)
    eq(always(now)(), new Date(1776, 6, 4))
    eq(always(undefined)(), undefined)
  })
})

describe('always properties', function() {
  jsv.property('returns initial argument', jsv.json, jsv.json, function(a, b) {
    const f = always(a)

    return f() === a && f(b) === a
  })
})
