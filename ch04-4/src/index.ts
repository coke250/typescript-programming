// 콜백 함수
import { init } from "./init";
init(() => console.log('custom initialization finished.'))

// 중첩 함수
const calc = (value: number, cb: (number) => void): void => {
  let add = (a, b) => a + b
  function multiply(a, b) { return a * b }

  let result = multiply(add(1, 2), value)
  cb(result)
}

calc(30, (result: number) => console.log(`result is ${result}`))

// 고차 함수와 클로저, 그리고 부분 함수
const add = (a: number): (number) => number => (b: number): number => a + b
console.log(add(1)(2)) // 3

import { NumberToNumberFunc, add as add2 } from "./add"
let fn: NumberToNumberFunc = add2(1)

let result = fn(2)
console.log(result) // 3
console.log(add(1)(2))  // 3

