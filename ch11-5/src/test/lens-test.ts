import { IO } from '../classes/IO'
import * as R from 'ramda'

const work = () => ({ name: 'ssabi', age: 29 })

const result = IO.of(work)
  // @ts-ignore
  .map(R.view(R.lensProp('name')))
  .map(R.toUpper)
  .runIO()
console.log(result) // ssabi