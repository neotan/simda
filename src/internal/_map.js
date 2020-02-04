const _map = (fn, list) => {
  const result = []

  for (let el of list) {
    result.push(fn(el))
  }
  return result
}

export default _map
