export function trace (msg: string)  {
    return <T>(val: T) => {
        console.log(msg, val);
        return val;
    };
}

export function error (msg: string)  {
    return <T>(val: T) => {
      console.error(msg, val);
      return val;
    };
}

export function timer <T> (val: T, n: number) {
    return new Promise<T>(resolve => {
    setTimeout(() => resolve(val), 2000);
  });
}