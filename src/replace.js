import _curry3 from './internal/_curry3'

const replace = (regex, replacement, str) => {
  return str.replace(regex, replacement)
}

export default _curry3(replace)
