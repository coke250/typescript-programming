import { Calculator } from "../classes/Calculator"

const value = (new Calculator(1))
  .add(2)       // 3
  .add(3)       // 6
  .multiply(4)  // 24
  .value()

console.log(value)