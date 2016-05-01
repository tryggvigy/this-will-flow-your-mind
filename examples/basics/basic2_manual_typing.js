// @flow

function returnStringItGot(str: string): string {
  return str
}
// $FlowSuppressError
returnStringItGot(1)

function AgainReturnsStringItGot(str /*:string*/) /*:string*/ {
  return str
}
// $FlowSuppressError
AgainReturnsStringItGot(1)



function returnWhateverItGot<T>(anything: T): T {
  return anything
}
returnWhateverItGot(1)
