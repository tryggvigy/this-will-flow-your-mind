// @flow

function formatMonthDay(monthDay) {
  // $FlowSuppressError: `endsWith` method can only be called on `string`, got `number`
  return monthDay.endsWith('.') ? monthDay : `${monthDay}.`;
}
formatMonthDay('1.')
formatMonthDay(1)

function foo(s: string) {
  if(s == undefined) {
    return s;
  }
}
foo('')
