// @flow

function enforceObject(x: ?Object): Object {
  if (typeof x === "object" && x !== null)
    return x // x can still be null since `typeof null === "object"`
  else
    return {}
}
