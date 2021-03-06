/* @flow */

type commonAttrs = {
  id?: string,
  className?: string,
}

type JSXHelper<T> = Class<React$Component<void, T, mixed>>;

/* $JSXIntrinsics is special and magic.
   Flow recognizes this type and checks react's intrinsic tags against it.*/
type $JSXIntrinsics = {
  a: JSXHelper<commonAttrs & {href: string}>,
  aside: JSXHelper<commonAttrs>,
  button: JSXHelper<commonAttrs & {onClick: Function}>,
  div: JSXHelper<commonAttrs>,
  ellipse: JSXHelper<commonAttrs>,
  g: JSXHelper<commonAttrs>,
  h1: JSXHelper<commonAttrs>,
  h2: JSXHelper<commonAttrs>,
  h3: JSXHelper<commonAttrs>,
  ul: JSXHelper<commonAttrs>,
  li: JSXHelper<commonAttrs>,
  header: JSXHelper<commonAttrs>,
  i: JSXHelper<commonAttrs>,
  img: JSXHelper<commonAttrs>,
  input: JSXHelper<commonAttrs>,
  label: JSXHelper<commonAttrs>,
  main: JSXHelper<commonAttrs>,
  p: JSXHelper<commonAttrs>,
  path: JSXHelper<commonAttrs>,
  polygon: JSXHelper<commonAttrs>,
  pre: JSXHelper<commonAttrs>,
  rect: JSXHelper<commonAttrs>,
  section: JSXHelper<commonAttrs>,
  span: JSXHelper<commonAttrs>,
  svg: JSXHelper<commonAttrs>,
  table: JSXHelper<commonAttrs>,
  tbody: JSXHelper<commonAttrs>,
  td: JSXHelper<commonAttrs>,
  textarea: JSXHelper<commonAttrs>,
  th: JSXHelper<commonAttrs>,
  thead: JSXHelper<commonAttrs>,
  tr: JSXHelper<commonAttrs>,
  footer: JSXHelper<commonAttrs>,
  b: JSXHelper<commonAttrs>,
};
