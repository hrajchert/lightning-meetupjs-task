import { error, trace } from './utils';

// Promise<T>
const p1 = Promise.resolve(1);

const inc = (n: number) => n + 1;

const incThatMayFail = (n: number) => {
  if (n === 2) {
    // throw `I don't like number 2`;
    return Promise.reject(`I don't like number 2`);
  }
  return Promise.resolve(n + 1);
};

p1
  .then(inc)
  .then(
    x => x,
    e => Promise.reject(e)
  )
  .then(incThatMayFail)
  .then(
    x => x,
    e => Promise.reject(e)
  )
  .then(trace('Ok:'))
  .catch(error('Ups:'));



