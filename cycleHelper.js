/**
 * Helper used in the output bundle in case of dependency cycles.
 * Properties defined on the `factories` function are module factories, taking a
 * `module` and an `exports` argument.
 * The `.r` property of this function will contain the module cache.
 */
function factories (id) {
  var resolved = factories.r
  if (resolved[id]) return resolved[id].exports
  if (factories.hasOwnProperty(id)) {
    resolved[id] = { exports: {} }
    factories[id](resolved[id], resolved[id].exports)
    return resolved[id].exports
  }
  throw new Error('Cannot find module #' + id)
}