export const to = <T>(promise: Promise<T>): Promise<[Error | undefined, T]> =>
  promise
    .then<[undefined, T]>((res: T) => {
      return [undefined, res];
    })
    // tslint:disable-next-line: no-any
    .catch<[Error, any]>((err: Error) => {
      return [err, undefined];
    });
