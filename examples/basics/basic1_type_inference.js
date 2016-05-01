// @flow

function formatMonthDay(monthDay) {
  // $FlowSuppressError
  return monthDay.endsWith('.') ? monthDay : `${monthDay}.`;
}
formatMonthDay('1.')
formatMonthDay(1)
