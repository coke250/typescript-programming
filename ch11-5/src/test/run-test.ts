import { IO } from '../classes/IO'

const work = () => {
  console.log('work called...')
  return { name: 'ssabi', age: 29 }
}
const result = IO.of(work).runIO()
console.log(result)