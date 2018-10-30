import { Task } from '@ts-task/task';
import { DontLikeNumber } from './dont-like-number';
import { error, trace } from './utils';

// Task<T, E>
const t1 = Task.resolve(1);

const inc = (n: number) => n + 1;

const incPuedeFallar = (n: number) => {
  if (n === 2) {
    // throw `No me gusta el número 2`;
    // throw 2
    return Task.reject(new DontLikeNumber(2));
  }
  return Task.resolve(n + 1);
};

t1
  .map(inc)
  .chain(incPuedeFallar)
  .pipe(t => t)
  .catch(e => {
    if (e instanceof DontLikeNumber) {
      return Task.resolve(0);
    } else {
      return Task.reject(e);
    }
  })
  .pipe(t => t)
  .fork(
    error('Ups:'),
    trace('Ok:')
  );


