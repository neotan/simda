import { identity } from '../src'
import eq from './shared/eq'

/*eslint-enable */
describe('identity', () => {
  it('returns its first argument', () => {
    eq(identity(undefined), undefined)
    eq(identity('foo'), 'foo')
    eq(identity('foo', 'bar'), 'foo')
  })

  it('has length 1', function() {
    eq(identity.length, 1)
  })
})
/*eslint-enable */
