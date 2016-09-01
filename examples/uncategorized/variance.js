class ReadOnlyMap<K, +V> {
  store: { [k:K]: V };
  constructor(store) { this.store = store; }
  get(k: K): ?V { return this.store[k]; }
}

class A {}
class C {}
class B extends A {}

var readOnlyMapOfB: ReadOnlyMap<string, B>;
// ok: B is a subtype of A, and V is a covariant type param.
var readOnlyMapOfA: ReadOnlyMap<string, A> = readOnlyMapOfB;
