import * as R from 'ramda'
import { IPerson, makeRandomIPerson } from './models/person'

const person: IPerson = makeRandomIPerson()
const paris: [string, any][] = R.toPairs(person)
console.log('paris', paris)