import * as R from 'ramda'
import { IPerson, makeRandomIPerson } from './models/person'

const person: IPerson = makeRandomIPerson()

const name = R.pipe(
  R.prop('name'),
)(person)
console.log(name)