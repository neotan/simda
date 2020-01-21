import { is } from '../src'
import eq from './shared/eq'

/*eslint-enable */
describe('is', () => {
  it('works with built-in types', () => {
    eq(is(Array, []), true)
    eq(is(Boolean, new Boolean(false)), true)
    eq(is(Date, new Date()), true)
    eq(
      is(Function, () => {}),
      true,
    )
    eq(is(Number, new Number(0)), true)
    eq(is(Object, {}), true)
    eq(is(RegExp, /(?:)/), true)
    eq(is(String, new String('')), true)
  })

  it('works with user-defined types', () => {
    function Foo() {}

    function Bar() {}

    Bar.prototype = new Foo()

    var foo = new Foo()
    var bar = new Bar()

    eq(is(Foo, foo), true)
    eq(is(Bar, bar), true)
    eq(is(Foo, bar), true)
    eq(is(Bar, foo), false)
  })

  it('considers almost everything an object', () => {
    function Foo() {}

    var foo = new Foo()
    var isObject = is(Object)

    eq(isObject(foo), true)
    eq(
      isObject(
        (function() {
          return arguments
        })(),
      ),
      true,
    )
    eq(isObject([]), true)
    eq(isObject(new Boolean(false)), true)
    eq(isObject(new Date()), true)
    eq(
      isObject(function() {}),
      true,
    )
    eq(isObject(new Number(0)), true)
    eq(isObject(/(?:)/), true)
    eq(isObject(new String('')), true)

    eq(isObject(null), false)
    eq(isObject(undefined), false)
  })

  it('does not coerce', () => {
    eq(is(Boolean, 1), false)
    eq(is(Number, '1'), false)
    eq(is(Number, false), false)
  })

  it('recognizes primitives as their object equivalents', () => {
    eq(is(Boolean, false), true)
    eq(is(Number, 0), true)
    eq(is(String, ''), true)
  })

  it('does not consider primitives to be instances of Object', () => {
    eq(is(Object, false), false)
    eq(is(Object, 0), false)
    eq(is(Object, ''), false)
  })
})
/*eslint-enable */
