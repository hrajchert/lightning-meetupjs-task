import { Task } from '@ts-task/task';
import { error, trace } from './utils';

// Task<T, E>
const t1 = Task.resolve(1);

const inc = (n: number) => n + 1;

const incThatMayFail = (n: number) => {
  if (n === 2) {
    // throw `I don't like number 2`;
    return Task.reject(`I don't like number 2`);
  }
  return Task.resolve(n + 1);
};

t1
  .map(inc)
  .pipe(
    t => t
  )
  .chain(incThatMayFail)
  .pipe(
    t => t
  )
  .fork(
    error('Ups:'),
    trace('Ok:')
  );


