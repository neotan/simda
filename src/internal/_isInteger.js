const _isInteger = x => {
  // prettier-ignore
  // eslint-disable-next-line
  return (x << 0) === x
}

export default Number.isInteger || _isInteger
