import { pluck } from '../src'
import eq from './shared/eq'

describe('pluck', function() {
  const people = [
    { name: 'Fred', age: 23 },
    { name: 'Wilma', age: 21 },
    { name: 'Pebbles', age: 2 },
  ]

  it('returns a function that maps the appropriate property over an array', function() {
    const nm = pluck('name')
    eq(typeof nm, 'function')
    eq(nm(people), ['Fred', 'Wilma', 'Pebbles'])
  })
})
