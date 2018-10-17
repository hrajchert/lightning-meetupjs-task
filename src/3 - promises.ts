import { error, timer, trace } from './utils';
console.log('start');

//  Promise<T>

// Promises abstract time
const p1 = Promise.resolve(1);
const t1 = timer(1, 1000);
// Promise abstract error handling
const e1 = Promise.reject(`I coulnd't get that number`);

const inc = (n: number) => n + 1;

p1
  .then(inc)
  .then(
    x => x,
    e => Promise.reject(e)
  )
  .then(trace('Ok:'))
  .catch(error('Ups:'));



