import { path, prop } from '../src'
import eq from './shared/eq'

describe('prop', function() {
  const fred = { name: 'Fred', age: 23 }

  it('returns a function that fetches the appropriate property', function() {
    const nm = prop('name')
    eq(typeof nm, 'function')
    eq(nm(fred), 'Fred')
  })

  it('shows the same behaviour as path for an undefined object', function() {
    let propResult, propException, pathResult, pathException
    try {
      propResult = prop('name', undefined)
    } catch (e) {
      propException = e
    }

    try {
      pathResult = path(['name'], undefined)
    } catch (e) {
      pathException = e
    }

    eq(propResult, pathResult)
    eq(propException, pathException)
  })
})
