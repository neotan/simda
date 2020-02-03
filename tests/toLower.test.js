import { toLower } from '../src'
import eq from './shared/eq'

describe('toLower', function() {
  it('returns the lower-case equivalent of the input string', function() {
    eq(toLower('XYZ'), 'xyz')
  })
})
