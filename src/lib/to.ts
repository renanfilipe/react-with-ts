export const to = <T>(promise: Promise<T>): Promise<[Error | undefined, T]> =>
  promise
    .then<[undefined, T]>((res: T) => {
      return [undefined, res];
    })
    .catch<[Error, any]>((err: Error) => {
      return [err, undefined];
    });
