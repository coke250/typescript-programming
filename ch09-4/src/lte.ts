import * as R from 'ramda'

R.pipe(
  R.filter(R.lte(3)),
  R.tap(a => console.log(a)) // [3, 4, 5, 6, 7, 8, 9, 10]
)(R.range(1, 10 + 1))