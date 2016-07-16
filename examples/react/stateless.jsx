// @flow
import React from "react";

const Bold = ({text}: { text: string }) => <b>{text}</b>;
// $FlowSuppressError: `text` prop not found
<Bold />;
// $FlowSuppressError: `text` prop should be string
<Bold text={0} />;
<Bold text="" />; // ok


var Z = 0;
// $FlowSuppressError: expected React component
<Z />;
