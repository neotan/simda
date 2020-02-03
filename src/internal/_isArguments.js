import _has from './_has'

const toString = Object.prototype.toString
const _isArguments = x => {
  return toString.call(x) === '[object Arguments]' || _has('callee', x)
}

export default _isArguments
