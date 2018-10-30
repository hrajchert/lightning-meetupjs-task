import { DontLikeNumber } from './dont-like-number';
import { error, trace } from './utils';


// Promise<T>
const p1 = Promise.resolve(1);

const inc = (n: number) => n + 1;

const incPuedeFallar = (n: number) => {
  if (n === 2) {
    // throw `No me gusta el número 2`;
    // throw 2
    return Promise.reject(new DontLikeNumber(2));
  }
  return Promise.resolve(n + 1);
};

p1
  .then(inc)
  .then(incPuedeFallar)
  .then(x => x, e => Promise.reject(e))
  .then(trace('Ok:'))
  .catch(error('Ups:'));


