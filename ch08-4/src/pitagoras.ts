import { pipe } from './pipe'
import { squaredMap } from './squaredMap'
import { sumArray } from './sumArray'

const pitagras = pipe(
  squaredMap,
  sumArray,
  Math.sqrt
)

console.log(
  pitagras([3, 4]) // 5
)