import { createRangeIterable } from "./createRangeIterable"
const iterable = createRangeIterable(1, 3 + 1)
for (let value of iterable) // [Symbol.iterator]() 메서드가 없다는 오류 발생
  console.log(value)