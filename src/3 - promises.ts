import { error, timer, trace } from './utils';
console.log('start');

//  Promise<T>

// Las promesas te abstraen del tiempo
const p1 = Promise.resolve(1);
const t1 = timer(1, 1000);
// Las promesas te abstraen del manejo de error
const e1 = Promise.reject(`Falló el pedido AJAX`);

const inc = (n: number) => n + 1;

p1
  .then(inc)
  .then(x => x, e => Promise.reject(e))
  .then(trace('Ok:'))
  .catch(error('Ups:'));
