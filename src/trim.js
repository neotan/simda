import _curry1 from './internal/_curry1'

const ws = // white spaces
  '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028' +
  '\u2029\uFEFF'

const zeroWidth = '\u200b'

const hasProtoTrim = typeof String.prototype.trim === 'function'

const trim = str => {
  if (!hasProtoTrim || ws.trim() || !zeroWidth.trim()) {
    const beginRx = new RegExp(`^[${ws}][${ws}]*`)
    const endRx = new RegExp(`[${ws}][${ws}]*$`)
    return str.replace(beginRx, '').replace(endRx, '')
  } else {
    str.trim()
  }
}

export default _curry1(trim)
