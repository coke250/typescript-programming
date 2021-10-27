import { FirstOrderFunc, SecondOrderFunc } from "./function-signature"
import { add } from "./second-order-func"

const add1: FirstOrderFunc<number, number> = add(1) //add1은 부분 함수
console.log(
  add1(2),
  add(1)(2)
)