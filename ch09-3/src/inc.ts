import * as R from 'ramda'

const numbers: number[] = R.range(1, 9 + 1)

const incNumbers = R.pipe(
  R.tap(n => console.log(n)),
  R.map(R.inc),
  R.tap(n => console.log(n)),
)

const newNumbers = incNumbers(numbers)
// console.log(newNumbers)