import jsv from 'jsverify'
import { add } from '../src'
import eq from './shared/eq'

describe('add', function() {
  it('adds together two numbers', function() {
    eq(add(3, 7), 10)
  })

  it('coerces its arguments to numbers', function() {
    eq(add('1', '2'), 3)
    eq(add(1, '2'), 3)
    eq(add(true, false), 1)
    eq(add(null, null), 0)
    eq(add(undefined, undefined), NaN)
    eq(add(new Date(1), new Date(2)), 3)
  })
})

describe('add properties', function() {
  jsv.property('commutative', jsv.number, jsv.number, function(a, b) {
    return add(a, b) === add(b, a)
  })

  jsv.property('associative', jsv.number, jsv.number, jsv.number, function(
    a,
    b,
    c,
  ) {
    return add(a, add(b, c)) === add(add(a, b), c)
  })

  jsv.property('identity', jsv.number, function(a) {
    return add(a, 0) === a && add(0, a) === a
  })
})
