import { operators, Task } from '@ts-task/task';
import { share } from '@ts-task/utils';
import { error, trace } from './utils';

const {map, chain} = operators;

const pipedInc = map((n: number) => n + 1);

const pipedIncThatMayFail = chain((n: number) => {
  if (n === 2) {
    // throw `I don't like number 2`;
    return Task.reject(`I don't like number 2`);
  }
  return Task.resolve(n + 1);
});

Task.resolve(1)
  .pipe(
    pipedInc,
    pipedIncThatMayFail,
    share(),
    t => t
  )
  .fork(
    error('Ups:'),
    trace('Ok:')
  );



