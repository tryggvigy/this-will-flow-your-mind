// @flow

function returnStringItGot(str: string): string {
  return str
}
// $FlowSuppressError: got `number` required `string`
returnStringItGot(1)


function AgainReturnsStringItGot(str /*:string*/) /*:string*/ {
  return str
}
// $FlowSuppressError: got `number` required `string`
AgainReturnsStringItGot(1)


function returnWhateverItGot<T>(anything: T): T {
  return anything
}
returnWhateverItGot(1)
returnWhateverItGot('1')
returnWhateverItGot(undefined)
