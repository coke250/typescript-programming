export type FirstOrderFunc<T, R> = (arg: T) => R
export type SecondOrderFunc<T, R> = (arg: T) => FirstOrderFunc<T, R>
export type ThirdOrderFunc<T, R> = (arg: T) => SecondOrderFunc<T, R>