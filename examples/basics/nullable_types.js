// @flow

function greet(name: string): void {
  console.log('hello, ' + name);
}

// $FlowSuppressError: `null` this type is incompatible with `string`
const person: string = null; // Flow is already unhappy
greet(person); // TypeScript has no problem with this


// I kind of just assumed it would be there, since accessing properties on
// unexpected null and undefined values is by far the most common error
// I see in JavaScript codebases, and I figured it would be one of the
// first things a stricter flavour of JavaScript would tackle.
// s.s. typescript getur thetta ekki
