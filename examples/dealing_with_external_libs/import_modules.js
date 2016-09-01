// @flow

import {findKey} from 'lodash';
import mapObj from 'map-obj'

const pizzas = [
  { title: 'Margherita', vegetarian: true },
  { title: 'Pepperoni', vegetarian: false },
  { title: 'Four cheese', vegetarian: true },
  { title: 'Hawaiian', vegetarian: false },
];

function vegetarianPizzas() {
  return findKey(pizzas, {title: 'Hawaiian'});
}

const res = mapObj({ foo: 1, bar: 2 }, (key, value, object) => {
  return [value, key]
})
